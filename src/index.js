import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { SplitViewWindows } from 'react-native-windows'

import TreeView from './components/TreeView'
import Icon from './components/Icon'

import commonStyles from './themes/commonStyles'

import Menubar from './views/Menubar'
import Sidebar from './views/Sidebar'
import CodeEditor from './views/CodeEditor/'
import Statusbar from './views/Statusbar'

import { readFile, DocumentDirectoryPath } from 'react-native-fs'

// Load local dummy HTML document
// const dummyDoc = ''
// readFile(DocumentDirectoryPath + '\\dummy-doc.html', 'utf8').then(
//   (content) => dummyDoc = content
// )

export default class App extends Component<{}> {
  render() {
    return (
      <View style={commonStyles.container}>
        <Menubar />
        <View style={[commonStyles.container, {flex: 9.77,flexDirection: 'row'}]}>
          <Sidebar />

          <CodeEditor />
        </View>
        {/* <SplitViewWindows
          paneWidth={500}
          panePosition={SplitViewWindows.positions.Left}
          renderPaneView={() => <Sidebar />}>
          <CodeEditor />
        </SplitViewWindows> */}

        <Statusbar />
      </View>
    )
  }
}
