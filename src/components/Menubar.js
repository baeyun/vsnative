import React from 'react'
import PropTypes from 'prop-types';
import {
  requireNativeComponent,
  ViewPropTypes,
  View
} from 'react-native';

var iface = {
  name: 'MenuButton',
  propTypes: {
    data: PropTypes.array,
    ...ViewPropTypes // include the default view properties
  },
};

// Get native component
const Menubar = requireNativeComponent('VSNativeMenubar', iface);

export default ({style, ...rest}) => {
  return <View
    style={style}
    children={
      <Menubar {...rest} style={{flex: 1}} />
    } />
}