import { StyleSheet, Text, View } from "react-native";


function NumberContainer({children}){

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{children}</Text>
        </View>
    )
}

export default NumberContainer;

const styles = StyleSheet.create({
    container : {
        margin : 24,
        borderWidth : 4,
        borderColor : 'green',
        padding : 20,
        
        borderRadius : 4,
        alignItems : 'center',
        justifyContent : "center"

    },
    text : {
        color : 'green',
        // textAlign : 'center'
        fontSize : 36,
        fontWeight : 'bold'
    }
})