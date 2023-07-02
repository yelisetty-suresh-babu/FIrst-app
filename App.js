import react from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

const App = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text>current weather</Text>
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}> feels like : 5</Text>
        <View style={styles.highlow}>
          <Text>high : 5 </Text>
          <Text>low : 8</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'yellow'
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'
  },
  temp: {
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 48
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    color: 'white'
  },
  feels: {
    fontSize: 30
  },
  highlow: {
    flex: 1,
    flexDirection: 'row'
  }
})
export default App
