import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView, Button, Alert, Platform, StatusBar } from 'react-native';
import {useDeviceOrientation} from '@react-native-community/hooks';

/*
Tutorial: https://www.youtube.com/watch?v=0-S5a0eXPoc
Stopped at: 1:47

NOTES:
  For local static images use - require("path_to_image") - No need to specify dimensions because require does that for you
  When using images from the internet (ex. {uri: "https://picsum.photos/seed/picsum/200/300"}) you need to specify dimensions for react. 

  Dimensions.get(window/screen) - window always = screen on IOS but window can be smaller sometimes on android.

  orientation ins app.json - default lets both landscape and portrait mode occur, but if you want just one that's where you'd set it.

  TODO: replace StyleSheet with Nativewind (installs completed) - https://www.freecodecamp.org/news/tailwindcss-in-react-native-expo/

  
*/

export default function App() {

  const orientation = useDeviceOrientation();
  const handlePress = () => console.log("text clicked!")
  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={handlePress}>Open up App.tsx to start working on your app!</Text>
      <View style={
        {
          backgroundColor: 'orange',
          width: '50%',
          height: orientation == 'landscape' ? '50%' : 70
        }
      }>

      </View>
      <TouchableOpacity>
        <Image 
        fadeDuration={1000} //only works on android
        source={{
          height: 200,
          width: 300,
          uri: "https://picsum.photos/seed/picsum/200/300"
        }}/>
      </TouchableOpacity>
      <Button title='Click me' onPress={() =>
       Alert.alert('Main Title', 'Continue?', [
        {text: 'Yes', onPress: () => console.log('Yes!')}, {text: 'No'}
      ]
      )} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0
  },
});
