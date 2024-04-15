import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, Button } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from 'react-native-gesture-handler';
import { useState } from 'react';
import Home from './Home';
import AsyncStorage from '@react-native-async-storage/async-storage';

//import { toast } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';



export default AddToDo = function ({navigation}) {
  const navToHome = () => navigation.navigate('Home')
  const [titleText,setTextTitle] = useState('');
  const [descText,setTextDesc] = useState('');
  const [todos, setTodos] = useState([]);

  const saveHandler = async () => {
    if (descText === "" || titleText === ""){
      return
    } else {
      const title = titleText || 'Untitled Task'
      const description = descText || 'No Description'
      const maxID = todos.reduce((a,todo)=>Math.max(a,todo.id),0)
      const newTodo = {id:maxID+1, title, description, finished:false}
      setTodos(cur=>[...cur,newTodo]);
      console.log({todos});
      try {
        await AsyncStorage.setItem('todos', JSON.stringify([...todos, newTodo]));
        console.log('Todos saved successfully to AsyncStorage');
      } catch (error) {
        console.error('Error saving todos to AsyncStorage:', error);
      }
      window.alert('Todo Added Successfully');
    }
  }

  const clearInputs = () => {
    setTextDesc('');
    setTextTitle(''); 
  }




  return (
    <View style={{padding: 20, backgroundColor: '#292929', alignItems: 'center', flex: 1, justifyContent: 'top', alignItems:'center'}}>
    <View style={{padding: 20, width: '100%', height: '100%', borderWidth: 3, borderRadius: 10, flexDirection: 'column', flex: 1, borderColor: 'white',justifyContent: 'top', alignItems:'center'}}>
      <View style={{width: '95%', height: 50, borderWidth: 3, borderRadius: 10, flexDirection: 'row', borderColor: 'white',justifyContent: 'center', alignItems:'center'}}>
            <Text style={{fontSize: 30, color: 'white'}}>Add New To-Do</Text>
      </View>
      
      
      <View style={{height: 50}}/>
        <Text style={{color:'white', fontSize:20}}>Title</Text>
        <TextInput
          placeholderTextColor={'white'}
          placeholder="Add Title..."
          style={styles.input}
          value={titleText}
          onChangeText={setTextTitle}
      />

      <View style={{height: 50}}/>
        <Text style={{color:'white', fontSize:20}}>Description</Text>
        <TextInput
          placeholderTextColor={'white'}
          placeholder={`Add Description...`}
          multiline={true}
          style={[styles.input, styles.multiLineText]}
          value={descText}
          onChangeText={setTextDesc}
      />

      <View style={{height: '40%'}}></View>
      


      <View style={{flexDirection: 'row', alignContent: 'center', justifyContent:'center', padding: 10}}>

      <View style={[styles.listItem, {justifyContent: 'space-evenly', width:'40%', flexDirection:"row", alignContent:'center'}]}>
      <Ionicons name="close-outline" size={28} color='white'/>
        <Pressable
          onPress={() => {
            console.log('But Pressed');
          }}
        >
          <Text style= {[{color:'white', fontSize: 20}]} onPress={navToHome}>{descText === "" || titleText === "" ? 'Back' : 'Cancel'}</Text>
        </Pressable>
      </View>

          <View style={{width: 10}}/>

      <View style={[styles.listItem, {justifyContent: 'space-evenly', width: '40%'}]}>
      <Ionicons name="save-outline" size={28} color='white'/>
        <Pressable
          
          onPress={() => {
            console.log('But Pressed');
            saveHandler();
            clearInputs();
          }}
        >
          <Text style= {[{color:'white', fontSize: 20}]}>Save</Text>
          
        </Pressable>
      </View>

      

      </View>     
    </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  listItem: {
    padding: 4,
    width: '95%',
    height: 40,
    borderWidth: 3,
    borderRadius: 10,
    flexDirection: 'row',
    borderColor: 'white',
    justifyContent: 'left',
  },

  listItemText: {
    fontSize: 20,
    color: 'white',
  },

  input: {
    height: 40,
    width: '95%',
    borderRadius: 10,
    borderWidth: 3,
    padding: 10,
    margin: 10,
    borderColor: 'white',
    color: 'white',
  },

  multiLineText: {
    minHeight: 100,
    textAlignVertical: 'top'
  }

});
