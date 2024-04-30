import { StyleSheet , View , Text } from "react-native"

function GuessLogItem({roundNumeber , guessNumber}){

    return (
        <View style={styles.listContainer}>
            <Text>#{roundNumeber}</Text>
            <Text>Opponent's Guess : {guessNumber}</Text>
        </View>
    )
}

export default GuessLogItem

const styles = StyleSheet.create({
    listContainer : {
        backgroundColor : 'yellow',
        width : '100%',
        flexDirection : 'row',
        justifyContent : 'space-between',
        marginTop : 10,
        padding : 10,
        borderRadius : 10
    }
})