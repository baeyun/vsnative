import React, { Component } from 'react'
import { View } from 'react-native'

import TreeView from './components/TreeView'
import Icon from './components/Icon'

import commonStyles from './themes/commonStyles'

import Sidebar from './views/Sidebar'
import CodeEditor from './views/CodeEditor/'
import Statusbar from './views/Statusbar'

export default class App extends Component<{}> {
  render() {
    return (
      <View style={commonStyles.container}>
        <View style={[commonStyles.container, {flexDirection: 'row'}]}>
          <Sidebar />
          
          <CodeEditor />
        </View>

        <Statusbar />
      </View>
    )
  }
}
