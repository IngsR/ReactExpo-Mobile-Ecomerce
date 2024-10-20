import axios from "axios";

const BASE_URL = "https://openlibrary.org";

export const getBooks = async (
  subject = "programming",
  limit = 10,
  offset = 0
) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/subjects/${subject}.json?limit=${limit}&offset=${offset}`
    );
    return response.data.works;
  } catch (error) {
    console.error("Error fetching books:", error.message);
    throw error;
  }
};

export const getBookById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/works/${id}.json`);
    return response.data;
  } catch (error) {
    console.error("Error fetching book details:", error.message);
    throw error;
  }
};
