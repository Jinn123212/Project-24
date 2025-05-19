import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';
import React, { useState } from 'react';

const categories = ['Biryani', 'Fast Food', 'Chat Items', 'Veg Dishes', 'Non-Veg Dishes'];

const menuItems = [
  {
    id: '1',
    name: 'Chicken Biryani',
    description: 'Served with raita',
    price: 12.99,
    image: '/assets/images/VegBiryani.jpg', // placeholder, you can add URLs later
  },
  {
    id: '2',
    name: 'Butter Naan',
    description: 'Freshly baked',
    price: 2.99,
    image: '/assets/images/butter-naan.jpg', // placeholder
  },
];

export default function HomeScreen() {
  const [cart, setCart] = useState({});

  const toggleCart = (itemId) => {
    setCart((prevCart) => ({
      ...prevCart,
      [itemId]: prevCart[itemId] ? { ...prevCart[itemId] } : { quantity: 1 },
    }));
  };

  const increaseQuantity = (itemId) => {
    setCart((prevCart) => ({
      ...prevCart,
      [itemId]: {
        ...prevCart[itemId],
        quantity: prevCart[itemId].quantity + 1,
      },
    }));
  };

  const decreaseQuantity = (itemId) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      const newQuantity = updatedCart[itemId].quantity - 1;

      if (newQuantity <= 0) {
        delete updatedCart[itemId]; // Remove item if quantity is 0 or less
      } else {
        updatedCart[itemId].quantity = newQuantity; // Decrease quantity if it's still greater than 0
      }

      return updatedCart;
    });
  };

  const renderItem = ({ item }) => {
    const cartItem = cart[item.id];

    return (
      <View style={styles.menuItem}>
        <View style={styles.menuImagePlaceholder}>
          <Image source={{ uri: item.image }} style={styles.menuImage} />
        </View>
        <View style={styles.menuContent}>
          <Text style={styles.menuTitle}>{item.name}</Text>
          <Text style={styles.menuDesc}>{item.description}</Text>
          <Text style={styles.menuPrice}>${item.price.toFixed(2)}</Text>
        </View>
        <View style={styles.buttonContainer}>
          {!cartItem ? (
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => toggleCart(item.id)}
            >
              <Text style={styles.addButtonText}>Add to Cart</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.quantityContainer}>
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={() => decreaseQuantity(item.id)}
              >
                <Text style={styles.buttonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{cartItem.quantity}</Text>
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={() => increaseQuantity(item.id)}
              >
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <TextInput placeholder="Search for menu items..." style={styles.searchBar} />

      {/* Explore Categories */}
      <Text style={styles.sectionTitle}>Explore Categories</Text>
      <View style={styles.categoriesContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity key={index} style={styles.categoryButton}>
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Menu Items */}
      <Text style={styles.sectionTitle}>Menu Items</Text>
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  searchBar: {
    height: 40,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 20,
  },
  categoryButton: {
    // backgroundColor: '#FFE4C4',
    backgroundColor: '#DCFCE7',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
  },
  categoryText: {
    fontSize: 14,
    color: '#333',
  },
  menuItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    alignItems: 'center',
    elevation: 2, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  menuImagePlaceholder: {
    width: 60,
    height: 60,
    borderRadius: 10,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  menuContent: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  menuDesc: {
    fontSize: 12,
    color: 'gray',
    marginBottom: 4,
  },
  menuPrice: {
    fontSize: 14,
    color: '#16A34A',
    fontWeight: 'bold',
  },
  buttonContainer: {
    alignItems: 'center',
  },
  addButton: {
    // backgroundColor: '#FF7F50',
    backgroundColor: '#16A34A',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginLeft: 8,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: '#16A34A',
    padding: 10,
    borderRadius: 5,
  },
  quantityText: {
    fontSize: 18,
    marginHorizontal: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  menuImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 12,
    backgroundColor: '#eee',
  },
});
