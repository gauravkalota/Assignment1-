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
import Detail from './src/screens/Detail';
function ListScreen({ navigation }) {    // List Screen -API Fetch
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    console.log(data);



    const [phone, setPhone] = useState('');
    const setValue = async () => {
        if (item.phone == 0) {
            Alert.alert('Waring!', 'no data to add')
        } else {
            try {
                await AsyncStorage.setItem('PhoneNo.', item.phone);
                navigation.navigate('Details');
            } catch (error) {
                console.log(error);
            }
        }
    }


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    return (
        <SafeAreaView style={styles.container2}>
            <FlatList
                style={{ flex: 1 }}
                data={data}
                renderItem={({ item }) =>
                    <View style={styles.listItem}>
                        <Image source={{ uri: 'https://img-premium.flaticon.com/png/512/1165/premium/1165674.png?token=exp=1628513272~hmac=a94f95966a5725122c52ae188e430cf1' }} style={styles.imageItem} />
                        <View style={{ alignItems: "center", flex: 1 }}>
                            <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
                            <Text>{item.email}</Text>
                            <Text>{item.company.name}</Text>
                        </View>
                        <TouchableOpacity onPress={() => Alert.alert("Do you want to save details", 'Phone No :' + item.phone, [
                            { text: 'Yes', onPress: () => { setValue() } },
                            { text: 'No', onPress: () => console.warn('No Pressed') }
                        ])} style={styles.button}>
                            <Text style={{ color: "green" }}>ADD</Text>
                        </TouchableOpacity>
                    </View>
                }
                keyExtractor={(item, index) => index}
            />
            <Button
                title="Added Details"
                onPress={() => navigation.navigate('Details')}
            />
        </SafeAreaView>

    );
}
export default ListScreen;


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
