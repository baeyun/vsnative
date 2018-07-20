import React, { Component, Fragment } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView
} from 'react-native'

import Icon from './Icon'

const setObjByPath = require('lodash.set')

export default class TreeView extends Component<{}> {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.setState({
      rootPath: this.props.data.Path,
      data: this.props.data.Children // this.createTreeMap(this.props.data)
    })
  }
  
  // createTreeMap(data) {
  //   let { collapseAll = false } = this.props

  //   // Sort: folders first
  //   // @todo presort tree data via file watch
  //   //data.sort((a, b) => -(Object.keys(a).length - Object.keys(b).length))

  //   return data.map(
  //     (node, i) => {
  //       //node.objPath = objPath
  //       // node.path = this.pathFromObjPath(objPath)
        
  //       if (node.Children) {
  //         node.isCollapsed = collapseAll
  //         if (node.Children.length > 0)
  //           node.Children = this.createTreeMap(node.Children)
  //       }

  //       return node
  //     }
  //   )
  // }

  isDir(node) {
    return node.DisplayType === "File folder" && node.Children
  }

  handleTreeNodeClick(node, i) {
    if (this.isDir(node)) { // Folder
      // Toggle collapse state
      node.isCollapsed = !node.isCollapsed

      // update tree data state
      this.setState((previousState) => {
        return {
          data: setObjByPath(
            previousState.data,
            node.objPath.concat(i),
            node
          )
        }
      })
    } else { // File
      // @todo dispatch open file action
    }
  }

  renderNode(node, i, Children = null) {
    const nodeKey = "treeNode_" + i
    
    return (
      <View key={nodeKey}>
        <View>
          <TouchableHighlight
            onPress={() => this.handleTreeNodeClick(node, i)}
            style={[styles.treeNode, {paddingLeft: (node.Path * 15) + 20}]}
            underlayColor="#1e1e1e"
          >
            <Fragment>
              {
                this.isDir(node)
                  ? node.isCollapsed
                    ? <Icon name="triangle-down" size={16} color="#bbb" />
                    : <Icon name="triangle-right" size={16} color="#bbb" />
                  : <Icon name="file-text" size={16} color="#bbb" />
              }
              <Text
                children={node.Name}
                style={styles.treeNodeText} />
            </Fragment>
          </TouchableHighlight>

          { !node.isCollapsed && Children && <View style={styles.nodeChildren} children={Children} /> }
        </View>
      </View>
    )
  }
  
  getChildNodes(data) {
    return data.map((node, i) => {
      if (this.isDir(node) && node.Children)
        return this.renderNode(
          node, i, this.getChildNodes(node.Children)
        )

      return this.renderNode(node, i)
    })
  }

  render() {
    return <ScrollView
      // indicatorStyle="black"
      // showsVerticalScrollIndicator={false}
      children={this.getChildNodes(this.state.data)}
      style={styles.container}
    />
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
  treeNodeText: {fontSize: 17, flex: 4, color: '#bbb', paddingLeft: 10, paddingBottom: 3}
})