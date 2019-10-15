import React from 'react'
import {View,Text,Button,StyleSheet,TextInput,FlatList} from 'react-native'
import PersonItem from "./PersonItem";
import person from '../API/ApiPerson'
export default class SearchPerson extends React.Component{
    render() {

        return(
            <View style={styles.main}>
                <TextInput
                placeholder={"Nom de la Personne "}
                />
                <Button
                title={"Rechercher"}
                onPress={()=>{
                }}
                />
                <FlatList
                    data={person}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <PersonItem person={item}/>}
                />
            </View>

        )
    }

}

const styles = StyleSheet.create({
    main:{
        paddingTop:50,
        flex:1,
    },
    textInput:{

    }
});
