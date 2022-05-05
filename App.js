import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
<<<<<<< HEAD
      <View style={styles.city}>
        <Text style={styles.cityName}>Gyeonggi</Text>
      </View>
      <ScrollView style={styles.weather}>
        <View style={styles.day}>
          <Text style={styles.temp}>25</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>25</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>25</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>25</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>25</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>25</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>25</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>25</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
      </ScrollView>
=======
      <Text>Hello! I made a ReactNative app! 왜 안바뀌는데? 진챠루?</Text>
      <StatusBar style="auto" />
>>>>>>> 7a10f9a3433e57ffdea78f7ea831be6c0c1c4ac1
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
