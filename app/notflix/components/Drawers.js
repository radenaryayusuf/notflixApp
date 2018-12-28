import React, {Component} from "react";
import { AppRegistry, Image,ImageBackground,View, StatusBar } from "react-native";
import { Container, Content, Text,Left,Right,Button,Icon,Body,StyleProvider, List, ListItem, Thumbnail } from "native-base";
import { createAppContainer, createStackNavigator, StackActions, NavigationActions, withNavigation } from 'react-navigation';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons'
import { Col, Row, Grid } from 'react-native-easy-grid';
import getTheme from '../../../native-base-theme/components';
import custom from '../../../native-base-theme/variables/platform';

 class Drawers extends React.Component {
  gotoMovie(genre) {
    this.props.navigation.navigate('CategoriesPage', {genre})
  }
  constructor(props) {
    super(props);
    this.state = { 
    item1: false,
    arrCate : [
      {
        id: 1,
        genre: "Action"
      },
      {
        id: 2,
        genre: "Adventure"
      },
      {
        id: 2,
        genre: "Biography"
      },
      {
        id: 2,
        genre: "History"
      },
      {
        id: 2,
        genre: "Cartoon"
      },
      {
        id: 2,
        genre: "Comedy"
      }]
    };
  }
  submenu(){
    return(
      <View>
        {this.state.arrCate.map((item) => (
       <ListItem key={item.id} style={{marginLeft:30}} icon onPress={() =>  {this.gotoMovie(item.genre)}}>
   
       <Body><Text><Text style={{color:'#707A82'}}>{item.genre}</Text></Text></Body>
     </ListItem>
    ))}
      

</View>
    )
  }
  render() {
    return (
      <StyleProvider style={getTheme(custom)}>
      <Container>
        
        <Content padder style={{backgroundColor: '#0c0c0c'}}>
      
       
        <Grid style={{marginTop:20}}>
        
            <Row style={{justifyContent:'center'}}>
                <Text style={{color:'#FEFEFE', fontWeight: 'bold', fontFamily:'monospace', fontSize: 20}}>Personal</Text>
            </Row>
            <Row>
               

                <Col onPress={() => {
            this.props.navigation.navigate({ routeName: 'UserPage' })
            
          }} style={{flex:1, justifyContent:'center'}}>
                    <Thumbnail style={{alignSelf:"center", borderRadius:10, margin:10}} square source={require('../images/user.png')} />
                </Col>

                
            </Row>
        
        </Grid>
          
        <List style={{borderBottomWidth:0}}>
        <ListItem style={{borderBottomColor:'transparent'}} onPress={() => {
             this.props.navigation.navigate({ routeName: 'HomePage' })
          }} icon>
            <Body>
              <Text style={{color:'#707A82'}}>Notflix Home</Text>
            </Body>
          </ListItem>

          <ListItem style={{borderBottomColor:'transparent'}} onPress={() => this.setState({ item1: !this.state.item1 })} icon>
         
            <Body>
              <Text style={{color:'#707A82'}}>Movie</Text>
            </Body>
            <Right> 
              <Icon style={{color:'#707A82'}} name="ios-arrow-forward" />
              </Right>
          </ListItem>
          {this.state.item1 ? this.submenu() : null}
         
         <View style={{borderBottomColor:'#32373A', borderBottomWidth:1}}></View>
          
         <ListItem style={{borderBottomColor:'transparent'}} onPress={() => {
            this.props.navigation.navigate({ routeName: 'UserPage' })
            
          }} icon>
            <Body>
              <Text style={{color:'#707A82'}}>Account</Text>
            </Body>
          </ListItem>

          <ListItem style={{borderBottomColor:'transparent'}} onPress={() => {
            this.props.navigation.navigate({ routeName: 'Welcome' })
            
          }} icon>
         
            <Body>
              <Text style={{color:'#707A82'}}>Logout</Text>
            </Body>
          </ListItem>

          </List>
        </Content>
      </Container>
      </StyleProvider>
    );
  }
}
export default withNavigation(Drawers);