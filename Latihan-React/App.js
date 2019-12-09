import React,{useState} from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';

const bromo = 'https://www.travelloratour.com/wp-content/uploads/2018/07/Gunung-Bromo.jpg';
const star ="https://img.icons8.com/flat_round/64/000000/star--v1.png";


export default function App() {

  return (
    <View style={styles.container}>
      <Image source={{uri: bromo }}
      style={{marginTop:22,width: 500, height: 300}} />
      <View style={styles.elementContainer}>
            <Text style={styles.text}>Bromo Mountain</Text>
                <Image source={{uri: star }}
                style={{width: 30, height: 30}} />
                <Image source={{uri: star }}
                style={{width: 30, height: 30}} />
                <Image source={{uri: star }}
                style={{width: 30, height: 30}} />
                <Image source={{uri: star }}
                style={{width: 30, height: 30}} />
      </View>
      <View style={{marginBottom:120 ,flexDirection:'row', justifyContent:'center'}}>
      <Image source={{uri: bromo }}
      style={{marginTop:22,marginRight:40,width: 120, height: 120}} />
      <Image source={{uri: bromo }}
      style={{marginTop:22,width: 120, height: 120}} />
      </View>
      <View style={{marginTop:-120,marginBottom:20 ,flexDirection:'row', justifyContent:'center'}}>
      <Image source={{uri: bromo }}
      style={{marginTop:22,marginRight:40,width: 120, height: 120}} />
      <Image source={{uri: bromo }}
      style={{marginTop:22,width: 120, height: 120}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    fontSize:24,
    textAlign:"center",
    fontWeight:'100',
    marginTop:50
  },
  elementContainer:{
    flex:1,
    marginTop:20,
    marginLeft:16,
    marginRight:16,
    justifyContent:'space-around',
    flexDirection:"row",
  },
  elements:{
    flex:1,
    marginLeft:16,
    marginRight:16,
    marginBottom:16,
    justifyContent:'space-around',
    flexDirection:"column",
  },
  text:{
    textAlign:'left',
    fontSize:30,
    marginTop:-8,
    marginRight:30
  }
});
