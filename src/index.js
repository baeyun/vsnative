import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { SplitViewWindows } from 'react-native-windows'

import TreeView from './components/TreeView'
import Icon from './components/Icon'

import commonStyles from './themes/commonStyles'

import Menubar from './components/windows/Menubar'
import Sidebar from './views/Sidebar'
import CodeEditor from './views/CodeEditor/'
import Statusbar from './views/Statusbar'

import { readFile, DocumentDirectoryPath } from 'react-native-fs'

const menuData = [
  {
    name: "File",
    menu: [
      {name: "New File", callback: ""},
      {name: "New Window", callback: ""},
    //  {seperator},
      {name: "Open File", callback: ""},
      {name: "Open Folder", callback: ""},
    //  {seperator},
      {name: "Open Workspace", callback: ""},
      {name: "Open recent", submenu: [
        {name: "./views/CodeEditor/index.js", callback: ""},
        {name: "../components/windows/MenuButton", callback: ""},
        {name: "./guppy/scripts/", callback: ""},
        {name: "../static/img/logo.png", callback: ""},
        {name: "More...", submenu: [
          {name: "./guppy/scripts/", callback: ""},
          {name: "../components/windows/MenuButton", callback: ""},
          {name: "../vsnative/", callback: ""}
        ]}
      ]},
    //  {seperator},
      {name: "Save", callback: ""},
      {name: "Save As", callback: ""},
      {name: "Save All", callback: ""},
      {name: "Save", callback: ""},
    //  {seperator},
      {name: "Auto Save", toggle: true, callback: ""},
    //  {seperator},
      {name: "Preferences", callback: ""},
    //  {seperator},
      {name: "Revert File", callback: ""},
      {name: "Close Editor", callback: ""},
      {name: "Close Folder", callback: ""},
      {name: "Close Window", callback: ""}
    ]
  },
  {name: "Edit"},
  {name: "Selection"},
  {name: "View"},
  {name: "Go"},
  {name: "Debug"},
  {name: "Tasks"},
  {name: "Help"}
]

export default class App extends Component<{}> {
  render() {
    return (
      <View style={commonStyles.container}>
        <Menubar
          data={menuData}
          style={{flex: .23, flexDirection: 'row', backgroundColor: '#f0f0f0'}} />
        
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
