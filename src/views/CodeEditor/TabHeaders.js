import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native'

import Icon from '../../components/Icon'

export default (props) => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      <View style={styles.tab}>
        <Text style={styles.tabTxt} children="ExtensionManager.js" />
      </View>
      <View style={[styles.tab, styles.selected]}>
        <Text style={styles.tabTxt} children="CodeEditor.js" />
        <Icon style={styles.tabIcon} name="x" size={15} color="#999999" />
      </View>
      <View style={styles.tab}>
        <Text style={styles.tabTxt} children="Debug.js" />
      </View>
      <View style={styles.tab}>
        <Text style={[styles.tabTxt, {fontStyle: "italic"}]} children="GitManager.js" />
      </View>
      <View style={styles.tab}>
        <Text style={styles.tabTxt} children="ProjectExplorer.js" />
      </View>
      <View style={styles.tab}>
        <Text style={styles.tabTxt} children="Terminal.js" />
      </View>
      <View style={styles.tab}>
        <Text style={styles.tabTxt} children="styles.css" />
      </View>
      <View style={styles.tab}>
        <Text style={styles.tabTxt} children="theme.json" />
      </View>
      <View style={styles.tab}>
        <Text style={styles.tabTxt} children=".gitignore" />
      </View>
      <View style={styles.tab}>
        <Text style={styles.tabTxt} children=".babelrc" />
      </View>
      <View style={styles.tab}>
        <Text style={styles.tabTxt} children="index.js" />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    flexDirection: "row",
    backgroundColor: "#111",
    maxHeight: 45
  },
  tab: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#2e2e2e",
    height: 45,
    alignItems: "center",
    paddingHorizontal: 20,
    borderRightWidth: 1,
    borderStyle: "solid",
    borderColor: "#1c1c1c"
  },
  selected: {
    backgroundColor: "#1e1e1e"
  },
  tabTxt: {
    color: "#ddd"
  },
  tabIcon: {
    paddingLeft: 15
  }
})