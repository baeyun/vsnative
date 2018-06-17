import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native'

import TreeView from './components/TreeView'
import Icon from './components/Icon'

export default class App extends Component<{}> {
  constructor(props) {
    super(props)

    this.state = {
      treeData: [
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
        {name: 'package.json'}
      ]
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.container, {flexDirection: 'row'}]}>
          <View style={styles.activitybar}>
            {/* <Icon style={styles.activitybarIcon} name="three-bars" size={30} color="#999999" /> */}
            <Icon style={styles.activitybarIcon} name="file-code" size={30} color="#999999" />
            <Icon style={styles.activitybarIcon} name="search" size={30} color="#999999" />
            <Icon style={styles.activitybarIcon} name="repo-forked" size={30} color="#999999" />
            <Icon style={styles.activitybarIcon} name="bug" size={30} color="#999999" />
            <Icon style={styles.activitybarIcon} name="package" size={30} color="#999999" />
            <Icon style={styles.activitybarIcon} name="terminal" size={30} color="#999999" />
            <Icon style={styles.activitybarIcon} name="gear" size={30} color="#999999" />
          </View>
          
          <View style={styles.sidebar}>
            <View style={styles.actionbar}>
              <Text style={styles.actionbarTitle} children="EXPLORER: PROJECT" />

              <Icon style={styles.actionbarIcon} name="plus" size={20} color="#999999" />
              <Icon style={styles.actionbarIcon} name="file-directory" size={20} color="#999999" />
              <Icon style={styles.actionbarIcon} name="sync" size={20} color="#999999" />
              <Icon style={styles.actionbarIcon} name="chevron-up" size={20} color="#999999" />
            </View>
            <TreeView data={this.state.treeData} />
          </View>
          
          <View style={styles.editor}>
            <Text style={styles.welcome}>
              Welcome to Visual Studio Native!
            </Text>
            <Image source={require('../_resources/logos/SplashScreen.scale-200_dark.png')} />
            <Text style={styles.instructions}>To get started, edit App.windows.js</Text>
          </View>
        </View>

        <View style={styles.statusbar}>
          <Text style={styles.statusbarText}>
            <Icon style={styles.actionbarIcon} name="git-branch" size={20} color="#ffffff" />
            master
          </Text>
          <Icon style={styles.actionbarIcon} name="sync" size={20} color="#ffffff" />
          <Text style={styles.statusbarText}>
            <Icon style={styles.actionbarIcon} name="circle-slash" size={20} color="#ffffff" />
            3
          </Text>
          <Text style={styles.statusbarText}>
            <Icon style={styles.actionbarIcon} name="stop" size={20} color="#ffffff" />
            0
          </Text>
          <View style={[styles.floatDown, {flexDirection: 'row'}]}>
            <Text style={styles.statusbarText}>Ln 41, Col 27</Text>
            <Text style={styles.statusbarText}>Spaces: 2</Text>
            <Text style={styles.statusbarText}>UTF-8</Text>
            <Text style={styles.statusbarText}>CRLF</Text>
            <Text style={styles.statusbarText}>JavaScript</Text>
            <Icon style={styles.actionbarIcon} name="bell" size={20} color="#ffffff" />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  activitybar: {
    flex: .47,
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
    maxWidth: 48,
    minWidth: 48
  },
  activitybarIcon: {
    marginTop: 25
  },
  sidebar: {
    flex: .7,
    backgroundColor: '#252526',
    minWidth: 150
  },
  editor: {
    flex: 5,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e1e1e'
  },
  statusbar: {
    flex: .025,
    minHeight: 26,
    maxHeight: 26,
    // paddingVertical: 1,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#008000'
  },
  statusbarText: {alignSelf: 'flex-start', color: '#fff', fontWeight: 'bold', fontSize: 13},

  // Explorer
  actionbar: {
    flex: .06,
    flexDirection: 'row',
    alignItems: 'center',
    maxHeight: 40
  },
  actionbarTitle: { flex: 4, fontSize: 16, color: '#999', paddingHorizontal: 15 },
  actionbarIcon: { flex: 1 },

  // Common
  floatDown: { alignSelf: 'flex-end' },

  // Misc
  welcome: {
    fontSize: 40,
    color: '#777',
    textAlign: 'center',
    margin: 10,
    marginTop: 150
  },
  instructions: {
    textAlign: 'center',
    color: '#777',
    marginTop: 15
  },
})