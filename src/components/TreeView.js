import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView
} from 'react-native'

import Icon from './Icon'

export default class TreeView extends Component<{}> {
  constructor(props) {
    super(props)

    this.state = {
      indentLevel: 0,
      data: this.props.data.map(
        (node) => {
          if (node.children && node.children.length > 0)
            node.isCollapsed = false
  
          return node
        }
      )
    }
  }

  isDirectory(node) {
    return node.hasOwnProperty('isCollapsed')
  }

  renderNode(node, i, children = null) {
    return (
      <TouchableHighlight key={'treeNode_' + i} onPress={() => this.handleTreeNodeClick(node, i)} underlayColor="#000">
        <View>
          <View style={[styles.treeNode]}>
            {
              this.isDirectory(node)
                ? node.isCollapsed ? <Icon name="triangle-down" size={20} color="#999999" /> : <Icon name="triangle-right" size={20} color="#999999" />
                : <Icon name="file-text" size={20} color="#999999" />
            }
            <Text style={styles.treeNodeText} children={node.name + ` - ${this.state.indentLevel}`} />
          </View>

          { node.isCollapsed && children && <View style={styles.nodeChildren} children={children} /> }
        </View>
      </TouchableHighlight>
    )
  }
  
  getChildNodes(data) {
    return data.map((node, i) => {
      if (this.isDirectory(node) && node.children.length > 0) {
        // this.setState((previousState) => {
        //   return {
        //     indentLevel: previousState.indentLevel++
        //   }
        // })

        return this.renderNode(node, i, this.getChildNodes(node.children))
      }

      return this.renderNode(node, i)
    })
  }

  handleTreeNodeClick(node, i) {
    if (this.isDirectory(node) && node.isCollapsed.constructor === Boolean) { // Folder
      node.isCollapsed = !node.isCollapsed

      this.setState({
        data: this.state.data.map(
          (d, k) => k === i ? node : d
        )
      })

      // @fix do it the react way (make use of previous state)
      // this.setState((previousState) => {
      //   return {
      //       data: previousState.data.map(
      //       (d, k) => k === i ? node : d
      //     )
      //   }
      // })
    } else { // File
      // Open file in editor
    }
  }

  render() {

    return (
      <ScrollView style={styles.container}>
        { this.getChildNodes(this.state.data) }
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  treeNode: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    height: 30,
    paddingHorizontal: 15,
    paddingTop: 4
  },
  treeNodeIcon: {flex: 1, alignSelf: 'flex-start'},
  treeNodeText: {fontSize: 18, flex: 4, color: '#999', paddingLeft: 10, paddingBottom: 3}
})