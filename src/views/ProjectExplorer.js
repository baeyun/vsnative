import React from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

import commonStyles from '../themes/commonStyles'
import TreeView from '../components/TreeView'
import Icon from '../components/Icon'

// @note should be loaded from store
const treeData = [
  {name: 'config', children: [
    {name: 'webpack.config.js'},
    {name: 'common.config.js'},
    {name: 'prod.config.js'},
    {name: 'dev.config.js'}
  ]},
  {name: 'dist', children: [1,2,3]},
  {name: 'docs', children: [
    {name: 'CREDITS.md'},
    {name: 'README.md'},
    {name: 'LICENSE'}
  ]},

  {name: 'node_modules', children: [
    {name: 'react', children: [
      {name: 'CREDITS.md'},
      {name: 'README.md'},
      {name: 'index.js'},
      {name: 'LICENSE'}
    ]},
    {name: 'socket-io', children: [
      {name: 'CREDITS.md'},
      {name: 'README.md'},
      {name: 'index.js'},
      {name: 'LICENSE'}
    ]},
    {name: 'json', children: [
      {name: 'lib', children: [
        {name: 'json5.js'},
        {name: 'json4.js'}
      ]},
      {name: 'CREDITS.md'},
      {name: 'README.md'},
      {name: 'index.js'},
      {name: 'LICENSE'}
    ]}
  ]},

  {name: 'scripts', children: [1,2,3]},
  {name: 'src', children: [
    {name: 'store', children: [1,2,3]},
    {name: 'css', children: [1,2,3]},
    {name: 'js', children: [1,2,3]},
    {name: 'lib', children: [1,2,3]},
    {name: 'font', children: [1,2,3]},
    {name: 'img', children: [1,2,3]}
  ]},
  {name: 'App.js'},
  {name: 'index.js'},
  {name: '.watchmanconfig'},
  {name: '.gitignore'},
  {name: '.gitattributes'},
  {name: '.flowconfig'},
  {name: '.babelrc'},
  {name: '.buckconfig'},
  {name: 'LICENSE'},
  {name: 'yarn-lock.json'},
  {name: 'webpack.config.js'},
  {name: 'README.md'},
  {name: '.watchmanconfig'},
  {name: '.gitignore'},
  {name: '.gitattributes'},
  {name: '.flowconfig'},
  {name: '.babelrc'},
  {name: '.buckconfig'},
  {name: '.watchmanconfig'},
  {name: '.gitignore'},
  {name: '.gitattributes'},
  {name: '.flowconfig'},
  {name: '.babelrc'},
  {name: '.buckconfig'},
  {name: 'LICENSE'},
  {name: 'yarn-lock.json'},
  {name: 'webpack.config.js'},
  {name: 'README.md'},
  {name: '.watchmanconfig'},
  {name: 'LICENSE'},
  {name: 'yarn-lock.json'},
  {name: 'webpack.config.js'},
  {name: 'README.md'},
  {name: '.watchmanconfig'},
  {name: '.gitignore'},
  {name: '.gitattributes'},
  {name: '.flowconfig'},
  {name: '.babelrc'},
  {name: '.buckconfig'},
  {name: 'package.json'}
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
      <TreeView data={treeData} />
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