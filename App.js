import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput,Appbar,Button   } from 'react-native-paper';
import Displaylove from './components/Displaylove';

class App extends React.Component {

  state = {
    fname : '' ,
    sname : '',
    result:"Loading"
  }
    submitit(){
  
      fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.fname}&sname=${this.state.sname}`,{
        headers:{
          'x-rapidapi-host':'love-calculator.p.rapidapi.com',
          'x-rapidapi-key'
          :'78f6d00576mshdff5537c0457df2p10c9eejsn8e6a450f3dd0'
        }
      })
     .then(data=>data.json())
     .then(data2 =>{
       console.log(data2);
       this.setState({
         result:data2
       })
   })
 }
      render(){
  return (
    <View style={styles.container}>
       <Appbar.Header>
        <Appbar.BackAction
          onPress={this._goBack}
        />
        <Appbar.Content
          title="Love % Calculator"
          style = {{alignItems:"center"}}
 />
      </Appbar.Header>
    <TextInput
    label='Male'
    value={this.state.fname}
    onChangeText={text => this.setState({ fname:text })
  }
  />
     <TextInput
        label='Female'
        value={this.state.sname}
        onChangeText={text => this.setState({ sname:text })
      }
      />
      <Button icon="camera"
      style = {{margin:10 , marginTop:50}}
      mode="contained"
       onPress={this.submitit.bind(this)}>
    Calculate
  </Button>
   
      
     <Displaylove data={this.state.result} />
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
export default App ; 