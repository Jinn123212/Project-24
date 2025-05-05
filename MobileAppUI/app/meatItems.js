import React from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

const specialOffers = [
  { id: '1', title: '30% OFF', subtitle: 'On All Chicken Items' },
  { id: '2', title: '20% OFF', subtitle: 'On Premium Mutton' },
];

const menuItems = [
  {
    id: '1',
    name: 'Fresh Chicken',
    description: 'Farm fresh chicken',
    price: 5.99,
    image: 'https://via.placeholder.com/60', // Replace with real images
  },
  {
    id: '2',
    name: 'Fresh Mutton',
    description: 'Premium quality mutton',
    price: 12.99,
    image: 'https://via.placeholder.com/60',
  },
  {
    id: '3',
    name: 'Chicken Breast',
    description: 'Boneless chicken breast',
    price: 7.99,
    image: 'https://via.placeholder.com/60',
  },
  {
    id: '4',
    name: 'Mutton Chops',
    description: 'Premium mutton chops',
    price: 15.99,
    image: 'https://via.placeholder.com/60',
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      
      {/* Search Bar */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search for menu items..."
        placeholderTextColor="#999"
      />

      {/* Today's Special Offers */}
      <Text style={styles.sectionTitle}>Today's Special Offers</Text>
      <View style={styles.offersContainer}>
        {specialOffers.map((offer) => (
          <View key={offer.id} style={styles.offerCard}>
            <Text style={styles.offerTitle}>{offer.title}</Text>
            <Text style={styles.offerSubtitle}>{offer.subtitle}</Text>
          </View>
        ))}
      </View>

      {/* Available Meat Options */}
      <Text style={styles.sectionTitle}>Available Meat Options</Text>
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Image source={{ uri: item.image }} style={styles.menuImage} />
            <View style={styles.menuTextContainer}>
              <Text style={styles.menuName}>{item.name}</Text>
              <Text style={styles.menuDescription}>{item.description}</Text>
              <Text style={styles.menuPrice}>${item.price.toFixed(2)}/kg</Text>
            </View>
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  searchInput: {
    backgroundColor: '#f1f1f1',
    padding: 10,
    borderRadius: 10,
    marginBottom: 16,
    color: '#000',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  offersContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 16,
  },
  offerCard: {
    backgroundColor: '#ffe5b4',
    padding: 12,
    borderRadius: 10,
    flex: 1,
  },
  offerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ff6600',
  },
  offerSubtitle: {
    fontSize: 12,
    marginTop: 4,
    color: '#333',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fafafa',
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  menuImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 12,
    backgroundColor: '#eee',
  },
  menuTextContainer: {
    flex: 1,
  },
  menuName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  menuDescription: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  menuPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ff6600',
    marginTop: 4,
  },
  addButton: {
    backgroundColor: '#ff6600',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 12,
  },
});
