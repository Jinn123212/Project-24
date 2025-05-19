import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Install this if needed

const bulkOptions = [
  { id: '1', type: 'Chicken Biryani', cost: 15000 },
  { id: '2', type: 'Mutton Biryani', cost: 25000 },
  { id: '3', type: 'Veg Biryani', cost: 10000 },
];

const costPerPerson = {
  'Chicken Biryani': 150,
  'Mutton Biryani': 250,
  'Veg Biryani': 100,
};

export default function BulkOrderScreen() {
  const [numPeople, setNumPeople] = useState('');
  const [selectedType, setSelectedType] = useState('Chicken Biryani');
  const [totalCost, setTotalCost] = useState(0);
  const [totalQty, setTotalQty] = useState(0);

  const calculateEstimate = () => {
    const people = parseInt(numPeople) || 0;
    const quantity = people * 0.25; // assume 250g per person = 0.25 kg
    const cost = (costPerPerson[selectedType] || 0) * people;
    setTotalQty(quantity);
    setTotalCost(cost);
  };

  return (
    <View style={styles.container}>

      {/* Bulk Order Options */}
      <Text style={styles.title}>Bulk Order Options</Text>
      <View style={styles.bulkContainer}>
        {bulkOptions.map((item) => (
          <View key={item.id} style={styles.bulkCard}>
            <Text style={styles.bulkType}>{item.type}</Text>
            <Text style={styles.bulkSubText}>For 100 People</Text>
            <Text style={styles.bulkPrice}>₹{item.cost.toLocaleString()}</Text>
          </View>
        ))}
      </View>

      {/* Calculate Custom Order */}
      <Text style={styles.title}>Calculate Custom Order</Text>
      <View style={styles.customCard}>
        <Text style={styles.label}>Number of People:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter number of people"
          keyboardType="numeric"
          value={numPeople}
          onChangeText={setNumPeople}
        />

        <Text style={styles.label}>Select Type:</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedType}
            onValueChange={(itemValue) => setSelectedType(itemValue)}
          >
            {Object.keys(costPerPerson).map((type) => (
              <Picker.Item key={type} label={type} value={type} />
            ))}
          </Picker>
        </View>

        <TouchableOpacity style={styles.calculateButton} onPress={calculateEstimate}>
          <Text style={styles.calculateButtonText}>Calculate</Text>
        </TouchableOpacity>

        {/* Estimated Result */}
        <View style={styles.estimateCard}>
          <Text style={styles.estimateText}>
            Total Quantity Required: {totalQty.toFixed(2)} kg
          </Text>
          <Text style={styles.estimateText}>
            Estimated Cost: ₹{totalCost.toLocaleString()}
          </Text>
        </View>
      </View>

      {/* Call for Queries Button */}
      <TouchableOpacity style={styles.queryButton}>
        <Text style={styles.queryButtonText}>📞 Call for Queries</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 12,
  },
  bulkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  bulkCard: {
    backgroundColor: '#fff3e6',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    width: '30%',
  },
  bulkType: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bulkSubText: {
    fontSize: 12,
    marginTop: 4,
    textAlign: 'center',
  },
  bulkPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ff6600',
    marginTop: 8,
  },
  customCard: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    marginBottom: 4,
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  pickerContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 12,
  },
  calculateButton: {
    backgroundColor: '#ff6600',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 16,
  },
  calculateButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  estimateCard: {
    backgroundColor: '#fff0e1',
    padding: 12,
    borderRadius: 8,
  },
  estimateText: {
    fontSize: 14,
    marginBottom: 4,
    color: '#333',
  },
  queryButton: {
    backgroundColor: '#ff6600',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  queryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
