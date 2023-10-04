import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function AndraVyn({ route }) {
  const { selectedItem } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{selectedItem}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },

  textStyle: {
    color: "white",
    fontSize: 55,
    marginTop: "40%",
    marginBottom: "60%"
  },
});