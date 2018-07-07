import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native'

import TabHeaderItem from './TabHeaderItem'

export default class App extends Component<{}> {
  constructor(props) {
    super(props)

    this.state = {
      openFiles: [ // dummy open files
        {id: 1, filename: "ExtensionManager.js", active: false},
        {id: 2, filename: "CodeEditor.js", active: true},
        {id: 3, filename: "Debug.js", active: false},
        {id: 4, filename: ".gitignore", active: false},
        {id: 5, filename: ".babelrc", active: false},
        {id: 6, filename: "index.js", active: false}
      ]
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleTabHeaderItemDel = this.handleTabHeaderItemDel.bind(this)
  }

  handleClick(id) {
    this.setState(prevState => {
      return {openFiles: prevState.openFiles.map(f => {
        f.active = f.id === id ? true : false
        return f
      })}
    })
  }

  handleTabHeaderItemDel(id) {
    this.setState(prevState => {
      return {openFiles: prevState.openFiles.filter(f => f.id !== id)}
    })
  }

  render() {
    return (
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.container}
      >
        {this.state.openFiles.map(
          (file, k) => {
            return <TabHeaderItem
              key={`tab-header-item_${k}`}
              id={file.id}
              handleClick={this.handleClick}
              handleTabHeaderItemDel={this.handleTabHeaderItemDel}
              {...file} />
          }
        )}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    flexDirection: "row",
    backgroundColor: "#252526",
    maxHeight: 45
  }
})