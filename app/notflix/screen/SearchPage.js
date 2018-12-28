import React, { Component } from 'react';
import { View, Text, FlatList, Image, ActivityIndicator } from 'react-native'
import { Container,StyleProvider, Header, Content, Footer, FooterTab, Button, Icon, Item, Input, Right, Left, Body, H1, List, ListItem } from 'native-base';

import { connect } from 'react-redux'
import { SEARCH_MOVIE, newRelease } from '../actions'
import getTheme from '../../../native-base-theme/components';
import custom from '../../../native-base-theme/variables/platform';
class SearchPage extends Component {

 async componentDidMount() {
    await this.props.dispatch(SEARCH_MOVIE())
  }

  constructor(props) {
    super(props)

    this.state = {
      text: ''
    }
  }

  gotoMovie(id,genre) {
    this.props.navigation.navigate('MoviePage', {id, genre})
  }

  search = (text)=> {
    this.props.dispatch(SEARCH_MOVIE(text))
  }
  onPress = () => {
   this.setState({text:''})
   }
   onChanges = (texts) => {
    this.setState({text:texts}),
             this.search(texts)
    }

  render() {
    //{alert(JSON.stringify(this.props.search))}
    return (
      <StyleProvider style={getTheme(custom)}>
       
      <Container style={{backgroundColor: '#0c0c0c'}}>
        <H1 style={{color: '#fff', marginLeft: 10, marginBottom: 10}}>Search</H1>
        <Header searchBar rounded style={{backgroundColor: '#0c0c0c'}}>
          <Item style={{borderRadius: 25}}>
            <Icon name="search" />
            <Input value={this.state.text} onChangeText={this.onChanges} placeholder="Search" />
            <Icon onPress = {this.onPress} name="close-circle" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <Content padder style={{backgroundColor: '#0c0c0c'}}>
        <View>
          <Right>
            <Text note style={{color: '#fff'}}>Result (34)</Text>
          </Right>
        </View>

        <Text style={{color: '#fff', fontSize: 21, marginTop: 25}}>Movies</Text>

        <List>
          {/* {this.props.search.results.map((item)=>
            <ListItem>
              <Text>{item.title}</Text>
            </ListItem>  
          )}
       */}
                {
                  this.props.search.isLoading ? <ActivityIndicator/>:
                  this.props.search.results.map((item, index)=>(
                            <ListItem thumbnail key={index} onPress={()=> {this.gotoMovie(item.id)}}>
                                <Left>
                                    
                                </Left>
                                <Body>
                                    <Text style={{color: '#fff'}}>{item.title}</Text>
                                    <Text note style={{color: '#fff'}}>{item.genre}</Text>
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
      search: state.searchmovieReducers
  }
}

export default connect(mapStateToProps)(SearchPage);