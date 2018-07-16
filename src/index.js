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
    submenu: [
      {name: "New File", callback: ""},
      {name: "New Window", callback: ""},
      {seperator: true},
      {name: "Open File", callback: ""},
      {name: "Open Folder", callback: ""},
      {seperator: true},
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
      {seperator: true},
      {name: "Save", callback: ""},
      {name: "Save As", callback: ""},
      {name: "Save All", callback: ""},
      {name: "Save", callback: ""},
      {seperator: true},
      {name: "Auto Save", toggle: true, callback: ""},
      {seperator: true},
      {name: "Preferences", callback: ""},
      {seperator: true},
      {name: "Revert File", callback: ""},
      {name: "Close Editor", callback: ""},
      {name: "Close Folder", callback: ""},
      {name: "Close Window", callback: ""}
    ]
  },
  {name: "Edit", submenu: [
    {name: "Word Wrap", toggle: true}
  ]},
  {name: "Selection"},
  {name: "View"},
  {name: "Go", submenu: [
    {name: "Share", icon: "&#xE72D;"},
    {name: "Copy"},
    {name: "Delete"},
  ]},
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

        <Statusbar />
      </View>
    )
  }
}
