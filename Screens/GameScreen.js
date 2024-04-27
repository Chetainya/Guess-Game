import { StyleSheet, Text, View } from 'react-native';
import Title from '../Components/Title';

function GameScreen(){
    console.log('inside')
    return <View style={styles.container}>
       <Title>Opponent's Guess</Title>
    </View>

}

export default GameScreen

const styles = StyleSheet.create({
    container : {
        flex : 1,
        padding : 18
    },
   
})