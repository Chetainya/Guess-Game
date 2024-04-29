import { Alert, StyleSheet, Text, View } from "react-native";
import Title from "../Components/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../Components/NumberContainer";
import PrimaryButton from "../Components/PrimaryButton";
import Card from "../Components/Card";

function GameScreen({ userNumber, onGameOver }) {
  let minBoundry = 1;
  let maxBoundry = 100;
  let initialState = getRandomGenerator(1, 100, userNumber);
  const [currGuessNumber, setCurrGuessNumber] = useState(initialState);

  function getRandomGenerator(max, min, exact) {
    let randomNumber = Math.floor(Math.random() * (max - min)) + min;
    if (randomNumber === exact) {
      return getRandomGenerator(max, min, exact);
    }
    return randomNumber;
  }

  function nextRandomNumberHandeler(direction) {
    if (
      (direction === "lower" && currGuessNumber < userNumber) ||
      (direction === "higher" && currGuessNumber > userNumber)
    ) {
      Alert.alert(`Dont't lie`, "Choose the right option!!", [
        { text: "Cancel", style: "cancel" },
      ]);
      return;
    }

    if (direction === "higher") {
      minBoundry = currGuessNumber + 1;
    } else {
      maxBoundry = currGuessNumber;
    }
    let nextNumber = getRandomGenerator(
      minBoundry,
      maxBoundry,
      currGuessNumber
    );
    setCurrGuessNumber(nextNumber);
  }

  useEffect(() => {
    if (currGuessNumber === userNumber) {
      onGameOver();
    }
  }, [currGuessNumber, useEffect, onGameOver]);

  return (
    <View style={styles.container}>
      <Title>Opponent's Guess</Title>

      <NumberContainer>{currGuessNumber}</NumberContainer>
      <Card>
        
        <Text style={styles.inputText}>Higher or Lower</Text>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <PrimaryButton
              onPress={nextRandomNumberHandeler.bind(this, "higher")}
            >
              +
            </PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton
              onPress={nextRandomNumberHandeler.bind(this, "lower")}
            >
              -
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
  },
  inputText : {
    fontSize : 30,
    fontWeight : 'bold',
    color : 'yellow'
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop : 5
  },
  button: {
    flex: 1,
  },
});
