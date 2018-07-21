import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native'

import { pickFolder } from '../services/native-fs'
import commonStyles from '../themes/commonStyles'
import TreeView from '../components/NativeTreeView'
import Icon from '../components/Icon'

// import { DeviceEventEmitter } from 'react-native';
// DeviceEventEmitter.addListener('CURRENT_FOLDER_STRUCTURE', (data) => { console.log(data) })


export default class ProjectExplorer extends Component<{}> {
  constructor(props) {
    super(props)

    this.state = {
      rootPath: null,
      data: null
    }
  }

  render() {
    const { display } = this.props
    
    return (
      <View style={[commonStyles.sidebarTab, {display: display ? null : 'none'}]}>
        <View style={styles.actionbar}>
          <Text style={styles.actionbarTitle} children="EXPLORER: PROJECT" />

          <Icon style={styles.actionbarIcon} name="plus" size={20} color="#999999" />
          <Icon style={styles.actionbarIcon} name="file-directory" size={20} color="#999999" />
          <Icon style={styles.actionbarIcon} name="sync" size={20} color="#999999" />
          <Icon style={styles.actionbarIcon} name="chevron-up" size={20} color="#999999" />
        </View>

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

        { this.state.root && <TreeView path={this.state.root.Path} />}
      </View>
    )
  }
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