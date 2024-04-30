import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import Title from "../Components/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../Components/NumberContainer";
import PrimaryButton from "../Components/PrimaryButton";
import Card from "../Components/Card";
import  {AntDesign}  from '@expo/vector-icons'
import GuessLogItem from "../Components/GuessLogItem";

let minBoundry = 1;
let maxBoundry = 100;

function getRandomGenerator(max, min, exact) {
  let randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exact) {
    return getRandomGenerator(max, min, exact);
  }
  return randomNumber;
}

function GameScreen({ userNumber, onGameOver }) {
 
  let initialState = getRandomGenerator(1, 100, userNumber);
  const [currGuessNumber, setCurrGuessNumber] = useState(initialState);
  const [guessRounds , setGuessRounds] = useState([initialState]);

  

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
    console.log(maxBoundry , minBoundry)
    setCurrGuessNumber(nextNumber);
    setGuessRounds((prev) => [nextNumber , ...prev]);
  }

  useEffect(() => {
    minBoundry = 1;
    maxBoundry = 100
  } , [])

  useEffect(() => {
    if (currGuessNumber === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currGuessNumber, userNumber, onGameOver]);

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
              <AntDesign name="plus" size={24} color='white' ></AntDesign>
            </PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton
              onPress={nextRandomNumberHandeler.bind(this, "lower")}
            >
               <AntDesign name="minus" size={24} color='white' ></AntDesign>
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View>
        <FlatList data={guessRounds} renderItem={(itemData) => <GuessLogItem roundNumeber={guessRounds.length - itemData.index} guessNumber={itemData.item}></GuessLogItem>} keyExtractor={item => item} />
      </View>
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
