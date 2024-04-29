import { Alert, StyleSheet, Text, View } from 'react-native';
import Title from '../Components/Title';
import { useState } from 'react';
import NumberContainer from '../Components/NumberContainer';
import PrimaryButton from '../Components/PrimaryButton';

function GameScreen({userNumber}){
    let minBoundry = 1;
   let maxBoundry = 100;
    let initialState = getRandomGenerator(minBoundry,maxBoundry,userNumber)
    const [currGuessNumber , setCurrGuessNumber] = useState(initialState);

   function getRandomGenerator(max , min , exact){
    
    let randomNumber = Math.floor((Math.random() * (max-min))) + min;
    if(randomNumber === exact){
        return getRandomGenerator(max , min , exact);
    }
    return randomNumber;
   }

   function nextRandomNumberHandeler(direction){

    if((direction === 'lower' && currGuessNumber < userNumber) || (direction === 'higher' && currGuessNumber > userNumber)){
        Alert.alert(`Dont't lie` , "Choose the right option!!" , [{text : 'Cancel' , style:'cancel'}])
        return;
    }

    if(direction === 'higher'){
        minBoundry = currGuessNumber + 1;
    }else{
        maxBoundry = currGuessNumber;
    }
    let nextNumber = getRandomGenerator(minBoundry , maxBoundry , currGuessNumber);
    setCurrGuessNumber(nextNumber);
   }

   

    return ( 
    <View style={styles.container}>
       <Title>Opponent's Guess</Title>
       
       <NumberContainer>{currGuessNumber}</NumberContainer>
       <PrimaryButton onPress={nextRandomNumberHandeler.bind(this , 'higher')}>+</PrimaryButton>
       <PrimaryButton onPress={nextRandomNumberHandeler.bind(this , 'lower')}>-</PrimaryButton>
    </View>
    )

}

export default GameScreen

const styles = StyleSheet.create({
    container : {
        flex : 1,
        padding : 18
    },
   
})