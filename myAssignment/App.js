import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from './assets/person.png'

export default function App() {
  return (
    <View style={styles.container}>

      <View styles={styles.texthead}>
        <View>
          <Text style={styles.heading}>Hello , Devs</Text>
          <Text style={styles.subtitle}>14 tasks today</Text>
        </View>
        <View style={styles.profileIcon}>
          <Image source={Icon}/>
        </View>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#F7F0E8",
    paddingTop:52,

  },
  profileIcon:{
   width: 52,
   height:50,
   backgroundColor:'white',
   borderRadius:30,
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center'

  } ,
  heading: {
    fontSize: 32,
    fontWeight:'bold'
  },

  subtitle:{
    
    fontSize:12,
    fontWeight:'medium'
    
  },

  texthead:{
    backgroundColor:'black'
  }
  

});
