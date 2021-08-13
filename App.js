//COMPLETE
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import DetailsScreen from './src/screens/DetailScreen';
import ListScreen from './src/screens/ListScreen';
import  LoginScreen  from './src/screens/LoginScreen';



// /////////////////////////////////////////SCREENONE//////////////////////
// export function LoginScreen({ navigation }) {
//   const [name, setName] = useState('');
//   const [password, setPassword] = useState('');

//   onClickListener = (viewId) => {
//     Alert.alert("Alert", "Button pressed " + viewId);
//   }

//   // const setData = async () => {
//   //   if(name.length==0 || password.length==0 ) {
//   //      Alert.alert('Warning!', 'Please mention Credentials.')
//   //   }else{
//   //         try { 
//   //           const jsonValue = JSON.stringify(name)
//   //           await AsyncStorage.setItem('UserName', name);
//   //           navigation.navigate('List'); 
              
//   //         } catch (error) {
//   //              console.log(error);
//   //         }
//   //   }
//   // }


//   return (
//     <View style={styles.container}>
//       <View style={styles.inputContainer}>
//         <Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/message/ultraviolet/50/3498db' }} />
//         <TextInput style={styles.inputs}
//           placeholder="Email"
//           keyboardType="email-address"
//           underlineColorAndroid='transparent'
//           onChangeText={(value) => setName({ value })} />
//       </View>

//       <View style={styles.inputContainer}>
//         <Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db' }} />
//         <TextInput style={styles.inputs}
//           placeholder="Password"
//           secureTextEntry={true}
//           underlineColorAndroid='transparent'
//           onChangeText={(value2) => setPassword({ value2 })} />
//       </View>

//       <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={()=>navigation.navigate('List')}>
//         <Text style={styles.loginText}>Login</Text>
//       </TouchableHighlight>

//       <TouchableHighlight style={styles.buttonContainer} onPress={() => onClickListener('restore_password')}>
//         <Text>Forgot your password?</Text>
//       </TouchableHighlight>

//       <TouchableHighlight style={styles.buttonContainer} onPress={() => onClickListener('register')}>
//         <Text>Register</Text>
//       </TouchableHighlight>
//     </View>
//   );
// }
// ////////////////////////////////////SCREEEN2///////////////////////////////////////

// // function ABCZ (x) {
// //   console.log(x)
// //   return x+2
// // }
// // {ABCZ(50)}
// // const value = ABCZ(50)
// // console.log(value)

// // 52

// function ListScreen({ navigation }) {    // List Screen -API Fetch
//   const [isLoading, setLoading] = useState(true);
//   const [data, setData] = useState([]);
//   console.log(data);
//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((json) => setData(json))
//       .catch((error) => console.error(error))
//       .finally(() => setLoading(false));
//   }, []);



// //////////
//   const userdetails = {
//     name:'Clementine Bauch',
//     phoneno:'14631234447'
//   };

//    const setValue = async () => {    ///////////STORING VALUE
     
//     try {
//   await AsyncStorage.setItem('Phone',JSON.stringify(userdetails) );
//       navigation.navigate('Details');
//   } catch (error) {
//       console.log(error)
//        }
//   }
   
//   return (
//     <SafeAreaView style={styles.container2}>
//       <FlatList
//         style={{ flex: 1 }}
//         data={data}
//         renderItem={({ item }) =>
//           <View style={styles.listItem}>
//             <Image source={{ uri: 'https://img-premium.flaticon.com/png/512/1165/premium/1165674.png?token=exp=1628513272~hmac=a94f95966a5725122c52ae188e430cf1' }} style={styles.imageItem} />
//             <View style={{ alignItems: "center", flex: 1 }}>
//               <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
//               <Text>{item.email}</Text>
//               <Text>{item.company.name}</Text>
//             </View>
//             <TouchableOpacity onPress={() => Alert.alert("Do you want to save details", 'Phone No :' + item.phone, [
//               { text: 'Yes', onPress: () => {setValue()}},
//               { text: 'No', onPress: () => console.warn('No Pressed') }
//             ])} style={styles.button}>
//               <Text style={{ color: "green" }}>ADD</Text>
//             </TouchableOpacity>
//           </View>
//         }
//         keyExtractor={(item, index) => index}
//       />
//       <Button
//         title="Added Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </SafeAreaView>

//   );
// }
// //////////////////////////SCREEEN3///////////////////////////////////////////////////////////

// function DetailsScreen({ navigation }) {

//   const [phone, setPhone] = useState('');

//    useEffect(()=>{
//      getValue();
//    },[]);
// ///////////////////reading Value//////////////
//   const getValue = async () => {
//     try {
//     await  AsyncStorage.getItem('Phone')
//       .then(value=> {
//         const user = JSON.parse(value);
//         if(value!= null) {
//           setPhone(user.phoneno);
//         }
//       })
//     } catch (error) {
//       console.log(error);
//     }
//   } 


//   return (
//     <SafeAreaView style={{ flex: 1, paddingTop: 100, alignItems: 'center', justifyContent: 'center' }}>
//       <Text style={{ alignItems: 'center', justifyContent: 'center' }}>Recently Added phone Numbers</Text>
//       <Text>{phone}</Text>
//       <TextInput style={styles.inputs}
//           placeholder="Your Data "/>

//       <View style={{ alignSelf: 'flex-start', paddingLeft: 50 }}>

//       </View>
//       <View style={{ paddingTop: 550 }} >
//         <Button
//           title="Back"
//           onPress={() => navigation.navigate('List')}

//         />
//       </View>
//     </SafeAreaView>
//   );
// }

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }} initialRouteName="Home">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;




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


