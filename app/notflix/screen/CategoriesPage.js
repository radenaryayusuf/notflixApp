import React, { Component } from 'react'
import { View, Text,Image,ActivityIndicator } from 'react-native'
import { Container,StyleProvider,Right,  Content, Left, Body, Icon, List, ListItem, H3, Header } from 'native-base'

import { connect } from 'react-redux'
import IconM from 'react-native-vector-icons/MaterialCommunityIcons'
import getTheme from '../../../native-base-theme/components';
import StarRating from 'react-native-star-rating'
import { Col, Row, Grid } from "react-native-easy-grid";
import custom from '../../../native-base-theme/variables/platform';
import { GET_CATEGORY} from '../actions'
class CategoriesPage extends Component {
   
    constructor(props) {
        super(props);
    
        this.state = {
         
          genrename : this.props.navigation.getParam('genre', 'GENRE TIDAK ADA')
        };
      }
    async componentDidMount() {
        await  this.props.dispatch(GET_CATEGORY(this.state.genrename))
    }
    gotoMovie(id,genre) {
        this.props.navigation.push('MoviePage', {id, genre})
      }
    render() {
        return(
           
            <StyleProvider style={getTheme(custom)}>
            
            <Container style={{marginTop:24}}>
           
                
                <Content style={{backgroundColor: '#0C0C0C'}}>
                    <Header style={{marginBottom: 25}}>
                       
                        <Left style={{flex:1}}>
                                <Icon  onPress={() => this.props.navigation.goBack()}  name="arrow-back" style={{color: '#fff'}} />
                            </Left>
                            <Body style={{justifyContent:'center',flex:1}}>
                                <H3 style={{color: '#fff', alignSelf:'center'}}>{this.props.navigation.getParam('genre', 'GENRE TIDAK ADA')}</H3>
                            </Body>
                            <Right style={{flex:1}} />
                        
                    </Header>
                    <List>
                        {/* <ListItem thumbnail>
                            <Left>
                                <Thumbnail square source={require('../images/aquaman7.jpg')} style={{height: 100, width: 75}} />
                            </Left>
                            <Body>
                                <Text style={{color: '#fff'}}>Aquaman</Text>
                                <Text note style={{color: '#fff'}}>2018 | 120 minute | 13+</Text>
                                <Icon name="star" style={{color: '#fff', fontSize: 16}} />
                            </Body>
                        </ListItem> */}
                        {
                            this.props.getcate.isLoading ? <ActivityIndicator/>:
                            this.props.getcate.results.map((item) => (
                            <ListItem style={{margin:10}} thumbnail key={item.id} onPress={ () => {this.gotoMovie(item.id, item.genre)}}>
                                <Left>
                                    <Image source={{uri:item.image}} style={{width: 100, height: 100,borderRadius:15}} />
                                </Left>
                                <Body>
                                    <Grid>
                                        <Row>
                                        <Text style={{color: '#fff'}}>{item.title}</Text>
                                        </Row>
                                        <Row>
                                            <Text note style={{color: '#fff'}}>{item.views} <IconM name="eye" style={{color:'#F1F1F1'}} size={20} /></Text>
                                        </Row>
                                        <Row>
                                        <StarRating 
                      disabled= {true}
                      maxStars= {5}
                      rating= {parseInt((item.rating.substring(13,14)/2) )}
                      starSize= {15}
                      fullStarColor= '#F3F3F3'
                      emptyStarColor='#505050'
                    />
                                            
                                        </Row>
                                    </Grid>
                                    
                                    
                                   
                                </Body>
                            </ListItem>
                        ))}
                    </List>
                </Content>
               
            </Container>
            </StyleProvider>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      getcate: state.getCategoriesreducers
   
    }
  }
  
  export default connect(mapStateToProps)(CategoriesPage);