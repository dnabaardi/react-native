import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.containerMain}>

        <View style={styles.box1}>
          <Text style={styles.text1}>Pendidikan Teknik Informatika</Text>
        </View>

        <View style={styles.box2}>
          <Text style={styles.text2}>Slider</Text>
        </View>

        <View style={styles.box3}>
          <View style={styles.boxbox1}>
            <View style={styles.boxbox2}>
              <Text style={styles.text3}>1</Text>
            </View>
            <View style={styles.boxbox2}>
              <Text style={styles.text3}>2</Text>
            </View>
            <View style={styles.boxbox2}>
              <Text style={styles.text3}>3</Text>
            </View>
            <View style={styles.boxbox2}>
              <Text style={styles.text3}>4</Text>
            </View>
          </View>

          <View style={styles.boxbox1}>
            <View style={styles.boxbox2}>
              <Text style={styles.text3}>5</Text>
            </View>
            <View style={styles.boxbox2}>
              <Text style={styles.text3}>6</Text>
            </View>
            <View style={styles.boxbox2}>
              <Text style={styles.text3}>7</Text>
            </View>
            <View style={styles.boxbox2}>
              <Text style={styles.text3}>8</Text>
            </View>
          </View>
        </View>


        <View style={styles.box4}>
          <Text style={styles.text4}>#JaenKuliahdiPTI</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: '#42A5F5'
  },

  box1: {
    flex: 2,
    backgroundColor: '#2196F3',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  box2: {
    flex: 4,
    backgroundColor: '#E3F2FD',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  box3: {
    flex: 4,
    backgroundColor: '#90CAF9',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 10

  },

  box4: {
    flex: 2,
    backgroundColor: '#0D47A1',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  boxbox1: {
    flex: 4,
    backgroundColor: '#90CAF9',
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 10

  },

  boxbox2: {
    flex: 4,
    backgroundColor: '#1565C0',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 10
  },

  text1: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },

  text2: {
    fontSize: 30,
    color: '#000000'
  },

  text3: {
    fontSize: 20,
    color: '#FFFFFF'
  },

  text4: {
    fontSize: 30,
    color: '#FFFFFF'
  },
});
