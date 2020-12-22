import React from 'react' ; 
import{StyleSheet,Text , View} from 'react-native' ; 

const Displaylove = (prop)=>{
      if(prop.data == "loading"){
          return <Text>Loading</Text>
      }
else{


    return(
        <View style= {StyleSheet.containerone}>
            <Text style={{ fontSize:30,
    textAlign:"center"}}>{prop.data.percentage}</Text>
            <Text style={{ fontSize:30,
            textAlign:"center"}}>{prop.data.result}</Text>
        </View>  
    )
}
}
export default Displaylove;

const styles = StyleSheet.create({
containerone:{
    flex:1,
    backgroundColor:'#eee',
    justifyContent:"center"

},
text:{
    fontSize:30,
    textAlign:"center"

}

});
