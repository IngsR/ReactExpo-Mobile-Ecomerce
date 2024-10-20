import React, { useState, useEffect } from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { getBarangById } from "../services/BarangServices";

const ProductIdScreen = ({ route, navigation }) => {
  const { barangId } = route.params;
  const [barang, setBarang] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBarangById(barangId);
        setBarang(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [barangId]);

  return (
    <View style={styles.container}>
      {barang && (
        <View style={styles.productContainer}>
          <Text style={styles.title}>{barang.title}</Text>
          <Text style={styles.category}>
            Kategori: {barang.category.toUpperCase()}
          </Text>
          <Image style={styles.image} source={{ uri: barang.image }} />
          <Text style={styles.description}>{barang.description}</Text>
          <View style={styles.ratingContainer}>
            <AntDesign name="star" size={24} color="#71acf5" />
            <Text style={styles.rating}>{barang.rating.rate}</Text>
          </View>
          <Text style={styles.price}>{"$" + barang.price.toFixed(2)}</Text>
          <TouchableOpacity
            style={styles.buyButton}
            onPress={() => alert("Fitur pembelian belum diimplementasikan.")}
          >
            <Text style={styles.buyButtonText}>Beli Sekarang</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dfe6ec",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  productContainer: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 10,
  },
  category: {
    fontSize: 16,
    fontWeight: "600",
    color: "#888",
    textAlign: "center",
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    fontWeight: "400",
    color: "#555",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 20,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  rating: {
    fontSize: 16,
    fontWeight: "600",
    color: "#71acf5",
    marginLeft: 8,
  },
  price: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#71acf5",
    textAlign: "center",
    marginTop: 16,
  },
  buyButton: {
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#71acf5",
    borderWidth: 2,
    borderColor: "#71acf5",
    marginTop: 20,
    borderRadius: 10,
  },
  buyButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFF",
  },
});

export default ProductIdScreen;
