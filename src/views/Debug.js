import React from 'react'
import { View, Text } from 'react-native'

import commonStyles from '../themes/commonStyles'

export default ({display}) => {
  return (
    <View style={[commonStyles.sidebarTab, {display: display ? null : 'none'}]}>
      <Text>Debugger View</Text>
    </View>
  )
}
