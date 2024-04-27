import { Alert, StyleSheet, TextInput, View } from "react-native";
import { useState } from "react";
import PrimaryButton from "../Components/PrimaryButton";

function GameStartScreen() {
    const [enteredNumber , setEnteredNumber] = useState('');


    function inputChangeHandeler(enteredText){
        setEnteredNumber(enteredText);
    }
    function inputResetHandeler(){
        setEnteredNumber('')
    }
    function inputConfirmHandeler(){
        const userNumber = parseInt(enteredNumber);
        if(isNaN(userNumber) || userNumber <= 0 || userNumber > 99){
            Alert.alert('Invalid Number' , 'Number should be between 0 and 99' , [{text : 'Okay' , style:'destructive' , onPress: inputResetHandeler}])
        }
    }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputField}
        maxLength={2}
        keyboardType="number-pad"
        onChangeText={inputChangeHandeler}
        value={enteredNumber}
      />
      <View style={styles.ButtonsContainer}>
        <View style={styles.ButtonContainer}>
          <PrimaryButton onPress={inputResetHandeler}>Reset</PrimaryButton>
        </View>
        <View style={styles.ButtonContainer}>
          <PrimaryButton onPress={inputConfirmHandeler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default GameStartScreen;

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#72063c",
    marginTop: 100,

    marginHorizontal: 10,
    padding: 10,
    borderRadius: 8,
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    shadowOpacity: 0.5,
  },
  ButtonsContainer: {
    flexDirection: "row",
    marginHorizontal: 10,
  },
  ButtonContainer : {
    flex : 1
  },
  inputField: {
    borderBottomWidth: 3,
    height: 50,
    borderBottomColor: "yellow",
    margin: 3,
    width: 50,
    color: "yellow",
    fontWeight: "bold",
    fontSize: 32,
    textAlign: "center",
  },
});
