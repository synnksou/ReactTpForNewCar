import React from 'react'
import {View,Text,StyleSheet,Button} from 'react-native'
import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import SearchScreen from "./SearchScreen";

export default class HomeScreen extends React.Component{

    _whereIGo(){
        console.log("go in Search Screen" );
        this.props.navigation.navigate('SearchScreen')
    }
    _goAdd(){
        console.log("go in Add Screen")
    }

    render() {
        return(

                <View>
                    <Text style={styles.getStartedText}> Voici le travail demandé, gestion d'une FlatList par "fausse" API simulez dans le fichier API/ApiPerson.js.

                    Vous y retrouverez les fonctions actuelles : Ajout, Suppression et recherche</Text>
                    <Button
                    title={"Voir la Liste"}
                    onPress={()=>this._whereIGo()}
                    />

                    <Button
                    title={()=> this._goAdd()}
                    />
                </View>

        )
    }


}

const styles = StyleSheet.create({
    main_contener:{

    },
    getStartedText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
    }

});
/*
const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: ()=>{
            return ({
                title: 'Accueil',
                headerStyle: {
                    backgroundColor: '#FFDAB5',
                },
                titleColor: '#ffffff',
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            })
        }
    },    SearchScreen:{
        screen:SearchScreen,
        navigationOptions: ()=>{
            return ({title:'Recherche',
                headerStyle:{
                    backgroundColor: '#FFDAB5',
                },
                titleColor:'#ffffff',
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },

            })
        }

    }
});

export default createAppContainer(AppNavigator)
*/
