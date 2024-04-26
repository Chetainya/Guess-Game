import { StyleSheet, Text, TextInput, View } from "react-native";
import PrimaryButton from "../Components/PrimaryButton";

function GameStartScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputField}
        maxLength={2}
        keyboardType="number-pad"
      />
      <View style={styles.ButtonsContainer}>
        <View style={styles.ButtonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.ButtonContainer}>
          <PrimaryButton>Confirm</PrimaryButton>
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
