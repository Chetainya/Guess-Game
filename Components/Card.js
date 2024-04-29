
import { View , StyleSheet } from "react-native";
function Card({children}){
    return (
        <View style={styles.inputContainer}>{children}</View>
    )
}

export default Card;

const styles = StyleSheet.create({
    inputContainer: {
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "#72063c",
        marginTop: 50,
    
        marginHorizontal: 10,
        padding: 10,
        borderRadius: 8,
        elevation: 5,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 3,
        shadowOpacity: 0.5,
      },
})