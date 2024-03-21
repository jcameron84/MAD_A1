import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{padding: 20, backgroundColor: '#292929', alignItems: 'center', flex: 1, justifyContent: 'top'}}>
    <View style={{padding: 20, width: '100%', height: '100%', borderWidth: 3, borderRadius: 10, flexDirection: 'column', flex: 1, borderColor: 'white',justifyContent: 'top'}}>
      <View style={{width: '95%', height: 50, borderWidth: 3, borderRadius: 10, flexDirection: 'row', borderColor: 'white',justifyContent: 'center'}}>
            <Text style={{fontSize: 30, color: 'white'}}>My To-Do List</Text>
      </View>
      <View style={{height: 5}}></View>
      <View style={{width: '95%', height: 50, borderWidth: 3, borderRadius: 10, flexDirection: 'row', borderColor: 'white',justifyContent: 'center'}}>
            <Text style={{fontSize: 20, color: 'white'}}>Task 1</Text>
      </View>

      </View>

      <View style={{}}>
        
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

  }

});
