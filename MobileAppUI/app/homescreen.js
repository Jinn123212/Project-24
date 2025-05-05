import React from 'react';
import Header from './screens/header.js';
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
     
       <Header />

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search for hotels or dishes..."
          style={styles.searchInput}
        />
      </View>
        <View style={styles.subHeaders}>
          <Text style={styles.subHeadersTxt}>Locations</Text>
        </View>
       {/* Locations */}
       <View style={styles.categoriesContainer}>
        <TouchableOpacity style={styles.locationBox}>
          <Text style={styles.locationText}>Perungalathu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.locationBox}>
          <Text style={styles.locationText}>Vandalur</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.locationBox}>
          <Text style={styles.locationText}>Kolapakkam</Text>
        </TouchableOpacity>
      </View>

      {/* Categories */}

      <View style={styles.subHeaders}>
          <Text style={styles.subHeadersTxt}>Categories</Text>
        </View>
      <View style={styles.categoriesContainer}>
        <TouchableOpacity style={styles.categoryBox}>
          <Text style={styles.categoryText}>🍴 Food</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBox}>
          <Text style={styles.categoryText}>🥩 Meat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBox}>
          <Text style={styles.categoryText}>📦 Orders</Text>
        </TouchableOpacity>
      </View>

     

      {/* Best Offers */}
      <View style={styles.offerSection}>
        <Text style={styles.sectionTitle}>Best Offers</Text>

        <View style={styles.offerCard}>
          <View style={styles.imagePlaceholder}>
            <Text style={styles.imageText}>Image</Text>
          </View>
          <View style={styles.offerContent}>
            <Text style={styles.offerTitle}>Special Burger Combo</Text>
            <Text style={styles.offerSubtitle}>20% off on combo meals</Text>
            <Text style={styles.offerPrice}>$9.99</Text>
          </View>
        </View>

        <View style={styles.offerCard}>
          <View style={styles.imagePlaceholder}>
            <Text style={styles.imageText}>Image</Text>
          </View>
          <View style={styles.offerContent}>
            <Text style={styles.offerTitle}>Pizza Festival</Text>
            <Text style={styles.offerSubtitle}>Buy 1 Get 1 Free</Text>
            <Text style={styles.offerPrice}>$12.99</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 30,
  },
  subHeaders:{
    marginBottom:20,
    
  },
  subHeadersTxt:{
    fontSize: 20,
    fontWeight: 'bold',    
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF7F50',
  },
  profileIcon: {
    fontSize: 24,
  },
  searchContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 20,
  },
  searchInput: {
    fontSize: 16,
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  categoryBox: {
    backgroundColor: '#FFE4E1',
    padding: 12,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 4,
    alignItems: 'center',
    height:120,
    justifyContent:'center',
  },
  categoryText: {
    fontWeight: 'bold',
  },
  locationBox: {
    backgroundColor: '#E6F7FF',
    padding: 12,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 4,
    alignItems: 'center',
    height:120,
    justifyContent:'center',
  },
  locationText: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  offerSection: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  offerCard: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 10,
    marginBottom: 12,
    alignItems: 'center',
  },
  imagePlaceholder: {
    width: 60,
    height: 60,
    backgroundColor: '#ddd',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  imageText: {
    fontSize: 10,
    color: '#888',
  },
  offerContent: {
    flex: 1,
  },
  offerTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  offerSubtitle: {
    color: '#777',
    fontSize: 12,
  },
  offerPrice: {
    color: '#FF4500',
    fontWeight: 'bold',
    marginTop: 4,
  },
});
