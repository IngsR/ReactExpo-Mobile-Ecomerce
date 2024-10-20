import axios from "axios";

const API_URL = "https://fakestoreapi.com";

const getBarang = async () => {
  return new Promise((resolve, reject) => {
    axios
      .get(API_URL + "/products")
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const getBarangbyId = async (id) => {
  return new Promise((resolve, reject) => {
    axios
      .get(API_URL + "/products/" + id)
      .then((res) => {
        resolve(res.data);
      })

      .then((err) => {
        reject(err);
      });
  });
};

export { getBarang, getBarangbyId };
