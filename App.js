import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{padding: 20, backgroundColor: '', alignItems: 'center', flex: 1, justifyContent: 'top'}}>
      <View style={{width: 400, borderWidth: 3, borderRadius: 10, flexDirection: 'row', borderColor: 'white',justifyContent: 'center'}}>
            <Text style={{fontSize: 20, color: 'white'}}>To-Do</Text>
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


});
