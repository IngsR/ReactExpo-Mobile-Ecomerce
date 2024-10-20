import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import axios from "axios";

const ScreensBuku = ({ navigation }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get(
        "https://www.googleapis.com/books/v1/volumes?q=science&maxResults=10"
      );
      setBooks(response.data.items);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching books:", error);
      setLoading(false);
    }
  };

  const renderItem = ({ item }) => {
    const bookInfo = item.volumeInfo;
    return (
      <TouchableOpacity
        style={styles.bookItem}
        onPress={() => navigation.navigate("BookDetail", { bookId: item.id })}
      >
        {bookInfo.imageLinks && (
          <Image
            style={styles.bookImage}
            source={{ uri: bookInfo.imageLinks.thumbnail }}
            resizeMode="cover"
          />
        )}
        <View style={styles.bookInfo}>
          <Text style={styles.bookTitle}>{bookInfo.title}</Text>
          {bookInfo.authors && (
            <Text style={styles.bookAuthor}>
              Author(s): {bookInfo.authors.join(", ")}
            </Text>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={books}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
  listContainer: {
    paddingVertical: 10,
  },
  bookItem: {
    flexDirection: "row",
    marginBottom: 10,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    backgroundColor: "#fafafa",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: "center",
  },
  bookImage: {
    width: 80,
    height: 100,
    borderRadius: 5,
    marginRight: 15,
  },
  bookInfo: {
    flex: 1,
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  bookAuthor: {
    fontStyle: "italic",
    color: "#777",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ScreensBuku;
