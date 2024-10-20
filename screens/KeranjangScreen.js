import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const sampleCart = [
  {
    id: 1,
    title: "Sepatu",
    price: 1200000,
    image: require("../assets/banners/sepatu.jpg"),
    quantity: 1,
  },
  {
    id: 2,
    title: "Tas Ransel",
    price: 500000,
    image: require("../assets/banners/tas.jpg"),
    quantity: 1,
  },
  {
    id: 3,
    title: "Baju",
    price: 300000,
    image: require("../assets/banners/baju.jpg"),
    quantity: 1,
  },
  {
    id: 4,
    title: "Topi Baseball",
    price: 150000,
    image: require("../assets/banners/topi.jpg"),
    quantity: 1,
  },
  {
    id: 5,
    title: "Jam Tangan",
    price: 800000,
    image: require("../assets/banners/jam.jpg"),
    quantity: 1,
  },
];

function KeranjangScreen({ cart = sampleCart }) {
  const [cartItems, setCartItems] = useState(cart);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemPrice}>Rp {item.price.toLocaleString()}</Text>
      </View>
      <View style={styles.quantityContainer}>
        <TouchableOpacity
          style={styles.quantityButton}
          onPress={() => handleQuantityChange(item.id, -1)}
        >
          <MaterialCommunityIcons name="minus" size={24} color="#3498db" />
        </TouchableOpacity>
        <Text style={styles.quantity}>{item.quantity}</Text>
        <TouchableOpacity
          style={styles.quantityButton}
          onPress={() => handleQuantityChange(item.id, 1)}
        >
          <MaterialCommunityIcons name="plus" size={24} color="#3498db" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => handleDeleteItem(item.id)}
        style={styles.deleteButton}
      >
        <MaterialCommunityIcons name="delete" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );

  const handleDeleteItem = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  const handleQuantityChange = (itemId, change) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          quantity: Math.max(1, item.quantity + change),
        };
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  const handleCheckOut = () => {
    console.log("Proceed to check out");
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const tax = totalPrice * 0.02;

  const totalPriceWithTax = totalPrice + tax;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Keranjang</Text>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}
        contentContainerStyle={cartItems.length === 0 && styles.emptyCart}
        ListEmptyComponent={
          <Text style={styles.emptyMessage}>Keranjang Anda kosong</Text>
        }
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total Belanja:</Text>
        <Text style={styles.totalAmount}>Rp {totalPrice.toLocaleString()}</Text>
      </View>
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Pajak (2%):</Text>
        <Text style={styles.totalAmount}>Rp {tax.toLocaleString()}</Text>
      </View>
      <View style={[styles.totalContainer, styles.totalWithTax]}>
        <Text style={styles.totalText}>Total Belanja + Pajak:</Text>
        <Text style={[styles.totalAmount, styles.totalAmountWithTax]}>
          Rp {totalPriceWithTax.toLocaleString()}
        </Text>
      </View>
      <View style={styles.freeShippingContainer}>
        <Text style={styles.freeShippingText}>Gratis Ongkir!</Text>
        <Text style={styles.freeShippingInfo}>
          Nikmati pengiriman gratis untuk pembelian di atas Rp 1.000.000
        </Text>
      </View>
      <TouchableOpacity onPress={handleCheckOut} style={styles.checkoutButton}>
        <Text style={styles.checkoutText}>Check Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f8",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#2c3e50",
  },
  list: {
    width: "100%",
  },
  itemContainer: {
    backgroundColor: "#FFF",
    marginBottom: 16,
    padding: 16,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16,
  },
  itemDetails: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
    color: "#34495e",
  },
  itemPrice: {
    fontSize: 16,
    color: "#7f8c8d",
    fontWeight: "500",
  },
  deleteButton: {
    padding: 8,
  },
  checkoutButton: {
    backgroundColor: "#3498db",
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  checkoutText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  emptyCart: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyMessage: {
    fontSize: 18,
    color: "#95a5a6",
    textAlign: "center",
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
  },
  totalText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#34495e",
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: "600",
    color: "#3498db",
  },
  totalAmountWithTax: {
    color: "#e74c3c",
  },
  totalWithTax: {
    borderTopWidth: 1,
    borderTopColor: "#bdc3c7",
    paddingTop: 8,
  },
  freeShippingContainer: {
    backgroundColor: "#2ecc71",
    padding: 16,
    borderRadius: 12,
    marginTop: 20,
  },
  freeShippingText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
    textAlign: "center",
  },
  freeShippingInfo: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityButton: {
    padding: 8,
  },
  quantity: {
    fontSize: 18,
    fontWeight: "600",
    marginHorizontal: 10,
  },
});

export default KeranjangScreen;
