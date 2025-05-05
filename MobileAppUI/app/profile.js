import { View, Text,StyleSheet,ScrollView } from 'react-native';
import React from 'react';
import Header from './screens/header.js';
export default function Profile() {
  return (
    <ScrollView style={styles.container}>
    
    <View>
      <Text>Profile Page</Text>
    </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
});