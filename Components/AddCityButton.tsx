import { Pressable, View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = { onPress: () => void };
const AddCityButton = ({ onPress }:Props) => {
  return (
    <Pressable style={style.buttonContainer} onPress={onPress}>
      <View style={style.innerButtonContainer}>
        <Ionicons name="md-add" size={24} color="white" />
        <Text style={style.buttonText}>Add City</Text>
      </View>
    </Pressable>
  );
};

export default AddCityButton;

const style = StyleSheet.create({
  buttonContainer: {
    position: "absolute",
    bottom: 16,
    right: 16,
    backgroundColor: "#2388C7",
    width: 137,
    height: 56,
    borderRadius: 28,
    flexDirection: "row",
    overflow: "hidden",
  },
  innerButtonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  buttonText: {
    fontSize: 14,
    color: "#FFFFFF",
    // fontWeight: "900"
  },
});
