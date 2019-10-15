import React from 'react'
import {View,Text,Button,StyleSheet,TextInput,FlatList,TouchableOpacity,ActivityIndicator} from 'react-native'
import PersonItem from "./PersonItem";
import person from '../API/ApiPerson'
export default class SearchPerson extends React.Component{

    constructor(props){
        super(props);
        this.loading=false;
        this.array=[{ // Tableau de personn non relié
            id:1,
            name:"Antoine",
            surname:"Heinrich",
            problemeC:"wolff parkinson white",
            dateNaissance:"18:11:1999"
        }, {
                id:2,
                name:"Mathis",
                surname:"Kazek",
                problemeC:"NaN",
                dateNaissance:"18:12:1999"
            }];

        this.state={
            arrayHolder:[],
            textInput_Holder:'',// Entrée du textInput
        }
    }



    componentDidMount() {
        this.setState({arrayHolder:[...this.array]})
    }


    joinData=()=>{
        if (!this.loading) {
            this.loading=true;
            this.array.push({name: this.state.textInput_Holder});
            this.setState({arrayHolder: [...this.array]});
            this.loading=false;
        }
    };

    FlatListItemSeparator = () => { //SEPARATEUR DES ITEMS
        return (
            <View
                style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: "#607D8B",
                }}
            />
        );
    };

    _displayLoading() {
        if (this.state.loading) {
            return (
                <View style={styles.loading_container}>
                    <ActivityIndicator size='large' />
                    {/* Le component ActivityIndicator possède une propriété size pour définir la taille du visuel de chargement : small ou large. Par défaut size vaut small, on met donc large pour que le chargement soit bien visible */}
                </View>
            )
        }
    }

    render() {

        return(
            <View style={styles.main}>
                <TextInput
                placeholder={"Nom de la Personne "}
                onChangeText={data => this.setState({ textInput_Holder: data })}
                style={styles.textInputStyle}
                />
                <TouchableOpacity onPress={this.joinData} activeOpacity={0.7} style={styles.button} >
                    <Text style={styles.buttonText}> Ajouter un Nom </Text>
                </TouchableOpacity>

                <FlatList
                    data={this.state.arrayHolder}
                    ItemSeparatorComponent={this.FlatListItemSeparator}
                    extraData={this.state.arrayHolder}
                    keyExtractor={(item) => item.toString()}
                    renderItem={({ item }) => <PersonItem person={item}/>}
                />
                { this._displayLoading()}
            </View>

        )
    }

}


const styles = StyleSheet.create({
    main:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        margin: 2
    },
    textInputStyle: {
        textAlign: 'center',
        height: 40,
        width: '90%',
        borderWidth: 1,
        borderColor: '#460082',
        borderRadius: 7,
        marginTop: 12
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },button: {

        width: '90%',
        height: 40,
        padding: 10,
        backgroundColor: '#460082',
        borderRadius: 8,
        marginTop: 10,
        alignItems:'center',
    },

    buttonText: {
        color: '#fff',
        textAlign: 'center',
    },
    loading_container: {
    position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
}

});
