import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RegistrationScreen from './Screens/RegistrationScreen/RegistrationScreen';

export default function App() {
  return (
    
   
    <View style={styles.container}>
      <RegistrationScreen/>
      {/* <Text>Open up App.js to start working on your apppp!</Text>
      <StatusBar style="auto" /> */}
      </View>
       
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: '100%',
    // height: '100%',
    // backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
