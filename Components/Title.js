import { StyleSheet, Text , View } from "react-native";

function Title({children}){
    return (
    <View style={styles.titleContainer}>
    <Text style={styles.titleText}>{children}</Text>
    </View>
    )
}

export default Title;

const styles = StyleSheet.create({
    titleContainer : {
       
        borderWidth : 3,
        padding : 8,
        borderRadius : 5,
        borderColor : "white"
    },
    titleText : {

        color : 'white',
        fontSize : 24,
        fontWeight : 'bold',
        textAlign : 'center',
    }
})