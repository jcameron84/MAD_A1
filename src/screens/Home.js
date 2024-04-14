import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from "@expo/vector-icons";


export default Home = function ({ navigation, todos }) {
  const navToAddToDo = () => navigation.navigate('AddToDo')

  return ( 
    <View style={{padding: 20, backgroundColor: '#292929', alignItems: 'center', flex: 1, justifyContent: 'top'}}>
    <View style={{padding: 20, width: '100%', height: '100%', borderWidth: 3, borderRadius: 10, flexDirection: 'column', flex: 1, borderColor: 'white',justifyContent: 'top', alignItems: 'center'}}>
      <View style={{width: '95%', height: 50, borderWidth: 3, borderRadius: 10, flexDirection: 'row', borderColor: 'white',justifyContent: 'center'}}>
            <Text style={{fontSize: 30, color: 'white'}}>My To-Do List</Text>
      </View>
      <View style={{height: 50}}></View>


      <View style={{height: '80%', width: '100%', alignItems: 'center'}}> 
    
     
      {todos && todos.map(todo => (
            <View key={todo.id} style={{ marginVertical: 10 }}>
              <Text style={{ fontSize: 20, color: 'white' }}>Title: {todo.title}</Text>
              <Text style={{ fontSize: 16, color: 'white' }}>Description: {todo.description}</Text>
            </View>
          ))}
      
      
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

      <View style={[styles.listItem, {justifyContent: 'center', flexDirection:'row'}]}>
        <Ionicons name="add" size={28} color='white'/>
        <Pressable
          //style={getButStyle}
          onPress={() => {
           console.log(todos)
            
          }}
        > 
          <Text style= {[{color:'white', fontSize: 20}]} onPress={console.log(todos)}>Add New To-Do</Text>
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
  }

});
