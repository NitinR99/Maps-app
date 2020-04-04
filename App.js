import React from 'react';
import MapView, { Callout } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';

const mapStyle= [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ff8000"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ff8040"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ff8000"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#181818"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1b1b1b"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#2c2c2c"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ff8000"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#373737"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3c3c3c"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#4e4e4e"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ff8000"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  }
];
export default class App extends React.Component {

  render() {
    return (
<View style={styles.container}>
      <View style={styles.mapContainer}>
        <MapView 
customMapStyle={mapStyle}

initialRegion={{
      latitude: 42.309252,
      longitude: -83.029303,
      latitudeDelta: 0.1922,
      longitudeDelta: 0.1421,
    }} style={styles.mapStyle} >
</MapView>
</View>

<Callout>
<View style={[styles.flexContainer]}>
    <View style={styles.calloutView} >
      <TextInput style={styles.calloutSearch}
        placeholder={"Search"}
      />
    </View>
<View style={styles.locationbuttonContainer} >
	<Icon
  name='location-on'
iconStyle={styles.locationButton} 
onPress={() => console.log('get user location')}/>
</View>
</View>

  </Callout>     
</View>
    );
  }
}

const styles = StyleSheet.create({
flexContainer: {  
 borderColor: "transparent", 
marginTop: 1,
    height: 60,
    borderWidth: 2,
    flexDirection: 'row',
width: Dimensions.get('window').width/1.4, 
},
locationbuttonContainer:{
flex:1,
alignSelf:'flex-end',
},
locationButton: {
height:24,
color:'orange',

},

calloutView: {
flex:7,
marginTop: 30,
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  borderRadius: 20,
  
},
calloutSearch: {
  borderColor: "transparent",
	paddingLeft:'5%',  
},
  container: {

    backgroundColor: '#fff',
    alignItems: 'center',
    
	
  },
mapContainer: {
    
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height+120,
  },
});
