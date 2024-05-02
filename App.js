
import { ImageBackground, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import GameStartScreen from './Screens/GameStartScreen';
import {LinearGradient} from 'expo-linear-gradient'
import { useState } from 'react';
import GameScreen from './Screens/GameScreen'
import GameEndScreen from './Screens/GameEndScreen'


export default function App() {
  const [finalNumber , setFinalNumber] = useState();
  const [gameOver , setGameOver] = useState(true);
  const [rounds , setRounds] = useState(0);

  function pickedNumber(number){
    setFinalNumber(number);
    setGameOver(false);
  }
  function onGameOver(rounds){
    setRounds(rounds);
    setGameOver(true);
  }
  function onRestartNewGame(){
    setFinalNumber(null);
  }
  

  let screen =  finalNumber ? <GameScreen onGameOver={onGameOver} userNumber={finalNumber} /> : <GameStartScreen pickedNumber={pickedNumber} />

 
  if(gameOver && finalNumber){
    screen = <GameEndScreen onRestartNewGame={onRestartNewGame} userNumber={finalNumber} rounds={rounds} />
  }
  return (
    <>
    <StatusBar style='dark' ></StatusBar>
    <LinearGradient colors={['yellow' , 'plum']} style={styles.container}>
      <ImageBackground imageStyle={styles.imageStyle} style={styles.container} source={require('./assets/Images/background.png')}>
      <SafeAreaView style={styles.container}>
      {screen}
      </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container : {
    
    flex: 1
  },
  imageStyle:{
    opacity : 0.25
  }
});
