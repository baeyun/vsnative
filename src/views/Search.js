import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native'

import commonStyles from '../themes/commonStyles'
import Icon from '../components/Icon'

export default ({display}) => {
  return (
    <View style={[commonStyles.sidebarTab, {display: display ? null : 'none'}]}>
      {/* <View style={styles.actionbar}>
        <Text style={styles.actionbarTitle} children="SEARCH" />

        <Icon style={styles.actionbarIcon} name="sync" size={20} color="#999999" />
        <Icon style={styles.actionbarIcon} name="chevron-up" size={20} color="#999999" />
        <Icon style={styles.actionbarIcon} name="x" size={20} color="#999999" />
      </View>
      <View style={commonStyles.panel}>
        <TextInput placeholder="Search" />
        <TextInput placeholder="Replace" style={{marginTop: 15, marginBottom: 15}} />
        <Button title="Start" style={{backgroundColor: '#fff'}} onPress={() => null} />
      </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  actionbar: {
    flex: .06,
    flexDirection: 'row',
    alignItems: 'center',
    maxHeight: 40
  },
  actionbarTitle: { flex: 4, fontSize: 16, color: '#999', paddingHorizontal: 15 },
  actionbarIcon: { flex: 1 }
})