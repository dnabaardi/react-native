import React, { Component } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panjang: 0,
      lebar: 0,
      tinggi: 0,
      volume: 0
    };
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#8C9EFF' }}>

        <View style={{ backgroundColor: '#303F9F' }}>
           <Text style={{ padding: 10, fontSize: 20, color: 'white', textAlign: 'center' }} >
            Menghitung Volume Balok
          </Text>
         </View>

        <View style={{ margin: 20, padding: 10, backgroundColor: '#E0F2F1' }}>
            <TextInput
              style={{ height: 40 }}
              placeholder="Masukkan Panjang"
              onChangeText={(panjang) => this.setState({ panjang })}
              keyboardType='numeric'
            />

            <TextInput
              style={{ height: 40 }}
              placeholder="Masukkan  Lebar"
              onChangeText={(lebar) => this.setState({ lebar })}
              keyboardType='numeric'
            />

            <TextInput
              style={{ height: 40 }}
              placeholder="Masukkan  Tinggi"
              onChangeText={(tinggi) => this.setState({ tinggi })}
              keyboardType='numeric'
            />

            <Button
              onPress={() => this.setState({
                volume: ((this.state.panjang * this.state.lebar * this.state.tinggi))
              })}
              title="Hitung"
              accessibilityLabel="Klik untuk menghitung"
              color='#3F51B5'
            />
       </View>

        <View style={{ margin: 20, backgroundColor: '#5C6BC0' }}>
          <Text style={{ padding: 10, fontSize: 20, color: '#E0F2F1' }}>
              Panjang = {this.state.panjang} {'\n'}
              Lebar = {this.state.lebar} {'\n'}
              Tinggi = {this.state.tinggi} {'\n'}
          </Text>
         </View>

         <View style={{ margin: 20, backgroundColor: '#5C6BC0' }}>
           <Text style={{ padding: 10, fontSize: 20, color: '#E0F2F1' }}>
               Volume = {this.state.volume}
           </Text>
          </View>

   </View>

    );
  }
}
