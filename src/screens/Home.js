import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default Home = function ({navigation}) {
  const navToAddToDo = () => navigation.navigate('AddToDo')
  return (
    <View style={{padding: 20, backgroundColor: '#292929', alignItems: 'center', flex: 1, justifyContent: 'top'}}>
    <View style={{padding: 20, width: '100%', height: '100%', borderWidth: 3, borderRadius: 10, flexDirection: 'column', flex: 1, borderColor: 'white',justifyContent: 'top', alignItems: 'center'}}>
      <View style={{width: '95%', height: 50, borderWidth: 3, borderRadius: 10, flexDirection: 'row', borderColor: 'white',justifyContent: 'center'}}>
            <Text style={{fontSize: 30, color: 'white'}}>My To-Do List</Text>
      </View>
      <View style={{height: 50}}></View>

      <View style={styles.listItem}>
            <Text style={styles.listItemText}>Task 1</Text>
      </View>

      <View style={{height: 10}}></View>

      <View style={styles.listItem}>
            <Text style={styles.listItemText}>Task 2</Text>
      </View>

      <View style={{height: 10}}></View>

      <View style={styles.listItem}>
            <Text style={styles.listItemText}>Task 3</Text>
      </View>

      <View style={{height: '60%'}}></View>

      <View style={[styles.listItem, {justifyContent: 'center'}]}>
        <Pressable
          //style={getButStyle}
          onPress={() => {
            navToAddToDo
            console.log('But Pressed');
          }}
        >
          <Text style= {[{color:'white', fontSize: 20}]} onPress={navToAddToDo}>+ Add New To-Do</Text>
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
