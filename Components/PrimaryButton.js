import { View , Text, Pressable, StyleSheet } from "react-native"

function PrimaryButton({children}){
    return (
        <View style={styles.ButtonOuterContainer}>
            <Pressable style={({pressed}) => pressed ? [styles.ButtonInnerContainer , styles.pressed] : styles.ButtonInnerContainer} android_ripple={{color : "green"}}>
            <Text style={styles.ButtonTextContainer}>{children}</Text>
            </Pressable>
        </View>
    )
}

export default PrimaryButton

const styles = StyleSheet.create({
    ButtonOuterContainer : {
        borderRadius : 30,
        
        margin : 5,
        overflow : 'hidden'
    },
    ButtonInnerContainer : {
        padding : 5,
        backgroundColor : '#99063c',
        
    },
    ButtonTextContainer : {
        textAlign : 'center',
        color : 'white'
    },
    pressed : {
        opacity : 0.75
    }
})