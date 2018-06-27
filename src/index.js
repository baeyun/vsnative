import React, { Component } from 'react'
import { View, WebView } from 'react-native'

import TreeView from './components/TreeView'
import Icon from './components/Icon'

import commonStyles from './themes/commonStyles'

import Sidebar from './views/Sidebar'
import CodeEditor from './views/CodeEditor/'
import Statusbar from './views/Statusbar'

const RNFS = require('react-native-fs')
const dummyDoc = ''

RNFS.readFile(RNFS.DocumentDirectoryPath + '\\dummy-doc.html', 'utf8').then((content) => dummyDoc = content)

export default class App extends Component<{}> {
  render() {
    return (
      <View style={commonStyles.container}>
        <View style={[commonStyles.container, {flexDirection: 'row'}]}>
          <Sidebar />
          
          <View style={{flex: 5}}>
            <WebView
              source={{html: dummyDoc}} />
          </View>
        </View>

        <Statusbar />
      </View>
    )
  }
}
