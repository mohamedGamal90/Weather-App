import { View, Text, StyleSheet, FlatList } from "react-native";
import { useState } from "react";

import CityContainer from "../Components/CityContainer";
import AddCityButton from "../Components/AddCityButton";
import SearchContainer from "../Components/SearchContainer";

const CitySelectorScreen = () => {
  let [isSearch, setSearch] = useState<boolean>(false);
  let [cityList, setCityList] = useState([{ name: "London", country: "UK" }]);

  const searchModalHandler = (searchedResult: any) => {
    const city = cityList.find((el) => {
      return el?.name === searchedResult?.name;
    });
    if (!city) {
      setCityList([searchedResult, ...cityList]);
    }
    setSearch(!isSearch);
  };

  const addCityHandler = () => {
    if (!isSearch) {
      return <AddCityButton onPress={() => setSearch(true)} />;
    }
    return <SearchContainer onPress={searchModalHandler} />;
  };

  return (
    <View style={isSearch ? style.mainContainer : { flex: 1 }}>
      <View style={style.blueHeadercontainer}>
        <Text style={style.titleText}>Cities</Text>
      </View>
      <View style={style.cityMainContainer}>
        <FlatList
          data={cityList}
          renderItem={(city) => {
            return (
              <CityContainer
                name={city.item.name}
                country={city.item.country}
              />
            );
          }}
        />
      </View>
      {addCityHandler()}
    </View>
  );
};

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    opacity: 0.6,
    height: "100%",
  },
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
});

export default CitySelectorScreen;
