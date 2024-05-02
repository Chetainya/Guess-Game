import { Image, StyleSheet, Text, View , Dimensions , useWindowDimensions, ScrollView } from 'react-native';
import PrimaryButton from '../Components/PrimaryButton';
import Title from '../Components/Title';
function GameEndScreen({onRestartNewGame , userNumber , rounds}){
    const {width , height} = useWindowDimensions();

    let ImageSize = 250;

    if(width > 500){
        ImageSize = 100;
    }
    if(height < 380){
        ImageSize = 150;
    }
    
    return (
        <ScrollView>
        <View style={styles.rootContainer}>
        <Title>Game Over</Title>
        <View style={[styles.imageContainer , {height : ImageSize , width : ImageSize}]}>
            <Image style={[styles.image]} source={require('../assets/Images/success.png')} />
        </View>
        <Text>Your phone took <Text style={styles.text}>{rounds}</Text > guesses to guess <Text style={styles.text}>{userNumber}</Text> number</Text>
        <PrimaryButton onPress={onRestartNewGame}>Re-Start</PrimaryButton>
        </View>
        </ScrollView>
    )
}

export default GameEndScreen;

const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    rootContainer : {
        flex : 1,
        marginTop : 100,
        alignItems : 'center',
        justifyContent : 'center'
    },
    imageContainer : {
        // borderWidth : 3,
        
        height : height < 380 ? 150 : 250,
        width :  height < 380 ? 150 : 250,
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