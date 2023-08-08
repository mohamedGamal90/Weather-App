import { View, Text, StyleSheet } from "react-native";

type Props = {
  description: string;
  temperature: number;
  humidity: number;
  windspeed: number;
};
const WeatherDetail = ({
  description,
  temperature,
  humidity,
  windspeed,
}: Props) => {
  return (
    <View>
      <View style={style.weatherDetailsContainer}>
        <Text style={style.detailText}>Description</Text>
        <Text style={style.numberText}>{description}</Text>
      </View>
      <View style={style.weatherDetailsContainer}>
        <Text style={style.detailText}>Temperature</Text>
        <Text style={style.numberText}>{temperature}° C</Text>
      </View>
      <View style={style.weatherDetailsContainer}>
        <Text style={style.detailText}>Humidity</Text>
        <Text style={style.numberText}>{humidity}%</Text>
      </View>
      <View style={style.weatherDetailsContainer}>
        <Text style={style.detailText}>Windspeed</Text>
        <Text style={style.numberText}>{windspeed} KM/h</Text>
      </View>
    </View>
  );
};

{
}

const style = StyleSheet.create({
  weatherDetailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 32,
    marginBottom: 7,
  },
  detailText: {
    fontSize: 14,
  },
  numberText: {
    fontSize: 20,
    color: "#2388C7",
  },
});

export default WeatherDetail;
