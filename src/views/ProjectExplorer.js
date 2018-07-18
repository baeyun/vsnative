import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native'

import commonStyles from '../themes/commonStyles'
import TreeView from '../components/TreeView'
import Icon from '../components/Icon'

import { pickFile } from '../services/native-fs'


// @note should be loaded from store
const treeData = [
  {name:'.vs', children: []},
  {name:'node_modules', children: []},
  {name:'packages', children: []},
  {name:'scripts', children: [
    {name:'build-editor.js'},
    {name:'build.js'},
    {name:'start.js'}
  ]},
  {name:'src', children: [
    {name: 'components', children: [
      {name:'Icon.js'},
      {name:'index.js'},
      {name:'TreeView.js'},
      {name:'views', children: [
        {name:'CodeEditor', children: [
          {name:'Editor.js'},
          {name:'index.js'},
          {name:'TabHeaderItem.js'},
          {name:'TabHeaders.js'},
        ]},
        {name:'Debug.js'},
        {name:'ExtensionsManager.js'},
        {name:'GitManager.js'},
        {name:'ProjectExplorer.js'},
        {name:'ProjectTerminal.js'},
        {name:'Search.js'},
        {name:'Settings.js'},
        {name:'Sidebar.js'},
        {name:'Statusbar.js'}
      ]},
      {name:'index.js'}
    ]}
  ]},
  {name:'static', children: [
    {name:'icons', children: [
      {name:'octicons-selection.json'},
      {name:'octicons.eot'},
      {name:'octicons.svg'},
      {name:'octicons.ttf'},
      {name:'octicons.woff'},
      {name:'seti-selection.json'},
      {name:'seti.eot'},
      {name:'seti.svg'},
      {name:'seti.ttf'},
      {name:'seti.woff'}
    ]},
    {name:'js', children: []},
    {name:'index.html'}
  ]},
  {name:'themes', children: [
    {name:'commonStyles.js'},
    {name:'vsnDark.js'}
  ]},
  {name:'windows', children: []},
  {name:'.babelrc'},
  {name:'.buckconfig'},
  {name:'.flowconfig'},
  {name:'.gitattributes'},
  {name:'.gitignore'},
  {name:'.watchmanconfig'},
  {name:'App.js'},
  {name:'app.json'},
  {name:'App.windows.js'},
  {name:'index.js'},
  {name:'lerna-debug.log'},
  {name:'lerna.json'},
  {name:'LICENSE'},
  {name:'package.json'},
  {name:'README.md'}
]

export default ({display}) => {
  return (
    <View style={[commonStyles.sidebarTab, {display: display ? null : 'none'}]}>
      <View style={styles.actionbar}>
        <Text style={styles.actionbarTitle} children="EXPLORER: PROJECT" />

        <Icon style={styles.actionbarIcon} name="plus" size={20} color="#999999" />
        <Icon style={styles.actionbarIcon} name="file-directory" size={20} color="#999999" />
        <Icon style={styles.actionbarIcon} name="sync" size={20} color="#999999" />
        <Icon style={styles.actionbarIcon} name="chevron-up" size={20} color="#999999" />
      </View>

      <Button title="Open File(s)" onPress={() => {console.log(pickFile())}} color="#ddd" />
      
      {/* <TreeView data={treeData} /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  actionbar: {
    flex: .06,
    flexDirection: 'row',
    alignItems: 'center',
    maxHeight: 45
  },
  actionbarTitle: { flex: 4, fontSize: 16, color: '#999', paddingHorizontal: 15 },
  actionbarIcon: { flex: 1 }
})