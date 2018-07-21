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
    path: PropTypes.string,
    ...ViewPropTypes // include the default view properties
  },
};


// Get native component
const TreeView = requireNativeComponent('VSNativeTreeView', iface);

export default ({style, ...rest}) => {
  return <TreeView style={[{flex: 1}, style && style]} {...rest} />
}
