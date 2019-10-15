import React from 'react'

import {TextInput,Text,View,Button,StyleSheet} from "react-native";
import {person} from '../API/ApiPerson'

export default class AddScreen extends React.Component{

    constructor(props){
        super(props);
            this.name='',
            this.surname='',
            this.DatedeNaissance='',
            this.ProblemeC=''
        this.state={
                person:[]
        }
    }


    _addItems(){
        const newName=this.name;
        const obj = this.state;
        this.setState(
            {
                person: [...this.state.person, newName]
            }
        );
        console.log(person.data);
    };


    render() {

        return(
            <View style={styles.main_container}>
                <TextInput
                placeholder={"Nom"}
                value={this.name}

                />

            <Button
                title={"Ajouter"}
                value={this.name}
                onPress={()=>{this._addItems}}
            />
            </View>
        )
    }

}

const styles = StyleSheet.create(
    {
        main_container:{
            flex:1,
            padding:5,
        }
    }
)
