import React from 'react'

import {TextInput,Text,View,Button} from "react-native";
import {person} from '../API/ApiPerson'

export default class AddScreen extends React.Component{

    constructor(props){
        super(props)

            this.name='',
            this. surname='',
            this.DatedeNaissance='',
            this.ProblemeC=''
        this.state={
            person: []
        }
    }

    addItems(item){
        this.setState({data
            })
    }
    render() {

        return(
            <View style={styles.main_container}>
                <TextInput
                placeholder={"Nom"}
                value={this.state.name}

                />


            <Button
                title={"add"}
                value={this.name}
                onPress={()=>{}}
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
