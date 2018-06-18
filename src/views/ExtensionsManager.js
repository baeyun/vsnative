import React, { Component } from 'react'
import { View, Text } from 'react-native'

import commonStyles from '../themes/commonStyles'

export default class ExtensionsManager extends Component<{}> {
  render() {
    return (
      <View style={commonStyles.sidebarTab}>
          <Text>ExtensionsManager</Text>
      </View>
    )
  }
}
