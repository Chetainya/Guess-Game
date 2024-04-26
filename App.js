
import { ImageBackground, StatusBar, StyleSheet, Text, View } from 'react-native';
import GameStartScreen from './Screens/GameStartScreen';
import {LinearGradient} from 'expo-linear-gradient'

export default function App() {
  return (
    <>
    <StatusBar style='auto' ></StatusBar>
    <LinearGradient colors={['yellow' , 'plum']} style={styles.container}>
      <ImageBackground imageStyle={styles.imageStyle} style={styles.container} source={require('./assets/Images/background.png')}>
      <GameStartScreen />
      </ImageBackground>
    </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container : {
    backgroundColor : 'plum',
    flex: 1
  },
  imageStyle:{
    opacity : 0.25
  }
});
