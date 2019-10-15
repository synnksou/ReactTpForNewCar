import React from 'react'

import { createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import HomeScreen from "../Screens/HomeScreen";
import SearchScreen from "../Screens/SearchScreen";

const HomeScreenStackNavigator = createStackNavigator(

    {
        HomeScreen:{
            screen: HomeScreen,
            navigationOptions: ()=>{
                return ({title:'Accueil',
                    headerStyle:{
                        backgroundColor: '#00B0FF',
                    },
                    titleColor:'#ffffff',
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },

                })
            }
        },
        SearchScreen:{
            screen:SearchScreen,
            navigationOptions: ()=>{
                return ({title:'Recherche',
                    headerStyle:{
                        backgroundColor: '#00B0FF',
                    },
                    titleColor:'#ffffff',
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },

                })
            }

        },

    },{
        initialRouteName:'HomeScreen'
    }
);

export default createAppContainer(HomeScreenStackNavigator)

