import React, { Component, Fragment } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'

import Icon from '../components/Icon'

import ProjectExplorer from './ProjectExplorer'
import Search from './Search'
import GitManager from './GitManager'
import Debug from './Debug'
import ExtensionsManager from './ExtensionsManager'
import ProjectTerminal from './ProjectTerminal'
import Settings from './Settings'

// @note should be load from store?
const activitybarTabs = [
  {name: 'Explorer', iconName: 'file-code'},
  {name: 'Search', iconName: 'search'},
  {name: 'GitManager', iconName: 'repo-forked'},
  {name: 'Debug', iconName: 'bug'},
  {name: 'Extensions', iconName: 'package'},
  {name: 'Terminal', iconName: 'terminal'}
]

export default class Sidebar extends Component<{}> {
  constructor(props) {
    super(props)

    this.state = {
      currentTab: 'Explorer'
    }
  }

  handleTabClick(tabName) {
    this.setState({currentTab: tabName})
  }

  render() {
    return (
      <Fragment>
        <View style={styles.activitybar}>
          <View style={styles.activitybarItems}>
            {
              activitybarTabs.map(
                (tab, i) => {
                  return (
                    <TouchableOpacity
                      key={'activitybarTab_' + i}
                      style={styles.activitybarIcon}
                      onPress={() => this.handleTabClick(tab.name)}>
                      <Icon name={tab.iconName} size={30} color="#fff" />
                    </TouchableOpacity>
                  )
                }
              )
            }
          </View>
  
          <TouchableOpacity
            style={[styles.activitybarIcon, {marginBottom: 15}]}
            onPress={() => this.handleTabClick('Settings')}>
            <Icon name='gear' size={30} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Display selected tab */}
        <ProjectExplorer display={this.state.currentTab === 'Explorer'} />
        <Search display={this.state.currentTab === 'Search'} />
        <GitManager display={this.state.currentTab === 'GitManager'} />
        <Debug display={this.state.currentTab === 'Debug'} />
        <ExtensionsManager display={this.state.currentTab === 'Extensions'} />
        <ProjectTerminal display={this.state.currentTab === 'Terminal'} />
        <Settings display={this.state.currentTab === 'Settings'} />
      </Fragment>
    )
  }
}

const styles = StyleSheet.create({
  activitybar: {
    flex: .47,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
    maxWidth: 48,
    minWidth: 48
  },
  activitybarItems: {
    flex: .35,
    justifyContent: 'space-between',
    marginTop: 15
  },
  activitybarIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48
  }
})
