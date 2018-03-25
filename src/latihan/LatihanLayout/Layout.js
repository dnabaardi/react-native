import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

export default class Layout extends Component {
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
          <View style={styles.box31}>
            <View style={styles.box312}>
              <Text style={styles.text2}>1</Text>
            </View>
            <View style={styles.box312}>
              <Text style={styles.text2}>2</Text>
            </View>
            <View style={styles.box312}>
              <Text style={styles.text2}>3</Text>
            </View>
            <View style={styles.box312}>
              <Text style={styles.text2}>4</Text>
            </View>
          </View>

          <View style={styles.box31}>
            <View style={styles.box312}>
              <Text style={styles.text2}>5</Text>
            </View>
            <View style={styles.box312}>
              <Text style={styles.text2}>6</Text>
            </View>
            <View style={styles.box312}>
              <Text style={styles.text2}>7</Text>
            </View>
            <View style={styles.box312}>
              <Text style={styles.text2}>8</Text>
            </View>
          </View>
        </View>


        <View style={styles.box4}>
          <Text style={styles.text3}>#JaenKuliahdiPTI</Text>
        </View>

      </View>
    );
    }
    }

    const styles = StyleSheet.create({
    containerMain: {
    flex: 1,
    backgroundColor: '#84FFFF',
    flexDirection: 'column'
    },

    box1: {
    flex: 2,
    backgroundColor: '#00BCD4',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
    },

    box2: {
    flex: 4,
    backgroundColor: '#B2EBF2',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    },

    box3: {
    flex: 4,
    backgroundColor: '#84FFFF',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
    },

    box4: {
    flex: 2,
    backgroundColor: '#00BCD4',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    },

    box31: {
    flex: 4,
    backgroundColor: '#B2EBF2',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
    },

    box312: {
    flex: 4,
    backgroundColor: '#E0F7FA',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
    },

    text1: {
    fontSize: 30,
    fontWeight: 'bold',
    },

    text2: {
    fontSize: 30,
    },

    text3: {
    fontSize: 30,
    },
    });
