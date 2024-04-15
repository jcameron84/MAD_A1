import { useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { todos } from './addToDo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FlatList } from 'react-native-gesture-handler';




export default Home = function ({ navigation }) {

  const navToAddToDo = () => navigation.navigate('AddToDo')
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const storedTodos = await AsyncStorage.getItem('todos');
        if (storedTodos !== null) {
          setTodos(JSON.parse(storedTodos));
          console.log('Todos loaded successfully from AsyncStorage');
        }
      } catch (error) {
        console.error('Error loading todos from AsyncStorage:', error);
      }
    };
    loadTodos();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <Text style={styles.listItemTitle}>{item.title}</Text>
      <Text style={styles.listItemText}>{item.description}</Text>
    </View>
  );
  

  return ( 
    <View style={{padding: 20, backgroundColor: '#292929', alignItems: 'center', flex: 1, justifyContent: 'top'}}>
    <View style={{padding: 20, width: '100%', height: '100%', borderWidth: 3, borderRadius: 10, flexDirection: 'column', flex: 1, borderColor: 'white',justifyContent: 'top', alignItems: 'center'}}>
      <View style={{width: '95%', height: 50, borderWidth: 3, borderRadius: 10, flexDirection: 'row', borderColor: 'white',justifyContent: 'center'}}>
            <Text style={{fontSize: 30, color: 'white'}}>My To-Do List</Text>
      </View>
      <View style={{height: 50}}></View>


      <View style={{height: '80%', width: '100%', alignItems: 'center'}}> 
      
    
      <FlatList
        data = {todos}
        renderItem = {renderItem}
        keyExtractor={item => item.id.toString()}
        style = {styles.listContainer}
      />

      </View>

      <View style={[styles.listItem, {justifyContent: 'center', flexDirection:'row'}]}>
        <Ionicons name="add" size={28} color='white'/>
        <Pressable
          //style={getButStyle}
          onPress={() => {
            console.log('Navigating to add to do page');
            navToAddToDo
            
          }}
        > 
          <Text style= {[{color:'white', fontSize: 20}]} onPress={navToAddToDo}>Add New To-Do</Text>
        </Pressable>
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
    padding: 5,
    width: '95%',
    marginBottom: 10,
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: 'column',
    borderColor: 'white',
    justifyContent: 'left',
    alignSelf: 'center'
  },

  listItemTitle: {
    fontSize: 20,
    color: 'white',
    margin: 2,
    fontWeight: 'bold',
  },

  listItemText: {
    fontSize: 15,
    color: 'white',
  },

  listContainer: {
    width: '95%',
    marginBottom: 20
  }


});
