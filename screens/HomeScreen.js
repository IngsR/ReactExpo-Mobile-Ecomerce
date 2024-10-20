import React, { useRef, useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Animated,
  Linking,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import StarRating from "../components/StarRating";

const HomeScreen = ({ navigation }) => {
  const theme = useTheme();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [bannerIndex, setBannerIndex] = useState(0);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();

    const interval = setInterval(() => {
      setBannerIndex((prevIndex) => (prevIndex + 1) % 5);
    }, 3000);

    return () => clearInterval(interval);
  }, [fadeAnim]);

  const bigBanners = [
    require("../assets/banners/lazada.jpg"),
    require("../assets/banners/amazon.png"),
    require("../assets/banners/shopee.png"),
    require("../assets/banners/banner5.jpg"),
    require("../assets/banners/bukalapak.jpg"),
  ];

  const fashionPlaces = [
    {
      id: 1,
      image: require("../assets/banners/lazada.jpg"),
      rating: 4,
      name: "Lazada",
      url: "https://www.lazada.co.id",
    },
    {
      id: 2,
      image: require("../assets/banners/shopee.png"),
      rating: 5,
      name: "Shopee",
      url: "https://shopee.co.id",
    },
    {
      id: 3,
      image: require("../assets/banners/banner5.jpg"),
      rating: 5,
      name: "Blibli",
      url: "https://www.blibli.com",
    },
    {
      id: 4,
      image: require("../assets/banners/amazon.png"),
      rating: 4,
      name: "Amazon",
      url: "https://www.amazon.com",
    },
    {
      id: 5,
      image: require("../assets/banners/bukalapak.jpg"),
      rating: 5,
      name: "Bukalapak",
      url: "https://www.Bukalapak.com",
    },
  ];

  const openWebUrl = (url) => {
    Linking.openURL(url).catch((err) =>
      console.error("Failed opening web URL:", err)
    );
  };

  return (
    <Animated.ScrollView style={[styles.container, { opacity: fadeAnim }]}>
      <StatusBar barStyle={theme.dark ? "light-content" : "dark-content"} />

      <View style={styles.bigBannerContainer}>
        <Animated.Image
          source={bigBanners[bannerIndex]}
          resizeMode="contain"
          style={[styles.bigBannerImage, { opacity: fadeAnim }]}
        />
      </View>

      <Text style={[styles.sectionTitle, { textAlign: "center" }]}>
        Kategori
      </Text>
      <View style={styles.categoryContainer}>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() => navigation.navigate("HomePakaian")}
        >
          <View style={[styles.categoryIcon, { backgroundColor: "#0891b2" }]}>
            <Ionicons name="shirt" size={30} color="#FFFFFF" />
          </View>
          <Text style={[styles.categoryBtnTxt]}>Pakaian</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() => navigation.navigate("ScreensBuku")}
        >
          <View style={[styles.categoryIcon, { backgroundColor: "#119ebb" }]}>
            <Ionicons name="book-sharp" size={30} color="#FFFFFF" />
          </View>
          <Text style={[styles.categoryBtnTxt]}>Buku</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() => navigation.navigate("SoriesScreen")}
        >
          <View style={[styles.categoryIcon, { backgroundColor: "#11afb8" }]}>
            <MaterialCommunityIcons name="pokeball" size={30} color="#FFFFFF" />
          </View>
          <Text style={[styles.categoryBtnTxt]}>PokemonAPI</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() => navigation.navigate("KacamataScreen")}
        >
          <View style={[styles.categoryIcon, { backgroundColor: "#15c5ce" }]}>
            <MaterialCommunityIcons name="glasses" size={30} color="#FFFFFF" />
          </View>
          <Text style={[styles.categoryBtnTxt]}>Kacamata</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.fashionPlacesContainer}>
        <Text style={[styles.sectionTitle, { textAlign: "center" }]}>
          Promosi
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.fashionPlacesList}
        >
          {fashionPlaces.map((place) => (
            <TouchableOpacity
              key={place.id}
              style={styles.fashionPlaceItem}
              onPress={() => openWebUrl(place.url)}
            >
              <Image
                source={place.image}
                resizeMode="cover"
                style={styles.fashionPlaceImage}
              />
              <View style={styles.fashionPlaceInfo}>
                <Text style={[styles.fashionPlaceName]}>{place.name}</Text>
                <StarRating rating={place.rating} />
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.additionalImagesContainer}>
        <Text style={styles.sectionTitle}>Temukan Product Unggulan</Text>
        <TouchableOpacity
          style={styles.additionalImageWrapper}
          onPress={() => {}}
        >
          <Image
            source={require("../assets/banners/amazon.png")}
            resizeMode="cover"
            style={styles.additionalImage}
          />
          <View style={styles.additionalImageInfo}>
            <Text style={styles.additionalImageName}>Amazon</Text>
            <Text style={styles.additionalImageMessage}>
              Belanja nyaman, harga bersahabat.
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.additionalImageWrapper}
          onPress={() => {}}
        >
          <Image
            source={require("../assets/banners/shopee.png")}
            resizeMode="cover"
            style={styles.additionalImage}
          />
          <View style={styles.additionalImageInfo}>
            <Text style={styles.additionalImageName}>Shopee</Text>
            <Text style={styles.additionalImageMessage}>
              Temukan produk favoritmu di sini.
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.additionalImageWrapper}
          onPress={() => {}}
        >
          <Image
            source={require("../assets/banners/bukalapak.jpg")}
            resizeMode="cover"
            style={styles.additionalImage}
          />
          <View style={styles.additionalImageInfo}>
            <Text style={styles.additionalImageName}>Bukalapak</Text>
            <Text style={styles.additionalImageMessage}>
              Belanja online, mudah dan aman.
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  bigBannerContainer: {
    height: 200,
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  bigBannerImage: {
    width: "100%",
    height: "100%",
  },
  categoryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginTop: 10,
  },
  categoryBtn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    margin: 5,
    borderRadius: 10,
    backgroundColor: "#ddd",
  },
  categoryIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },
  categoryBtnTxt: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 5,
  },
  fashionPlacesContainer: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 10,
    marginBottom: 10,
    textAlign: "center",
  },
  fashionPlacesList: {
    paddingHorizontal: 10,
  },
  fashionPlaceItem: {
    width: 150,
    marginRight: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  fashionPlaceImage: {
    width: "100%",
    height: 100,
    borderRadius: 10,
  },
  fashionPlaceInfo: {
    padding: 5,
    backgroundColor: "rgba(0,0,0,0.5)",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  fashionPlaceName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
  },
  additionalImagesContainer: {
    flexDirection: "column",
    marginHorizontal: 10,
    marginTop: 50,
  },
  additionalImageWrapper: {
    position: "relative",
    marginBottom: 10,
  },
  additionalImage: {
    width: "100%",
    height: 300,
    marginTop: 50,
    borderRadius: 10,
  },
  additionalImageInfo: {
    position: "absolute",
    bottom: 10,
    left: 10,
    right: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
    borderRadius: 10,
  },
  additionalImageName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  additionalImageMessage: {
    fontSize: 14,
    color: "#fff",
    marginTop: 5,
  },
});

export default HomeScreen;
