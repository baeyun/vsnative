import React, { Component, Fragment } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView,
  Button
} from 'react-native'

import Icon from './Icon'
import { pickFolder, pickFile, pickFileSave } from '../services/native-fs'

const setObjByPath = require('lodash.set')

export default class TreeView extends Component<{}> {
  constructor(props) {
    super(props)
    
    this.state = {
      rootPath: null,
      data: null
    }
  }
  
  createTreeMap(data, objPath=[]) {
    let { collapseAll = false } = this.props

    // Sort: folders first
    // @todo presort tree data via file watch
    data.sort((a, b) => -(Object.keys(a).length - Object.keys(b).length))

    return data.map(
      (node, i) => {
        node.objPath = objPath
        // node.path = this.pathFromObjPath(objPath)
        
        if (node.children) {
          node.isCollapsed = collapseAll
          if (node.children.length > 0)
            node.children = this.createTreeMap(
              node.children,
              objPath.length
                ? node.objPath.concat(['children', i])
                : node.objPath.concat(i)
            )
        }

        return node
      }
    )
  }

  isDir(node) {
    return node.DisplayType === "File folder" && node.Children
  }

  handleTreeNodeClick(node) {
    if (this.isDir(node)) { // Folder
      // Toggle collapse state
      node.isCollapsed = !node.isCollapsed

      // update tree data state
      this.setState((previousState) => {
        return {
          data: setObjByPath(
            previousState.data,
            node.ObjPath,
            node
          )
        }
      })
    } else { // File
      // @todo dispatch open file action
    }
  }

  renderNode(node, i, Children = null) {
    const nodeKey = "treeNode_" + i,
          indentDepth = (((node.Path.match(/\\/g)||[]).length - this.state.root.Depth) * 15) + 20
    
    return (
      <View key={nodeKey}>
        <View>
          <TouchableHighlight
            onPress={() => this.handleTreeNodeClick(node)}
            style={[
              styles.treeNode,
              {paddingLeft: indentDepth}
            ]}
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

          { node.isCollapsed && Children && <View style={styles.nodeChildren} children={Children} /> }
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
    return (
      <Fragment>
        <Button
          title="Open Folder"
          onPress={() => {
            pickFolder().then(data => {
              this.setState({
                root: {
                  Attributes: data.Attributes,
                  Datecreated: data.DateCreated,
                  Displayname: data.DisplayName,
                  Displaytype: data.DisplayType,
                  Folderrelativeid: data.FolderRelativeId,
                  Name: data.Name,
                  Path: data.Path,
                  Properties: data.Properties,
                  Provider: data.Provider,
                  IsCollapsed: data.IsCollapsed,
                  Depth: (data.Path.match(/\\/g)||[]).length
                },
                data: data.Children
              })

              console.log(this.state)
            }).catch(e => {
              console.log(e)
            })
          }}
          color="#ddd" />
        {
          this.state.data
            ? <ScrollView
                // indicatorStyle="black"
                // showsVerticalScrollIndicator={false}
                children={this.getChildNodes(this.state.data)}
                style={styles.container}
              />
            : <Text children="You have not yet opened a folder." />
        }
      </Fragment>
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
  treeNodeText: {fontSize: 17, flex: 4, color: '#bbb', paddingLeft: 10, paddingBottom: 3}
})