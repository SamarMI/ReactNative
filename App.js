
import { StatusBar } from 'expo-status-bar';
import React ,{ Component } from  'react';
import { StyleSheet, Text, View ,TouchableOpacity,TextInput,} from 'react-native';
import Login from "./login.js";
import Todo from "./todo.js";
import TextExample from "./text.js";
import ImagePickerExample from "./ImagePickerEx.js";
import PickerExample from "./PickerExample.js";
import Routes from "./Routes.js";









export default class App extends Component {
  render() {
    return (
    <View >
        <Routes.js/>
      <StatusBar style="auto" />
    </View>
    );
    }
}


/*
style={styles.container}
const styles = StyleSheet.create({
  container: {
      
    flex: 1,
    backgroundColor: '#ff0',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
*/

