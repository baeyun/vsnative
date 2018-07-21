import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

import commonStyles from '../themes/commonStyles'
import TreeView from '../components/TreeView'
import Icon from '../components/Icon'

// import { DeviceEventEmitter } from 'react-native';
// DeviceEventEmitter.addListener('CURRENT_FOLDER_STRUCTURE', (data) => { console.log(data) })


export default class ProjectExplorer extends Component<{}> {
  constructor(props) {
    super(props)

    this.state = {
      treeData: null
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

        <TreeView />
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