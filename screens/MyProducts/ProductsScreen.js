import React, { useEffect, useState } from "react";
import {
  FlatList,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { getBarang } from "../services/BarangServices";

function ProductsScreen() {
  const [barang, setBarang] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBarang();
        setBarang(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (item) => {
    Alert.alert("Sukses", "Produk berhasil ditambahkan ke keranjang!");
  };

  return (
    <View
      style={{
        backgroundColor: "#dfe6ec",
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 30,
      }}
    >
      <FlatList
        data={barang}
        renderItem={({ item }) => (
          <View
            key={item.id}
            style={{
              backgroundColor: "#FFF",
              marginBottom: 32,
              padding: 12,
              borderRadius: 10,
            }}
          >
            <AntDesign name="hearto" size={24} color="#71acf5" />
            <Image
              style={{
                width: "100%",
                height: 250,
                resizeMode: "contain",
                marginBottom: 12,
              }}
              source={{ uri: item.image }}
            />
            <Text style={{ fontSize: 16, fontWeight: "600", color: "#797979" }}>
              {item.title}
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "300",
                marginTop: 8,
                color: "#797979",
              }}
            >
              {item.category.toUpperCase()}
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 8,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <AntDesign name="star" size={20} color="#71acf5" />
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "600",
                    color: "#797979",
                    marginLeft: 4,
                  }}
                >
                  {item.rating.rate}
                </Text>
              </View>
              <Text
                style={{ fontSize: 16, fontWeight: "600", color: "#71acf5" }}
              >
                {"$" + item.price}
              </Text>
            </View>
            <TouchableOpacity
              style={{
                padding: 8,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 2,
                borderColor: "#71acf5",
                marginTop: 12,
                borderRadius: 10,
              }}
              onPress={() => handleAddToCart(item)} 
            >
              <Text
                style={{ fontSize: 14, fontWeight: "600", color: "#71acf5" }}
              >
                Tambahkan ke Keranjang
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

export default ProductsScreen;
