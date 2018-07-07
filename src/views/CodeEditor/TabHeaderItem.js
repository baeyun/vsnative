import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'

import Icon from '../../components/Icon'

export default class App extends Component<{}> {
  constructor(props) {
    super(props)

    this.state = {
      hoverState: false
    }
  }

  render() {
    const {hoverState} = this.state
    const {
      id,
      filename,
      active,
      handleClick,
      handleTabHeaderItemDel
    } = this.props
    const Container = active ? View : TouchableOpacity
    
    return (
      <Container
        // onMouseOver={() => {this.setState({hoverState: true})}}
        // onMouserOut={() => {this.setState({hoverState: false})}}
        onPress={() => handleClick(id)}
        style={[styles.container, active && styles.active]}>
        <Text
          style={[styles.txt, active && styles.activeTxt]}
          children={filename} />
        <TouchableOpacity
          onPress={() => handleTabHeaderItemDel(id)}>
          <Icon
            // style={[styles.icon, hoverState && {opacity: 1}]}
            style={[styles.icon, active && {opacity: 1}]}
            name="x"
            size={15}
            color="#c5c5c5" />
        </TouchableOpacity>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#2e2e2e",
    height: 45,
    alignItems: "center",
    paddingLeft: 20,
    borderRightWidth: 1,
    borderStyle: "solid",
    borderColor: "#252526"
  },
  active: {
    backgroundColor: "#1e1e1e"
  },
  txt: {
    fontFamily: "-apple-system,BlinkMacSystemFont,Segoe WPC,Segoe UI,HelveticaNeue-Light,Ubuntu,Droid Sans,sans-serif",
    fontSize: 16,
    color: "#767676"
  },
  activeTxt: {
    color: "#f0ffff"
  },
  icon: {
    paddingHorizontal: 12,
    paddingVertical: 15,
    opacity: 0.3
  }
})