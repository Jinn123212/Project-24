import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import foodImage from '../../assets/images/food.jpg';
import { Ionicons } from '@expo/vector-icons'; // Assuming using Expo

const HomeScreen = () => {
  return (
    <View style={styles.container}> 
      {/* Header */}
      <View style={styles.header}> 
        <TouchableOpacity>
          <Ionicons name="menu" size={24} color="black" />
        </TouchableOpacity>

        <View style={styles.deliverTo}>
          <Text style={styles.deliverToLabel}>DELIVER TO</Text>
          <View style={styles.locationRow}>
            <Text style={styles.location}>Halal Lab office</Text>
            <Ionicons name="chevron-down" size={20} color="black" />
          </View>
        </View>

        <TouchableOpacity style={styles.cartButton}>
          <Ionicons name="cart" size={24} color="black" />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>2</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Greeting */}
      <Text style={styles.greeting}>Hey Halal, Good Afternoon!</Text>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Ionicons name="search" size={20} color="gray" />
        <Text style={styles.searchText}>Search dishes, restaurants</Text>
      </View>

      {/* Categories */}
      <View style={styles.categoriesHeader}>
        <Text style={styles.sectionTitle}>All Categories</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categories}
      >
        <TouchableOpacity style={[styles.categoryPill, styles.selectedCategory]}>
        <ImageBackground
    source={foodImage} // Replace with your image pathProject-24\
    style={styles.categoryBackground}
    imageStyle={{ borderRadius: 20 }}
      >
          <Text style={styles.categoryText}>Food</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryPill}>
          <Text style={styles.categoryText}>Meat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryPill}>
          <Text style={styles.categoryText}>Vegetables</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Food Items */}
      <View style={styles.exploreHeader}>
        <Text style={styles.sectionTitle}>Explore Food</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.foodCard}>
          <View style={styles.foodImage} />
          <Text style={styles.foodName}>Biryani</Text>
          <Text style={styles.foodSubtitle}>Chicken - Riche - Wings</Text>
          <View style={styles.foodInfo}>
            <View style={styles.rating}>
              <Ionicons name="star" size={16} color="#FFD700" />
              <Text style={styles.ratingText}> 4.7</Text>
            </View>
            <View style={styles.deliveryInfo}>
              <Text style={styles.freeDelivery}>Free</Text>
              <Text style={styles.deliveryTime}>20 min</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

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
    marginTop: 40,
  },
  deliverTo: {
    flex: 1,
    marginLeft: 16,
  },
  deliverToLabel: {
    fontSize: 12,
    color: '#FF6B00',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  location: {
    fontSize: 16,
    fontWeight: '600',
  },
  cartButton: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    right: -8,
    top: -8,
    backgroundColor: '#FF6B00',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
  },
  greeting: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 12,
    borderRadius: 10,
    marginTop: 16,
  },
  searchText: {
    marginLeft: 8,
    color: 'gray',
  },
  categoriesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  seeAll: {
    color: '#FF6B00',
  },
  categories: {
    marginTop: 12,
  },
  categoryPill: {
    
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    marginRight: 12,
  },
  selectedCategory: {
    backgroundColor: '#FFE4CC',
  },
  categoryText: {
    fontSize: 14,
  },
  exploreHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
  },
  foodCard: {
    marginTop: 16,
  },
  foodImage: {
    height: 200,
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
  },
  foodName: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 8,
  },
  foodSubtitle: {
    color: 'gray',
    marginTop: 4,
  },
  foodInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 4,
  },
  deliveryInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  freeDelivery: {
    color: '#FF6B00',
    marginRight: 12,
  },
  deliveryTime: {
    color: 'gray',
  },
  categoryBackground: {
    width: 150,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
