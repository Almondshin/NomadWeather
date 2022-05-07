import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello! I made a ReactNative app! 왜 안바뀌는데? 진챠루?</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "teal",
  },
  city: {
    flex: 1.2,
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: {
    fontSize: 68,
    fontWeight: "500",
  },
  weather: {
    flex: 1,
    backgroundColor:"blue",
  },
  day: {
    flex: 1,
    alignItems: "center",
  },
  temp: {
    marginTop: 50,
    fontSize: 178,
  },
  description: {
    marginTop: -30,
    fontSize: 60,
  },
});

// StatusBar =

// object를 생성하는데 사용됨 
// 1. 자동완성기능을 제공함
// 2. component를 정리하는데 유용함
// 그러나 반드시 필요한건 아님
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     fontSize: 38,
//     color: "red",
//   }
// });
