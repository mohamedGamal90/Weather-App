import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import WeatherDetail from "../Components/WeatherDetail";

const Width = Dimensions.get("window").width;

const CityDetailScreen = ({ route }: any) => {
  const navigation = useNavigation();
  const headerName = route.params.name;
  const headerCountry = route.params.country;

  // Get request from the api
  let [isLoading, setLoading] = useState<boolean>(true);
  // let [error, setError]: any | null = useState();
  let [response, setResponse]: any | null = useState();

  const apiKey: string = "f5cb0b965ea1564c50c6f1b74534d823";
  useLayoutEffect(
    () => {
      if (response && response?.name === headerName) {
        // console.log("yes");
        // console.log(response.main.humidity);
        // console.log("response namee " + response.name);
        return;
      }
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        headerName +
          "&appid=" +
          apiKey
      )
        .then((res) => res.json())
        .then(
          (result) => {
            setResponse(result);
            setLoading(false);
            // console.log(result);
            return result;
          },
          (error) => {
            setLoading(false);
            console.log(error);
            // setError(error);
          }
        );
      // console.log(response);
    }
    // , [setLoading, setResponse, setError]
  );
  // Get request from the api

  // loading Indicator
  const loadingHandler = () => {
    if (isLoading === true) {
      console.log(isLoading);
      return <ActivityIndicator size="large" />;
    }
    return (
      <>
        <View style={{ alignItems: "center" }}>
          <Image
            source={{
              uri:
                "http://openweathermap.org/img/w/" +
                response?.weather[0].icon +
                ".png",
            }}
            style={style.weatherIcon}
          />
        </View>
        <WeatherDetail
          description={response?.weather[0].description}
          temperature={Math.trunc(response?.main.temp - 273.15)}
          humidity={response?.main.humidity}
          windspeed={Math.trunc(response?.wind.speed*(18/5))}
        />
      </>
    );
  };
  // loading Indicator

  const navigateBackHandler = () => {
    navigation.navigate("citySelector");
  };

  return (
    <View>
      <View style={style.blueHeadercontainer}>
        <Pressable onPress={navigateBackHandler}>
          <Image
            source={require("../assets/arrow_back-24px.png")}
            style={style.arrowIcon}
          />
        </Pressable>
      </View>
      <View style={style.detailscontainer}>
        <Text style={style.cityNameHeader}>{headerName+', '+headerCountry}</Text>
        <View style={style.innerDetailscontainer}>{loadingHandler()}</View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  blueHeadercontainer: {
    width: "100%",
    height: 150,
    backgroundColor: "#2388C7",
  },
  cityMainContainer: {
    marginTop: 10,
  },
  titleText: {
    color: "#FFFFFF",
    fontSize: 24,
    marginTop: 99,
    marginLeft: 72,
  },
  detailscontainer: {
    position: "absolute",
    marginTop: 105,
    marginLeft: 32,
    backgroundColor: "#FFFFFF",
    width: Width - 64,
    minWidth: 296,
    minHeight: 423,
    borderRadius: 4,
    shadowColor: "black",
  },
  arrowIcon: {
    marginTop: 25,
    marginLeft: -10,
    width: 80,
    height: 80,
  },
  cityNameHeader: {
    textAlign: "center",
    marginTop: 26,
    fontSize: 24,
  },
  weatherDetailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "grey",
    marginHorizontal: 32,
    marginBottom: 7,
  },
  detailText: {
    fontSize: 14,
  },
  numberText: {
    fontSize: 20,
  },
  weatherIcon: {
    width: 94,
    height: 77,
    marginTop: 68,
    marginBottom: 76,
  },
  innerDetailscontainer: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    // backgroundColor: "grey",
  },
});

export default CityDetailScreen;
