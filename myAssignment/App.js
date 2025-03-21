import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import Icon from './assets/person.png'
import filterIcon  from './assets/filterIcon.png'

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.texthead}>
        <View>
          <Text style={styles.heading}>Hello , Devs</Text>
          <Text style={styles.subtitle}>14 tasks today</Text>
        </View>
        <View style={styles.profileIcon}>
          <Image source={Icon}/>
        </View>
      </View>

      
        <View  style={styles.subheader}>
        <TextInput 
        placeholder='Search'
        style={styles.TextInput}/>

        <View style={styles.filter}>
        <Image source={filterIcon}/>
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
    display:'flex',
    marginLeft:20,
    marginRight:19,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  TextInput:{
    width: 280,
    height: 48,
    backgroundColor:'white',
    borderRadius: 10,
    marginLeft:20,
    fontWeight:'bold',
    paddingLeft:45,
   

  },
  filter:{
    width:50,
    height:48,
    backgroundColor:'#F0522F',
    borderRadius:15,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    marginLeft:20,
    marginRight:50
    
  
  

  },
  subheader:{
    display:'flex',
    marginRight:50,
    flexDirection:'row',
    marginTop:30,
    justifyContent:'space-between'

  }
  
   
  
  

});
