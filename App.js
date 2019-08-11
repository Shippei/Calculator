import React from 'react';
import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from 'react-native';

export default class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = 
    {
      output:0,
    }
  }
  event(sval)
  {
    let sum = this.state.output;
    if(sval == '0')
    {
      sum = '';
    }
    if(sval == '=')
    {
      sum = String(eval(sum));
    }
    else if(sval == 'AC')
    {
      sum = 0;
    }
    else if(sval == '+/-')
    {
      sum = String(eval(sum))*-1;
    }
    else if(sval == '%')
    {
      sum = String(eval(sum))/100;
    }
    else
    {
      sum += sval; 
    }
    
    this.setState({
      output:sum,
    });
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
              <TouchableOpacity style={styles.button} onPress={() => this.event('AC')}  >
              <Text>AC</Text> 
              </TouchableOpacity>
              </View>
              <View style={{flex: 1,  backgroundColor: 'black'}}>
              <TouchableOpacity style={styles.button} onPress={() => this.event('+/-')} >
              <Text>+/-</Text> 
              </TouchableOpacity>
              </View>
              <View style={{flex: 1,  backgroundColor: 'black'}} >
              <TouchableOpacity style={styles.button} onPress={() => this.event('%')} >
              <Text>%</Text> 
              </TouchableOpacity>
              </View>
              <View style={{flex: 1,  backgroundColor: 'black'}} >
              <TouchableOpacity style={styles.button2} onPress={() => this.event('/')} >
              <Text>/</Text> 
              </TouchableOpacity>
              </View>
          </View>

           <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
              <View style={{flex: 1,  backgroundColor: 'black'}} >
              <TouchableOpacity style={styles.button1} onPress={() => this.event(7)}  >
              <Text>7</Text> 
              </TouchableOpacity>
              </View>
              <View style={{flex: 1, backgroundColor: 'black'}} >
              <TouchableOpacity style={styles.button1} onPress={() => this.event(8)} >
              <Text>8</Text> 
              </TouchableOpacity>
              </View>
              <View style={{flex: 1,  backgroundColor: 'black'}} >
              <TouchableOpacity style={styles.button1} onPress={() => this.event(9)} >
              <Text>9</Text> 
              </TouchableOpacity>
              </View>
              <View style={{flex: 1,  backgroundColor: 'black'}} >
              <TouchableOpacity style={styles.button2} onPress={() => this.event('*')} >
              <Text>x</Text> 
              </TouchableOpacity>
              </View>
          </View>

           <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
              
              <View style={{flex: 1, backgroundColor: 'black'}} >
              <TouchableOpacity style={styles.button1} onPress={() => this.event(4)} >
              <Text>4</Text> 
              </TouchableOpacity>
              </View>
              <View style={{flex: 1,  backgroundColor: 'black'}} >
              <TouchableOpacity style={styles.button1} onPress={() => this.event(5)} >
              <Text>5</Text> 
              </TouchableOpacity>
              </View>
              <View style={{flex: 1,  backgroundColor: 'black'}} >
              <TouchableOpacity style={styles.button1} onPress={() => this.event(6)} >
              <Text>6</Text> 
              </TouchableOpacity>
              </View>
              <View style={{flex: 1,  backgroundColor: 'black'}} >
              <TouchableOpacity style={styles.button2} onPress={() => this.event('-')} >
              <Text>-</Text> 
              </TouchableOpacity>
              </View>
          </View>

          <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
              <View style={{flex: 1, backgroundColor: 'black'}} >
              <TouchableOpacity style={styles.button1} onPress={() => this.event(1)} >
              <Text>1</Text> 
              </TouchableOpacity>
              </View>
              <View style={{flex: 1,  backgroundColor: 'black'}} >
              <TouchableOpacity style={styles.button1} onPress={() => this.event(2)} >
              <Text>2</Text> 
              </TouchableOpacity>
              </View>
              <View style={{flex: 1,  backgroundColor: 'black'}} >
              <TouchableOpacity style={styles.button1} onPress={() => this.event(3)} >
              <Text>3</Text> 
              </TouchableOpacity>
              </View>
              <View style={{flex: 1,  backgroundColor: 'black'}} >
              <TouchableOpacity style={styles.button2} onPress={() => this.event('+')}>
              <Text>+</Text> 
              </TouchableOpacity>
              </View>
          </View>

          <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
              
              <View style={{flex: 2,  backgroundColor: 'black'}} >
              <TouchableOpacity style={styles.button1} onPress={() => this.event(0)} >
              <Text>0</Text> 
              </TouchableOpacity>
              </View>
              <View style={{flex: 1,  backgroundColor: 'black'}} >
              <TouchableOpacity style={styles.button1} onPress={() => this.event('.')} >
              <Text>.</Text> 
              </TouchableOpacity>
              </View>
              <View style={{flex: 1,  backgroundColor: 'black'}} >
              <TouchableOpacity style={styles.button2} onPress={() => this.event('=')} >
              <Text>=</Text> 
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
    backgroundColor: 'white',
  },
  button1: 
  {
    alignItems: 'center',
    padding: 30,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#B2BABB',
    backgroundColor: '#B2BABB',
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
