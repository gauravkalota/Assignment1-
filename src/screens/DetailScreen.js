import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    FlatList,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    TouchableOpacity,
    Image,
    Alert
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import Login from './Login';
import ListScreen from './List';
import DetailsScreen from './Detail';

function DetailsScreen({ navigation }) {

    const [phone, setPhone] = useState('');
    const getValue = async () => {
        try {
            AsyncStorage.getItem('PhoneNo.')
                .then(value => {
                    if (value != null) {
                        getValue(value);
                    }
                })
        } catch (error) {
            console.log(error);

        }
    }

    return (
        <View style={{ flex: 1, paddingTop: 100, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ alignItems: 'center', justifyContent: 'center' }}>Recently Added phone Numbers</Text>
            <Text>1770736803156442</Text>

            <View style={{ alignSelf: 'flex-start', paddingLeft: 50 }}>

            </View>
            <View style={{ paddingTop: 550 }} >
                <Button
                    title="Back"
                    onPress={() => navigation.navigate('List')}

                />
            </View>
        </View>
    );
}
export default DetailsScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DCDCDC',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 250,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
    },
    loginButton: {
        backgroundColor: "#00b5ec",
    },
    loginText: {
        color: 'white',
    },

    listItem: {
        margin: 10,
        padding: 10,
        backgroundColor: "#FFF",
        width: "80%",
        flex: 1,
        alignSelf: "center",
        flexDirection: "row",
        borderRadius: 5
    },
    imageItem: {
        width: 60,
        height: 60,
        borderRadius: 30

    },
    button: {
        height: 50,
        width: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    container2: {
        flex: 1,
        backgroundColor: '#F7F7F7',
        marginTop: 60

    }

});
