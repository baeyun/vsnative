import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native'

import TabHeaders from './TabHeaders'

export default (props) => {
  return (
    <View style={styles.container}>
      <TabHeaders />
      
      {/* CODE EDITOR PREVIEW */}
      <Text
        selectable={true}
        // selectionColor="blue" // Android // @todo bridge to Windows
        style={styles.codeEditor}
      >
        <Text style={[styles.codeEditor, {color: "#f92672"}]} children="import" />
        {" "}
        {"React"}
        {" "}
        <Text style={[styles.codeEditor, {color: "#f92672"}]} children="from" />
        {" "}
        <Text style={[styles.codeEditor, {color: "#e6db74"}]} children="'react'" />
        {"\n"}
        <Text style={[styles.codeEditor, {color: "#f92672"}]} children="import" />
        {" "}
        {"{"}
        {"\n"}
        {"  "}
        {"StyleSheet,"}
        {"\n"}
        {"  "}
        {"Text,"}
        {"\n"}
        {"  "}
        {"View,"}
        {"\n"}
        {"  "}
        {"Image"}
        {"\n"}
        {"}"}
        {" "}
        <Text style={[styles.codeEditor, {color: "#f92672"}]} children="from" />
        {" "}
        <Text style={[styles.codeEditor, {color: "#e6db74"}]} children="'react-native'" />
        {"\n"}
        
        <View style={{backgroundColor: "#ddd", width: 2, height: 22}} />
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    //justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#1e1e1e'
  },
  codeEditor: {
    color: '#fff',
    fontWeight: "normal",
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: 0,
    padding: 15
  },
  instructions: {
    textAlign: "center",
    color: "#777",
    marginTop: 15
  }
})