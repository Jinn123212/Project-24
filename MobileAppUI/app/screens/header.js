import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const Header = () => {
  const router = useRouter();

  return (
    <LinearGradient
      colors={['#f5f7fa', '#c3cfe2']} // light elegant gradient
      style={styles.headerContainer}
    >
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.logoText}>Chennai Al Taj</Text>
          <View style={styles.addressWrapper}>
            <View style={styles.addressContainer}>
              <Feather name="home" size={14} color="#555" />
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={styles.addressText}
              >
                No.12, GST Road, Near Airport, Chennai, Tamil Nadu, India
              </Text>
            </View>
            <TouchableOpacity onPress={() => router.push('/address')}>
              <Feather name="chevron-down" size={16} color="#555" />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity onPress={() => router.push('/profile')}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' }}
            style={styles.profileImage}
          />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 30,
    paddingBottom: 16,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
    paddingRight: 8,
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
  },
  addressWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexShrink: 1,
    marginRight: 4,
  },
  addressText: {
    fontSize: 12,
    color: '#555',
    marginLeft: 4,
    flexShrink: 1,
  },
  profileImage: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
});
