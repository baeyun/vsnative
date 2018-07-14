import PropTypes from 'prop-types';
import { requireNativeComponent, ViewPropTypes } from 'react-native';

var iface = {
  name: 'MenuButton',
  propTypes: {
    content: PropTypes.string,
    ...ViewPropTypes // include the default view properties
  },
};

module.exports = requireNativeComponent('VSNativeMenuButton', iface);