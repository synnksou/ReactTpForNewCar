import React from 'react'

import {View,Text,StyleSheet} from 'react-native'



export default class PersonItem extends React.Component{
    render() {
        const person = this.props.person;

        return(

            <View>
            <View style={styles.main_container}>
                <Text style={styles.person}>Prenom : {person.name}</Text>
                <Text style={styles.person}> Nom : {person.surname}</Text>
                <Text style={styles.person}> Date de N : {person.dateNaissance}</Text>
                <Text style={styles.person}> Probleme Cardiaque : {person.problemeC}</Text>
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create(
    {
        main_container: {
            height: 150,
        },
        person:{
            flexDirection: 'column',
            padding: 5 ,
        }
    }
);
