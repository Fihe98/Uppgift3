import { StatusBar } from "expo-status-bar";
import { FlatList, Text, StyleSheet, TouchableOpacity, View } from "react-native";


export default function StartVy({ navigation }) {
    const drinks = ["Apelsinjuice", "Banansmoothie", "Cider"];

    const itemClick = (item) => {navigation.navigate("AndraVyn", { selectedItem: item });};


  return (
    <View style={styles.container}>
        <FlatList
            data={drinks}
            renderItem={({ item }) => (
                <TouchableOpacity
                style={styles.buttons}
                onPress={() => itemClick(item)}
                >
                    <Text style={styles.buttonText}>{item}</Text>
                </TouchableOpacity>
            )}
            />
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
  
    buttons: {
      height: 100,
      width: 250,
      backgroundColor: "lightblue",
      borderColor: "#grey",
      alignContent: "center",
      justifyContent: "center",
      marginTop: "20%",
      marginBottom: "20%",
      marginHorizontal: "10%",
    },
  
    buttonText: {
      color: "white",
      textAlign: "center",
      fontSize: 30,
    },
});