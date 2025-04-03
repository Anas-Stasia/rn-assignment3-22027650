import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, FlatList, Pressable,ScrollView } from 'react-native';
import Icon from './assets/person.png'
import filterIcon  from './assets/filterIcon.png'

import AntDesign from '@expo/vector-icons/AntDesign';
import man from './assets/man.png';
import woman from './assets/woman.png';



const flatData = [
  {
  
    id: 1,
    title: 'Exercise',
    subTitle: '12 Tasks',
    image:man,
  },
  {
    id: 2,
    title: 'Study',
    subTitle: '12 Tasks',
    image:woman,
  }
];


const flatInfo = [
  {
    id: 1,
    title: 'Code',
    subTitle: '12 Tasks',
    image:man,
  },
  {
    id: 2,
    title: 'Eat',
    subTitle: '12 Tasks',
    image:woman,
  }
];


const flatSuggest = [
  {
    id: 1,
    title: 'Dance',
    subTitle: '12 Tasks',
    image:man,
  },
  {
    id: 2,
    title: 'Sing',
    subTitle: '12 Tasks',
    image:woman,
  }
];



const flatIdeas = [
  {
    id: 1,
    title: 'Jump',
    subTitle: '12 Tasks',
    image:man,
  },
  {
    id: 2,
    title: 'Walking',
    subTitle: '12 Tasks',
    image:woman,

    
  }
];








export default function App() {
  return (
    <ScrollView style={styles.container}>

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
        style={styles.TextInput}
        placeholderTextColor="black"/>

        <View style={styles.filter}>
        <Image source={filterIcon}/>
        </View>
        <AntDesign name="search1" size={24} color="black"  style={styles.searchIcon}/>
        </View>

     
        <Text style={styles.Category}>Categories</Text>
      
        <View style={styles.Working}>
          <FlatList
          data={flatData}
          renderItem={({item}) => (
           < Pressable style={styles.Duties}>
             <Text style={styles.title}>{item.title}</Text>
             <Text style={styles.subTitle} >{item.subTitle}</Text>
             <Image source={item.image} style={styles.image}/>
           </Pressable>
          )}
          keyExtractor={(item) => (item.id)}
          horizontal
          showsHorizontalScrollIndicator={false}
          />
        </View>






        <View style={styles.Working}>
          <FlatList
          data={flatInfo}
          renderItem={({item}) => (
           < Pressable style={styles.Duties}>
             <Text style={styles.title}>{item.title}</Text>
             <Text style={styles.subTitle} >{item.subTitle}</Text>
             <Image source={item.image} style={styles.image}/>
           </Pressable>
          )}
          keyExtractor={(item) => (item.id)}
          horizontal
          showsHorizontalScrollIndicator={false}
          />
        </View>



        <View style={styles.Working}>
          <FlatList
          data={flatIdeas}
          renderItem={({item}) => (
           < Pressable style={styles.Duties}>
             <Text style={styles.title}>{item.title}</Text>
             <Text style={styles.subTitle} >{item.subTitle}</Text>
             <Image source={item.image} style={styles.image}/>
           </Pressable>
          )}
          keyExtractor={(item) => (item.id)}
          horizontal
          showsHorizontalScrollIndicator={false}
          />
        </View>




        <View style={styles.Working}>
          <FlatList
          data={flatSuggest}
          renderItem={({item}) => (
           < Pressable style={styles.Duties}>
             <Text style={styles.title}>{item.title}</Text>
             <Text style={styles.subTitle} >{item.subTitle}</Text>
             <Image source={item.image} style={styles.image}/>
           </Pressable>
          )}
          keyExtractor={(item) => (item.id)}
          horizontal
          showsHorizontalScrollIndicator={false}
          />
        </View>
     
     <Text style={styles.Task}>Ongoing Task</Text>

     <View style={styles.taskCard}>
          <Text style={styles.taskTitle}>Mobile App Development</Text>
        </View>

        <View style={styles.taskCard}>
          <Text style={styles.taskTitle}>Web Development</Text>
        </View>
    
    
        <View style={styles.taskCard}>
          <Text style={styles.taskTitle}>Push Ups</Text>
        </View>

        <View style={styles.taskCard} >
          <Text style={styles.taskTitle}>Coding</Text>
        </View>

        <View  style={styles.taskCard}>
           <Text  style={styles.taskTitle}>Web Design</Text>
        </View>

        <View  style={styles.taskCard}>
           <Text  style={styles.taskTitle}>Typing</Text>
        </View>

        <View  style={styles.taskCard}>
            <Text style={styles.taskTitle}>Programing</Text>
        </View>

        <View style={styles.taskCard}>
          <Text style={styles.taskTitle}>Software Engineering</Text>
        </View>

        <View style={styles.taskCard}>
        <Text style={styles.taskTitle}>Data Structures and Algorithms</Text>
        </View>

        <View  style={styles.taskCard}>
        <Text style={styles.taskTitle}>Scripting</Text>
        </View>

       <View style={styles.taskCard}>
          <Text style={styles.taskTitle}>Relaxing</Text>
        </View>

        <View  style={styles.taskCard}>
          <Text  style={styles.taskTitle}>App Design</Text>
        </View>
        <View style={styles.taskCard}>
          <Text  style={styles.taskTitle}>Designing fylers</Text>
        </View>
        <View style={styles.taskCard}>
          <Text style={styles.taskTitle}>Graphic design</Text>
        </View>
      <View style={styles.taskCard}>
      <Text style={styles.taskTitle}>Debugging</Text>
      </View>
       
       

      
      <StatusBar style="auto" />
    </ScrollView>

    
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
    width: 270,
    height: 45,
    backgroundColor:'white',
    borderRadius: 13,
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

  },
  searchIcon:{
    position: 'absolute',
    left:30,
    top:14
  
  },
  Category:{
    Width:96,
    Height:24,
    marginTop:30,
    marginLeft:20,
    fontWeight:'bold',
    fontSize:25
    
  },
  Duties:{
    width: 186,
    height:192,
    backgroundColor:'white',
    borderRadius:15,
    marginInlineEnd:24,
   
  },
  Working:{
    marginTop:12,
    marginLeft:20
    
  },
  title:{
    fontSize: 15,
    fontWeight:'bold',
    marginTop: 16,
    marginLeft: 14
  },
  subTitle:{
    marginLeft:14,
    fontSize:12
  },
  image:{
    marginLeft:21
  },
  Task:{
    fontWeight:'bold',
    fontSize:20,
    marginLeft:20,
    marginTop:30,
    marginBottom:12
  },
  taskCard: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 20,
    marginBottom: 10,
    height: 128, 
    justifyContent: 'center',
    marginLeft:20,
    marginRight:20,
    borderWidth:1,
    borderColor:'#E8D1BA'
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  }

  });

  