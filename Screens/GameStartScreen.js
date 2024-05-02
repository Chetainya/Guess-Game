import { Alert, StyleSheet, TextInput, View , useWindowDimensions , KeyboardAvoidingView , ScrollView } from "react-native";
import { useState } from "react";
import PrimaryButton from "../Components/PrimaryButton";
import Title from "../Components/Title";
import Card from "../Components/Card";

function GameStartScreen({pickedNumber}) {
    const [enteredNumber , setEnteredNumber] = useState('');
    const {height} = useWindowDimensions();

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
            return ;
        }
        pickedNumber(userNumber)
    }
    console.log(height)
    const marginTopValue = height < 380 ? 30 : 100;

  return (
    <ScrollView style={{flex : 1}}>
    <KeyboardAvoidingView style={{flex : 1}} behavior="position">
          <View style={[styles.rootContainer , {marginTop : marginTopValue}]}>
      <Title>Guess My Number</Title>
    <Card>
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
    </Card>
    </View>
    </KeyboardAvoidingView>
    </ScrollView>

  );
}

export default GameStartScreen;

const styles = StyleSheet.create({
  rootContainer : {
    flex : 1,
  
 
    alignItems: 'center'
  },
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
