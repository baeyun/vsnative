import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native'

// import staticEditor from '../../static/editor'

export default (props) => {
  return (
    // <WebView
    //   startInLoadingState={false}
    //   style={styles.container}
    //   injectedJavaScript="document.body.style.backgroundColor = '#1e1e1e';"
    //   source={{html: staticEditor}} />
    <WebView
      startInLoadingState={false}
      style={styles.container}
      // injectedJavaScript="document.write(navigator.appCodeName)"
      source={{uri: 'http://127.0.0.1:8888/browser-amd-editor/'}} />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    //justifyContent: 'center',
    // alignItems: 'flex-start',
    backgroundColor: '#1e1e1e'
  }
})