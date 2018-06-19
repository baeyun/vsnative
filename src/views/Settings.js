import React, { Component } from 'react'
import { View, Text } from 'react-native'

import commonStyles from '../themes/commonStyles'

export default class Settings extends Component<{}> {
  render() {
    return (
      <View style={commonStyles.sidebarTab}>
          <Text>Settings View</Text>
      </View>
    )
  }
}
