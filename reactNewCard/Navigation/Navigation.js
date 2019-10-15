import React from 'react'

import { createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import HomeScreen from "../Screens/HomeScreen";
import SearchScreen from "../Screens/SearchScreen";
import AddScreen from "../Screens/AddScreen";

const HomeScreenStackNavigator = createStackNavigator(

    //NAVIGATION DE BASE-INTERSCREEN

    {       //ROUTEMAP
        HomeScreen:{
            screen: HomeScreen,
            navigationOptions: ()=>{
                return ({title:'Accueil',
                    headerStyle:{
                        backgroundColor: '#460082',
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
                        backgroundColor: '#460082',
                    },
                    titleColor:'#ffffff',
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },

                })
            }

        },
        addScreen:{
            screen:AddScreen,
            navigationOptions: ()=>{
                return ({title:'Ajoutez',
                    headerStyle:{
                        backgroundColor: '#460082',
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

