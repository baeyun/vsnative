import * as monaco from 'monaco-editor'
// or import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'
// if shipping only a subset of the features & languages is desired

monaco.editor.create(document.getElementById('root'), {
  language: 'javascript',
  theme: 'vs-dark',
  fontSize: 19,
  value: `import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native'

const RNFS = require('react-native-fs')

export default class Editor extends Component<{}> {
  constructor(props) {
    super(props)

    this.WebView = null
    this.state = {
      staticEditorBuild: '',
      staticEditorBuildURI: '',
      msg: ''
    }

    this.onMessage = this.onMessage.bind(this)
  }

  componentWillMount() {
    const AssetPath = RNFS.MainBundlePath + '/Assets/'
    
    RNFS.readFile(AssetPath + 'index.html', 'utf8').then(
      content => this.setState({staticEditorBuild: content})
    ).catch(err => {
      // @todo better handle error
      // console.log(err.message, err.code)
      this.setState({staticEditorBuild: err.message})
    })
  }

  onMessage( event ) {
    console.log( "On Message", event.nativeEvent.data );
    this.setState({msg: event.nativeEvent.data})
    // dispatch action
  }

  postMessage(msg) {
    this.WebView.postMessage(msg);
  }

  render() {
    return (
      <View style={styles.container}>
        <WebView
          ref={( WebView ) => this.WebView = WebView}
          onMessage={this.onMessage}
          startInLoadingState={false}
          injectedJavaScript="window.postMessage('Hello there! This is a message from the editor!')"
          source={{html: this.state.staticEditorBuild}} />
        <Text style={{color: "#008000"}} children={this.state.msg || null} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    //justifyContent: 'center',
    // alignItems: 'flex-start',
    backgroundColor: '#1e1e1e'
  }
})`
})