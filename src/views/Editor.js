import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native'

import commonStyles from '../themes/commonStyles'

import vsnLogoSrc from '../../_resources/logos/SplashScreen.scale-200_dark.png'

export default (props) => {
  return (
    <View style={styles.container}>
      <Text style={commonStyles.h1}>
        Welcome to Visual Studio Native!
      </Text>
      <Image source={vsnLogoSrc} />
      <Text style={styles.instructions}>To get started, edit App.windows.js</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e1e1e'
  },
  instructions: {
    textAlign: 'center',
    color: '#777',
    marginTop: 15
  }
})