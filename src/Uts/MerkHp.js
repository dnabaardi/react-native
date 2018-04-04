import React from 'react';
import { Button, Image, View, Text, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json
import ImageSlider from 'react-native-image-slider';


class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: ('Tipe Smartphone'),
    };
  };

  render() {
    return (
      <View style={styles.containerMain}>

        <View style={styles.box2}>
            <ImageSlider images={[
                'http://www.three.co.uk/cs/Satellite?blobkey=id&blobwhere=1400900528778&blobcol=urldata&blobtable=MungoBlobs',
                'https://drop.ndtv.com/TECH/product_database/images/329201783846PM_635_samsung_galaxy_s8.jpeg',
                'https://images-na.ssl-images-amazon.com/images/I/71VFdtGRmsL._SL1500_.jpg',
            ]}/>

        </View>

        <View style={styles.box3}>
        <Button
          title="Samsung S9"
          onPress={() => this.props.navigation.navigate('Samsung1')}
        />
        <Button
          title="Samsung S8"
          onPress={() => this.props.navigation.navigate('Samsung2')}
        />
        <Button
          title="Samsung S7"
          onPress={() => this.props.navigation.navigate('Samsung3')}
        />
        </View>


        <View style={styles.box4}>
          <Text style={styles.text4}>©Naba Ardiawan</Text>
        </View>

      </View>
    );
  }
}

class Samsung1 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Merk : Samsung S9</Text>
        <Text>Spek : JOSS</Text>
        <Text>Harga : Rp.12.500.000</Text>

      </View>
    );
  }
}
class Samsung2 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Merk : Samsung S8</Text>
        <Text>Spek : MANTAP</Text>
        <Text>Harga : Rp.9.500.000</Text>

      </View>
    );
  }
}
class Samsung3 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Merk : Samsung S7</Text>
        <Text>Spek : ENAK</Text>
        <Text>Harga : Rp.7.500.000</Text>

      </View>
    );
  }
}

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Samsung1: {
      screen: Samsung1,
    },
    Samsung2: {
      screen: Samsung2,
    },
    Samsung3: {
      screen: Samsung3,
    },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#0D47A1',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const styles = StyleSheet.create({
containerMain: {
flex: 1,
backgroundColor: '#1565C0'
},

box2: {
flex: 3,
backgroundColor: '#1976D2',
flexDirection: 'row',
justifyContent: 'space-around',
alignItems: 'center',
},

box3: {
flex: 3,
flexDirection: 'row',
backgroundColor: '#E3F2FD',
justifyContent: 'space-around',
alignItems: 'center',
},

box4: {
flex: 0.5,
backgroundColor: '#0D47A1',
flexDirection: 'row',
justifyContent: 'space-around',
alignItems: 'center',
},

});
