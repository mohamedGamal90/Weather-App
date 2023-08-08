import {
  View,
  TextInput,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Modal,
  Pressable,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { CITY } from "../Data/city";
import { useEffect, useState } from "react";

const SearchContainer = ({ visible, onPress }: any) => {
  let [searchedText, setSearchedText] = useState<string>();
  let [searchResult, SetSearchResult] = useState<any>();

  const onChangeHandler = (searchedText: string) => {
    setSearchedText(searchedText);
  };

  useEffect(() => {
    if (searchedText && CITY.find((el: any) => el?.name === searchedText)) {
      SetSearchResult(CITY.find((el: any) => el?.name === searchedText));
    }
  });

  const city = () => {
    if (searchResult?.name) {
      return (
        <Pressable
          style={style.cityContainer}
          onPress={onPress.bind(this, searchResult)}
        >
          <Ionicons name="md-add" size={24} color="black" />
          <Text style={style.cityContainerName}>{searchResult.name}</Text>
        </Pressable>
      );
    }
  };

  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent={true}
    >
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="height">
        <View style={style.SearchContainer}>
          <View style={style.SearchBarContainer}>
            <Image
              source={require("../assets/search-24px.png")}
              style={style.searchIcon}
            />
            <TextInput
              placeholder="Search for cities"
              placeholderTextColor="black"
              style={style.searchInput}
              onChangeText={onChangeHandler}
              maxLength={20}
            />
          </View>
          {city()}
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

const style = StyleSheet.create({
  SearchContainer: {
    backgroundColor: "#FFFFFF",
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 402,
    zIndex: 11,
  },
  SearchBarContainer: {
    width: "100%",
    height: 56,
    borderColor: "#E9E9E9",
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    overflow: "hidden",
    gap: 11,
  },
  searchIcon: {
    flex: 1,
  },
  searchInput: {
    flex: 10,
    height: 40,
    margin: 12,
    padding: 10,
    fontWeight: "900",
  },
  cityContainer: {
    marginHorizontal: 10,
    marginVertical: 7,
    padding: 10,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  cityContainerName: {
    fontSize: 18,
  },
});

export default SearchContainer;
