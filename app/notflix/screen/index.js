import React from 'react';
import HomePage from './HomePage'
import MoviePage from './MoviePage'
import SearchPage from './SearchPage'
import CategoriesPage from './CategoriesPage'
import UserPage from './UserPage'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {createStackNavigator, createBottomTabNavigator, TabBarBottom, createAppContainer } from 'react-navigation';

// export {
//     HomePage,
//     MoviePage,
//     SearchPage,
//     CastPage,
//     CategoriesPage,
//     LoginPage,
//     UserPage,
//     Welcome,
//     RegisterPage,
//     Videocomp,
//     trailerAqua
// }
const HomeStack = createStackNavigator({
    HomePage: { screen: HomePage, navigationOptions:{
        header:null
    } },
    CategoriesPage: { screen: CategoriesPage, navigationOptions:{
      header:null
  } },
    MoviePage: { screen: MoviePage, navigationOptions:{
        header:null
    } },
  });
  const SearchStack = createStackNavigator({
    SearchPage: { screen: SearchPage, navigationOptions:{
        header:null
    } },
    CategoriesPage: { screen: CategoriesPage, navigationOptions:{
        header:null
    } },
    MoviePage: { screen: MoviePage, navigationOptions:{
        header:null
    } },
  });
  const UserSatck = createStackNavigator({
    UserPage: { screen: UserPage , navigationOptions:{
        header:null
    }},
    CategoriesPage: { screen: CategoriesPage, navigationOptions:{
        header:null
    } },
    MoviePage: { screen: MoviePage , navigationOptions:{
        header:null
    }}
  });

export default createAppContainer(createBottomTabNavigator(
    {
      Home: { screen: HomeStack },
      SearchPage: { screen: SearchStack },
      UserPage: { screen: UserSatck }
     
      
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'Home') {
            iconName = `ios-home`;
          } else if (routeName === 'SearchPage') {
            iconName = `ios-search`;
          } else if (routeName === 'UserPage') {
            iconName = `ios-contact`;
          }
  
          // You can return any component that you like here! We usually use an
          // icon component from react-native-vector-icons
          return <Ionicons name={iconName} size={25} color={tintColor} />;
        },
      }),
      tabBarComponent: TabBarBottom,
      tabBarPosition: 'bottom',
      tabBarOptions: {
        activeTintColor: '#D71A18',
        inactiveTintColor: 'gray',
        showLabel: false,
        style: {
            backgroundColor: '#0C0C0C'
        }
      },
      animationEnabled: false,
      swipeEnabled: false,
    }
  ));
// export default (MainScreenNavigator = TabNavigator(
//   {
//     MainPage:{
//         screen:HomePage,
//         navigationOptions:{
//             header:null
//         }
//     },
//     MoviePage: {
//         screen: MoviePage,
//         navigationOptions: {
//             header: null
//         }
//     },
//     SearchPage: {
//         screen: SearchPage,
//         navigationOptions: {
//             header: null
//         }
//     },
//     CategoriesPage: {
//         screen: CategoriesPage,
//         navigationOptions: {
//             header: null
//         }
//     },
//     UserPage:{
//         screen:UserPage,
//         navigationOptions:{
//             header:null
//         }
//     }
//   },
//   {
//     tabBarPosition: "bottom",
//     tabBarComponent: props => {
//       return (
//         <Footer>
//           <FooterTab style={{backgroundColor:'#0C0C0C'}}>
//             <Button
//               vertical
//               active={props.navigationState.index === 0}
//               onPress={() => props.navigation.navigate("MainPage")}>
//               <Icon name="home" />
//             </Button>
//             <Button
//               vertical
//               active={props.navigationState.index === 1}
//               onPress={() => props.navigation.navigate("SearchPage")}>
//               <Icon  name="search" />
//             </Button>
//             <Button
//               vertical
//               active={props.navigationState.index === 2}
//               onPress={() => props.navigation.navigate("UserPage")}>
//               <Icon  name="person" />
//             </Button>
//           </FooterTab>
//         </Footer>
//       );
//     }
//   }
// ));