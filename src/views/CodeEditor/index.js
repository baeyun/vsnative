import React from 'react'
import {
  StyleSheet,
  View
} from 'react-native'

import TabHeaders from './TabHeaders'
import CodeEditor from './CodeEditor'

export default (props) => {
  return (
    <View style={styles.container}>
      <TabHeaders />
      
      <CodeEditor />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    //justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#1e1e1e'
  }
})