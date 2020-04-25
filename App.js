import React,{Component} from 'react';
import {View,Text,Image,StyleSheet,ImageBackground} from 'react-native';
const styles = StyleSheet.create({
  container:{
    alignItems:"center",

  },
  subcontainer1:{
    backgroundColor:'#2ECC71',
    alignItems:"center",
    padding:20,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
  },
  workout: {
    fontSize:22,fontWeight:"bold",
    padding:20,
    },
    subcontainer2:{
    
      flexDirection:'row',
      alignItems:'center',
      
      
    },
    subcontainer2_1:{
      flexDirection:'row',
      padding:10,
      
    },
    subcontainer2_1_1:{
        flexDirection:'column',
        alignItems:'center',
        borderRightColor:'white',
        borderWidth:1,
        padding:10,
        borderBottomColor:'#2ECC71',
        borderTopColor:'#2ECC71',
        borderLeftColor:'#2ECC71',
  
        
        
    },
    subcontainer2_1_2:{
        flexDirection:'column',
        alignItems:'center',
        borderLeftColor:'white',
        borderWidth:1,
        padding:10,
        borderRightColor:'#2ECC71',
        borderBottomColor:'#2ECC71',
        borderTopColor:'#2ECC71',
        
    },
    space:
    {paddingRight:20,paddingLeft:20,justifyContent:'center'},
    subcontainer3:{
      
      alignItems:"center",
      flexDirection:'row',
      
      borderTopColor:'darkgrey',
      borderWidth:1,
      marginTop:10,
  
      borderColor:'white',
      
    },
    menu:{flexDirection:'column',
    padding:5,
    },

});

export default class App extends Component
{
  render()
  {
    return(
    
      <View style={styles.container}>
      <View style={styles.subcontainer1}>
      <Text style={{padding:20,fontSize:28,color:'white'}}>Daily-Fitness</Text>
      <View style={styles.subcontainer2}>
      <Image source={require('./assets/edit.png')} />
      <View style={styles.space}>
      <Image source= {require('./assets/kb.png')}
      style={{width: 100, height:100}}/>
      </View>

      <Image source={require('./assets/settings.png')} />
      </View>
      <Text style={{fontSize:12,color:'white'}}>
      hhh
      </Text>
      <Text style={{fontSize:12,color:'white'}}>
      ayushraichand1@gmail.com 
      </Text>
      <View style={styles.subcontainer2_1}>
      <View style={styles.subcontainer2_1_1}>
      <Text style={{color:'white'}}>0 Cal       </Text>
       <Text style={{color:'white'}}>Progress</Text>

      </View>
      <View style={styles.space}>
      <Image source={require('./assets/fitbit.png')}/></View>
      <View style={styles.subcontainer2_1_2}>
      <Text style={{color:'white'}}>  1 Cal</Text>
      <Text style={{color:'white'}}>   Goal</Text>
      </View>
      </View>
      </View>
      <Text style={styles.workout}>
      Todays Workout</Text>
      <Image source={require('./assets/graph1.jpg')} style={{ width:155,height:128}}/>
     
      <View style={styles.subcontainer3}>
      <View style={styles.menu}>
      <Image source={require('./assets/exercise.png')}/>
      <Text style={{color:'darkgray'}}>exercise</Text>
      </View>
      <View style={styles.menu}>
      <Image source={require('./assets/blogs.png')}/>
      <Text style={{color:'darkgray'}}>blogs</Text>
      </View>
      <View style={styles.menu}>
      <Image source={require('./assets/u_settings.png')}/>
      <Text style={{color:'darkgray'}}>settings</Text>
      </View>
      <View style={styles.menu}>
      <Image source={require('./assets/profiles.png')}/>
      <Text style={{color:'darkgray'}}>profiles</Text>
      </View>
      </View>
      </View>
    
    );
  }
}
