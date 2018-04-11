import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json
import ImageSlider from 'react-native-image-slider';
import { Button, List, ListItem } from 'react-native-elements';


class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: ('STT SUSILA DHARMA'),
    };
  };

  render() {
    return (
      <View style={styles.containerMain}>

        <View style={styles.box1}>
            <ImageSlider
              images={[
                'http://www.three.co.uk/cs/Satellite?blobkey=id&blobwhere=1400900528778&blobcol=urldata&blobtable=MungoBlobs',
                'https://drop.ndtv.com/TECH/product_database/images/329201783846PM_635_samsung_galaxy_s8.jpeg',
                'https://images-na.ssl-images-amazon.com/images/I/71VFdtGRmsL._SL1500_.jpg',
              ]}
            />

        </View>
        <View style={styles.box2}>

          <TouchableOpacity
             style={styles.buttonStyle}
             onPress={() => this.props.navigation.navigate('Daftar')}
          >
            <Text style={styles.textStyle2}>DAFTAR ANGGOTA</Text>
          </TouchableOpacity>

          <TouchableOpacity
             style={styles.buttonStyle}
             onPress={() => this.props.navigation.navigate('Daftar')}
          >
            <Text style={styles.textStyle2}>TAMBAH ANGGOTA</Text>
          </TouchableOpacity>

          <TouchableOpacity
             style={styles.buttonStyle}
             onPress={() => this.props.navigation.navigate('Daftar')}
          >
            <Text style={styles.textStyle2}>AGENDA</Text>
          </TouchableOpacity>

        </View>


        <View style={styles.box3}>
          <Text style={styles.textStyle}>©Naba Ardiawan</Text>
        </View>

      </View>
    );
  }
}

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Naba Ardiawan',
    avatar_url: 'https://scontent.fsub4-1.fna.fbcdn.net/v/t1.0-9/13912645_1180415915338424_516476250891689554_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeHCkc0yXmjccwpnM079dSeeUcRR7QM8UkcGfLI5KrKWpxNQIn42aU98G4IcbtIOooF2etcdL_DTOE5ucQQtLI_WG7zU58N7RYK2I2ahSps22A&oh=fa5c1fafe1f507a676db19cca060eedf&oe=5B661743',
    subtitle: 'Leader'
    
  },
];

class Daftar extends React.Component {
  render() {
    return (
<List containerStyle={{ marginBottom: 20 }}>
  {
    list.map((l, i) => (
      <ListItem
        roundAvatar
        avatar={{ uri: l.avatar_url }}
        key={i}
        title={l.name}
      />
    ))
  }
</List>
    );
  }
}

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Daftar: {
      screen: Daftar,
    },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#DDDDDD',
      },
      headerTintColor: '#000000',
      headerTitleStyle: {
        fontWeight: 'bold'
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
  backgroundColor: '#FFFFFF'
},

box1: {
  flex: 3,
  backgroundColor: '#1976D2',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
},

box2: {
  flex: 2,
  backgroundColor: '#FFFFFF',
  justifyContent: 'space-around',
  alignItems: 'center',
},

box3: {
  flex: 0.3,
  backgroundColor: '#DDDDDD',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
},

buttonStyle: {
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#BDBDBD',
  width: '80%',
  height: '25%',
  padding: 10
},

textStyle: {
  color: '#000000',
},

textStyle2: {
  color: '#000000',
  fontSize: 20,
  fontWeight: 'bold',
}

});
