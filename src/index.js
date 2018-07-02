import React, { Component } from 'react'
import { View, Text, WebView } from 'react-native'

import TreeView from './components/TreeView'
import Icon from './components/Icon'

import commonStyles from './themes/commonStyles'

import Sidebar from './views/Sidebar'
import CodeEditor from './views/CodeEditor/'
import Statusbar from './views/Statusbar'

import { readFile, DocumentDirectoryPath } from 'react-native-fs'

import staticEditor from './static/editor'

// Load local dummy HTML document
// const dummyDoc = ''
// readFile(DocumentDirectoryPath + '\\dummy-doc.html', 'utf8').then(
//   (content) => dummyDoc = content
// )

export default class App extends Component<{}> {
  render() {
    return (
      <View style={commonStyles.container}>
        <View style={[commonStyles.container, {flexDirection: 'row'}]}>
          <Sidebar />
          
          <View style={{flex: 5}}>
            {/* <Text children={staticEditor} /> */}
            <WebView
              // injectedJavaScript="document.write(navigator.appCodeName)"
              source={{html: staticEditor}} />
          </View>
        </View>

        <Statusbar />
      </View>
    )
  }
}
