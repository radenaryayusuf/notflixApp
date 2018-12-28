import React, { Component } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { Container, Content, Button, Form, Item, Input, Label, Body, Thumbnail, Header, Footer } from 'native-base'

import axios from 'axios';
import connect from 'react-redux'

import deviceStorage from '../deviceStorage'

export default class LoginPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            error: '',
            loading: false
        }

        this.onSubmit = this.onSubmit.bind(this)
    }

    onFailed() {
        this.setState({
            error: 'Sign In Failed',
            loading: false
        })
    }

    onSubmit = () => {
        const { email, password } = this.state
        this.setState({error: '', loading: true})

        axios.post("http://www.animedemy.me:4441/api/v1/login", {
            email: email,
            password, password
        }) .then((response)=> {
            this.props.navigation.navigate('HomePage')
            deviceStorage.saveKey("id_token", response.data.jwt)
            this.props.newJWT(response.data.jwt)
        }) .catch((error)=> {
            console.log(error)
            this.onFailed()
        })
        // axios({
        //     method: 'post',
        //     url: 'http://www.animedemy.me:4441/api/v1/login',
        //     data: {
        //         email: this.state.email,
        //         password: this.state.password
        //     }
        // }) .then(function(response){
        //     deviceStorage.saveItem("id_token", response.data.jwt)
        // }) .catch(function(error) {
        //     alert(error)
        // })

        // if(this.state.email == 'admin' && this.state.password == 'admin') {
        //     this.props.navigation.navigate('HomePage')
        // } else {
        //     alert('Failed to Login')
        // }
    }

    render() {
        return(
            <Container>
                
                <Content style={{backgroundColor: '#0C0C0C'}} padder>
                    <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 25}}>
                        <Thumbnail source={require('../images/notflixw.png')} style={{width: 300, height: 100}} />
                    </View>
                    <Text style={{color: '#fff'}}>{this.state.email}</Text>
                    <Form>
                        <Item floatingLabel>
                            <Label style={{color: '#fff'}}>Email</Label>
                            <Input style={{color: '#fff'}} onChangeText={(email)=> this.setState({email})} />
                        </Item>
                        <Item floatingLabel>
                            <Label style={{color: '#fff'}}>Password</Label>
                            <Input style={{color: '#fff'}} onChangeText={(password)=> this.setState({password})} />
                        </Item>
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            {!this.state.loading ?
                                <Button onPress={this.onSubmit} full rounded style={{marginTop: 50, backgroundColor: '#ff3838'}}>
                                    <Text style={{color: '#fff'}}>Sign In</Text>
                                </Button>
                                :
                                <ActivityIndicator />
                            }
                        </View>
                    </Form>
                </Content>
                <Footer style={{backgroundColor: '#0C0C0C'}}>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Text note style={{color: '#fff'}}>Didn't have an Account? <Text note onPress={()=> this.props.navigation.push('RegisterPage')} style={{color: '#ff3838'}}> Sign Up Now</Text></Text>
                    </View>
                </Footer>
            </Container>
        );
    }
}

// export default connect()(LoginPage)