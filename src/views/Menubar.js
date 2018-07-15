import React from 'react'
import { View } from 'react-native'

import MenuButton from '../components/windows/MenuButton'

export default ({display}) => {
  return (
    <View style={{flex: .23, flexDirection: 'row', backgroundColor: '#ddd'}}>
      <MenuButton content="File" style={{width: 35, height: 25}} />
      <MenuButton content="Edit" style={{width: 35, height: 25}} />
      <MenuButton content="Selection" style={{width: 63, height: 25}} />
      <MenuButton content="View" style={{width: 42, height: 25}} />
      <MenuButton content="Help" style={{width: 42, height: 25}} />
    </View>
  )
}
