import React, { Component } from 'react'
import { View } from 'react-native'

import TreeView from './components/TreeView'
import Icon from './components/Icon'

import commonStyles from './themes/commonStyles'

import Sidebar from './views/Sidebar'
import Editor from './views/Editor'
import Statusbar from './views/Statusbar'

export default class App extends Component<{}> {
  render() {
    return (
      <View style={commonStyles.container}>
        <View style={[commonStyles.container, {flexDirection: 'row'}]}>
          <Sidebar />
          
          <Editor />
        </View>

        <Statusbar />
      </View>
    )
  }
}
