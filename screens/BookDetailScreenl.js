import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import axios from "axios";

const BookDetailScreen = ({ route }) => {
  const { bookId } = route.params;
  const [bookDetails, setBookDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookDetails();
  }, []);

  const fetchBookDetails = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes/${bookId}`
      );
      setBookDetails(response.data.volumeInfo);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching book details:", error);
      setLoading(false);
    }
  };

  const addToCart = () => {
    Alert.alert("Sukses", "Buku telah ditambahkan ke keranjang!");
  };

  if (loading) {
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {bookDetails && (
        <View style={styles.bookContainer}>
          {bookDetails.imageLinks && (
            <Image
              source={{ uri: bookDetails.imageLinks.thumbnail }}
              style={styles.bookImage}
              resizeMode="contain"
            />
          )}
          <View style={styles.bookInfo}>
            <Text style={styles.bookTitle}>{bookDetails.title}</Text>
            {bookDetails.authors && (
              <Text style={styles.bookAuthors}>
                Penulis: {bookDetails.authors.join(", ")}
              </Text>
            )}
            {bookDetails.publisher && (
              <Text style={styles.bookPublisher}>
                Penerbit: {bookDetails.publisher}
              </Text>
            )}
            {bookDetails.publishedDate && (
              <Text style={styles.bookPublishedDate}>
                Tanggal Terbit: {bookDetails.publishedDate}
              </Text>
            )}
            {bookDetails.description && (
              <Text style={styles.bookDescription}>
                Deskripsi: {bookDetails.description}
              </Text>
            )}
            <TouchableOpacity
              style={styles.addToCartButton}
              onPress={addToCart}
            >
              <Text style={styles.addToCartButtonText}>
                Tambahkan ke Keranjang
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bookContainer: {
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
  },
  bookImage: {
    width: 120,
    height: 180,
    marginRight: 20,
    borderRadius: 10,
  },
  bookInfo: {
    flex: 1,
  },
  bookTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "left",
  },
  bookAuthors: {
    fontSize: 18,
    color: "#888",
    marginBottom: 10,
    textAlign: "left",
  },
  bookPublisher: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "left",
  },
  bookPublishedDate: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "left",
  },
  bookDescription: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
    textAlign: "left",
  },
  addToCartButton: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: "flex-start",
  },
  addToCartButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default BookDetailScreen;
