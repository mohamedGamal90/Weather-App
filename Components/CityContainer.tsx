import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

type Props = { name: string; country: string };
const CityContainer = ({ name, country }: Props) => {
  const navigation = useNavigation();

  const navigateToDetailsHandler = () => {
    navigation.navigate("cityDetail", { name: name, country: country });
  };

  return (
    <Pressable style={style.cityContainer} onPress={navigateToDetailsHandler}>
      <View style={style.cityNameIconContainer}>
        <Image source={require("../assets/location_city-24px.png")} />
        <Text style={style.locationName}>{name + ", " + country}</Text>
      </View>
      <View style={style.cityInfoIconContainer}>
        <Image source={require("../assets/info-24px.png")} />
      </View>
    </Pressable>
  );
};

const style = StyleSheet.create({
  cityContainer: {
    width: "100%",
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  cityNameIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 17,
  },
  cityInfoIconContainer: {
    flex: 2,
  },
  locationName: {
    marginLeft: 32,
    fontSize: 18,
  },
});

export default CityContainer;
