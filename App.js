import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import MainScreenNavigator from "./app/notflix/screen/index";
import  Welcome  from './app/notflix/screen/Welcome'
import  Videocomp  from './app/notflix/screen/Videocomp'
import  RegisterPage  from './app/notflix/screen/RegisterPage'
import  LoginPage  from './app/notflix/screen/LoginPage'
import LoginScreen from './app/animeflix/screen/LoginScreen'
import WelcomeScreen from './app/animeflix/screen/WelcomeScreen'
import RegisterScreen from './app/animeflix/screen/RegisterScreen'
import VideoScreen from './app/animeflix/screen/VideoScreen'
import OneSignal from 'react-native-onesignal';
const RootSctack = createStackNavigator(
    {
        HomePage: {
            screen: MainScreenNavigator,
            navigationOptions: {
                header: null
            }
        },
        LoginPage: {
            screen: LoginPage,
            navigationOptions: {
                header: null
            }
        },
        RegisterPage:{
          screen:RegisterPage,
          navigationOptions:{
              header:null
          }
      },
        Welcome:{
            screen:Welcome,
            navigationOptions:{
                header:null
            }
        },
        Videocomp:{
            screen:Videocomp,
            navigationOptions:{
                header:null
            }
        },
        LoginScreen:{
            screen:LoginScreen,
            navigationOptions:{
                header:null
            }
        },
        WelcomeScreen:{
            screen:WelcomeScreen,
            navigationOptions:{
                header:null
            }
        },
        RegisterScreen:{
            screen:RegisterScreen,
            navigationOptions:{
                header:null
            }
        },
        VideoScreen:{
            screen:VideoScreen,
            navigationOptions:{
                header:null
            }
        }
      
    },
    {
        // (deviceStorage.getKey ? 'Directory' : 'Login')
        initialRouteName: 'VideoScreen'
    }
)

 const AppContainer  = createAppContainer(RootSctack
);
export default class App extends React.Component {
    constructor(properties) {
        super(properties);
        OneSignal.init("a10bdd26-b6be-484e-98ac-ea273562d680");
    
        OneSignal.addEventListener('received', this.onReceived);
        OneSignal.addEventListener('opened', this.onOpened);
        OneSignal.addEventListener('ids', this.onIds);
      }
    
      componentWillUnmount() {
        OneSignal.removeEventListener('received', this.onReceived);
        OneSignal.removeEventListener('opened', this.onOpened);
        OneSignal.removeEventListener('ids', this.onIds);
      }
    
      onReceived(notification) {
        console.log("Notification received: ", notification);
      }
    
      onOpened(openResult) {
        console.log('Message: ', openResult.notification.payload.body);
        console.log('Data: ', openResult.notification.payload.additionalData);
        console.log('isActive: ', openResult.notification.isAppInFocus);
        console.log('openResult: ', openResult);
      }
    
      onIds(device) {
        console.log('Device info: ', device);
      }
  
  
    render() {
      return(
  < AppContainer />
  
      )
      
   
  
    }
  }