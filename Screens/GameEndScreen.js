import { Image, StyleSheet, Text, View } from 'react-native';
import PrimaryButton from '../Components/PrimaryButton';
import Title from '../Components/Title';
function GameEndScreen({onRestartNewGame , userNumber , rounds}){
    return (
        <View style={styles.rootContainer}>
        <Title>Game Over</Title>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('../assets/Images/success.png')} />
        </View>
        <Text>Your phone took <Text style={styles.text}>{rounds}</Text > guesses to guess <Text style={styles.text}>{userNumber}</Text> number</Text>
        <PrimaryButton onPress={onRestartNewGame}>Re-Start</PrimaryButton>
        </View>
    )
}

export default GameEndScreen

const styles = StyleSheet.create({
    rootContainer : {
        flex : 1,
        marginTop : 100,
        alignItems : 'center',
        justifyContent : 'center'
    },
    imageContainer : {
        // borderWidth : 3,
        
        height : 250,
        width :  250,
        margin : 20
    },
    image : {
        height : '100%',
        width : '100%',
        borderRadius : 300,
    },
    text : {
        fontWeight : 'bold',
    }

})