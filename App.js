import React from 'react';
import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from 'react-native';

export default class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      num1:0,
      num2:0,
      output:0,
    }
  }
  render() {
    return (

      <LinearGradient
        //https://uigradients.com/#Reef
        colors={['#000000', '#000000', '#000000']}
        style={{flex: 1}}
      >
        <View style={{flex: 1}}>
          <View style={{flex: 1}} />

          <View style={{flex: 1 }}>
          <Text style={styles.titleText} > {this.state.output} </Text>
          </View>

          <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
              <View style={{flex: 1, backgroundColor: 'black'}} >
              <TouchableOpacity style={styles.button} onPress={this.onPress} >
              <Text>AC</Text> 
              </TouchableOpacity>
              </View>
              <View style={{flex: 1,  backgroundColor: 'black'}}>
              <TouchableOpacity style={styles.button} onPress={this.onPress} >
              <Text>+/-</Text> 
              </TouchableOpacity>
              </View>
              <View style={{flex: 1,  backgroundColor: 'black'}} >
              <TouchableOpacity style={styles.button} onPress={this.onPress} >
              <Text> % </Text> 
              </TouchableOpacity>
              </View>
              <View style={{flex: 1,  backgroundColor: 'black'}} >
              <TouchableOpacity style={styles.button2} onPress={this.onPress} >
              <Text> / </Text> 
              </TouchableOpacity>
              </View>
          </View>

           <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
              <View style={{flex: 1,  backgroundColor: 'black'}} >
              <TouchableOpacity style={styles.button1} onPress={this.onPress} >
              <Text> 7 </Text> 
              </TouchableOpacity>
              </View>
              <View style={{flex: 1, backgroundColor: 'black'}} >
              <TouchableOpacity style={styles.button1} onPress={this.onPress} >
              <Text> 8 </Text> 
              </TouchableOpacity>
              </View>
              <View style={{flex: 1,  backgroundColor: 'black'}} >
              <TouchableOpacity style={styles.button1} onPress={this.onPress} >
              <Text> 9 </Text> 
              </TouchableOpacity>
              </View>
              <View style={{flex: 1,  backgroundColor: 'black'}} >
              <TouchableOpacity style={styles.button2} onPress={this.onPress} >
              <Text> x </Text> 
              </TouchableOpacity>
              </View>
          </View>

           <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
              
              <View style={{flex: 1, backgroundColor: 'black'}} >
              <TouchableOpacity style={styles.button1} onPress={this.onPress} >
              <Text> 4 </Text> 
              </TouchableOpacity>
              </View>
              <View style={{flex: 1,  backgroundColor: 'black'}} >
              <TouchableOpacity style={styles.button1} onPress={this.onPress} >
              <Text> 5 </Text> 
              </TouchableOpacity>
              </View>
              <View style={{flex: 1,  backgroundColor: 'black'}} >
              <TouchableOpacity style={styles.button1} onPress={this.onPress} >
              <Text> 6 </Text> 
              </TouchableOpacity>
              </View>
              <View style={{flex: 1,  backgroundColor: 'black'}} >
              <TouchableOpacity style={styles.button2} onPress={this.onPress} >
              <Text> - </Text> 
              </TouchableOpacity>
              </View>
          </View>

          <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
              <View style={{flex: 1, backgroundColor: 'black'}} >
              <TouchableOpacity style={styles.button1} onPress={this.onPress} >
              <Text> 1 </Text> 
              </TouchableOpacity>
              </View>
              <View style={{flex: 1,  backgroundColor: 'black'}} >
              <TouchableOpacity style={styles.button1} onPress={this.onPress} >
              <Text> 2 </Text> 
              </TouchableOpacity>
              </View>
              <View style={{flex: 1,  backgroundColor: 'black'}} >
              <TouchableOpacity style={styles.button1} onPress={this.onPress} >
              <Text> 3 </Text> 
              </TouchableOpacity>
              </View>
              <View style={{flex: 1,  backgroundColor: 'black'}} >
              <TouchableOpacity style={styles.button2}onPress={this.onPress}>
              <Text> + </Text> 
              </TouchableOpacity>
              </View>
          </View>

          <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
              
              <View style={{flex: 2,  backgroundColor: 'black'}} >
              <TouchableOpacity style={styles.button1} onPress={this.onPress} >
              <Text> 0 </Text> 
              </TouchableOpacity>
              </View>
              <View style={{flex: 1,  backgroundColor: 'black'}} >
              <TouchableOpacity style={styles.button1} onPress={this.onPress} >
              <Text> . </Text> 
              </TouchableOpacity>
              </View>
              <View style={{flex: 1,  backgroundColor: 'black'}} >
              <TouchableOpacity style={styles.button2} onPress={this.onPress} >
              <Text> = </Text> 
              </TouchableOpacity>
              </View>
          </View>



        
          
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  button: 
  {
    alignItems: 'center',
    padding: 30,
    borderRadius:50,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white'
  },
  button1: 
  {
    alignItems: 'center',
    padding: 30,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#B2BABB',
    backgroundColor: '#B2BABB'
  },
  button2: 
  {
    alignItems: 'center',
    padding: 30,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'orange',
    backgroundColor: 'orange',
  },
  titleText: {
    fontSize: 80,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'right'
  },
});
