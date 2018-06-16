/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ListView,
  TouchableHighlight,
  ScrollView
} from 'react-native';

const instructions =
  'Press Ctrl+R to reload,\n' +
  'Shift+F10 or shake for dev menu';

class TreeView extends Component<{}> {
  constructor(props) {
    super(props)
    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    const treeData = [
      {name: 'React', children: {}},
      {name: 'Redux', children: {}},
      {name: 'Redux Thunk', children: {}},
      {name: 'React Native', children: {}},
      {name: 'React Native Windows', children: {}}
    ]

    this.state = {
      dataSource: ds.cloneWithRows(treeData)
    }
  }

  onTreeItemClick(item) {
    alert(item.name)
  }
  
  renderTreeItem(item) {
    return (
      <TouchableHighlight
        onPress={(e) => alert(`You chose: ${item.name}`)}
        style={styles.treeItem}
        underlayColor="#000">
        <Text style={styles.treeItemText} children={item.name} />
      </TouchableHighlight>
    )
  }

  render() {
    return (
      <ScrollView style={styles.treeView}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderTreeItem} />
      </ScrollView>
    )
  }
}

export default class App extends Component<{}> {
  render() {
    return (
      // Container
      <View style={styles.container}>
        <View style={[styles.container, {flexDirection: 'row'}]}>
          {/* Actionbar */}
          <View style={styles.activityBar}></View>
          
          {/* Sidebar */}
          <View style={styles.sidebar}>
            <View style={styles.explorerActionbar} />
            <TreeView path={'C:\\Users\\bukharim96\\Documents\\Projects\\steaky'} />
          </View>
          
          {/* Editor view */}
          <View style={styles.editor}>
            <Text style={styles.welcome}>
              Welcome to Visual Studio Native!
            </Text>
            <Text style={styles.instructions}>
              To get started, edit App.windows.js
            </Text>
            <Text style={styles.instructions}>
              {instructions}
            </Text>
            <Image source={require('./_resources/logos/SplashScreen.scale-200_dark.png')} />
          </View>
        </View>

        <View style={styles.statusbar}>
          <View style={{alignSelf: 'flex-end'}}><Text style={{color: '#fff', fontWeight: 'bold', fontSize: 13}}>Ln 41, Col 27</Text></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  activityBar: {
    flex: .47,
    backgroundColor: '#151515',
    maxWidth: 48,
    minWidth: 48
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
    flexDirection: 'column',
    backgroundColor: '#008000'
  },

  // Explorer
  explorerActionbar: {
    flex: .06,
    maxHeight: 40,
    backgroundColor: '#151515'
  },

  // TreeView
  treeView: {
    flex: 1,
    marginTop: 5
  },
  treeItem: {
    height: 30,
    paddingHorizontal: 15,
    paddingTop: 4
  },
  treeItemText: {color: '#999'},

  // Misc
  welcome: {
    fontSize: 40,
    color: '#fff',
    textAlign: 'center',
    margin: 10,
    marginTop: 150
  },
  instructions: {
    textAlign: 'center',
    color: '#d1d1d1',
    marginBottom: 5
  },
});
