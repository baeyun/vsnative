import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { SplitViewWindows } from 'react-native-windows'

import Menubar from './components/Menubar'
import Sidebar from './views/Sidebar'
import CodeEditor from './views/CodeEditor/'
import Statusbar from './views/Statusbar'
import commonStyles from './themes/commonStyles'

// import { DeviceEventEmitter } from 'react-native';

// DeviceEventEmitter.addListener('MenubarItemClick', (data) => { console.log(data) })

const menuData = [
  {
    name: "File",
    submenu: [
      {name: "New File", action: "CREATE_FILE"},
      {name: "New Window", action: "CREATE_WINDOW"},
      {seperator: true},
      {name: "Open File", action: "OPEN_FILE"},
      {name: "Open Folder", action: "OPEN_FOLDER"},
      {seperator: true},
      {name: "Open recent", submenu: [ // @todo get from store
        {name: "./views/CodeEditor/index.js", action: "OPEN_RECENT"},
        {name: "../components/windows/MenuButton", action: "OPEN_RECENT"},
        {name: "./guppy/scripts/", action: "openRecent"},
        {name: "../static/img/logo.png", action: "OPEN_RECENT"},
        {name: "../vsnative/", action: "OPEN_RECENT"}
      ]},
      {seperator: true},
      {name: "Save", action: "save"},
      {name: "Save As", action: "SAVE_AS"},
      {name: "Save All", action: "SAVE_ALL"},
      {seperator: true},
      {name: "Auto Save", toggle: true, action: "TOGGLE_AUTO_SAVE"},
      {seperator: true},
      {name: "Preferences", action: "OPEN_PREFERENCE_SETTINGS"},
      {seperator: true},
      {name: "Revert File", clickEvent: "REVERT_FILE"},
      {name: "Close Editor", action: "CLOSE_EDITOR"},
      {name: "Close Folder", action: "CLOSE_FOLDER"},
      {name: "Close Window", action: "CLOSE_WINDOW"}
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
          style={{flex: 1, maxHeight: 25, flexDirection: 'row', backgroundColor: '#f0f0f0'}} />
        
        <View style={[commonStyles.container, {flex: 1,flexDirection: 'row'}]}>
          <Sidebar />

          <CodeEditor />
        </View>

        <Statusbar />
      </View>
    )
  }
}
