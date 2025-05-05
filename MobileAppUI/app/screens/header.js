// components/Header.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

const Header = () => {
const router = useRouter();
  return (
    <View style={styles.header}>
      <Text style={styles.logoText}>FoodieHub</Text>
      <TouchableOpacity onPress={() => router.push('../profile')}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' }} // sample profile icon URL
          style={styles.profileImage}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 30,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF7F50',
  },
  profileImage: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
});
