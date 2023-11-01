import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children }) {
  function pressHandler() {
    console.log("pressede");
  }
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressade]
            : styles.buttonInnerContainer
        }
        onPress={pressHandler}
        //  android pressed effect obviously
        android_ripple={{ color: "#640233" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#72063C",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  // ios pressede effect
  pressade: {
    opacity: 0.75,
  },
});
