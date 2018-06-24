import React from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

import Icon from '../components/Icon'

export default (props) => {
  return (
    <View style={styles.statusbar}>
      {/* <Text style={styles.statusbarText}>
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
      </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
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
  statusbarText: {
    alignSelf: 'flex-start',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13
  }
})