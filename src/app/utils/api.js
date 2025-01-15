import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

const api = axios.create({
  baseURL: BASE_URL,
});

export async function fetchPosts() {
  try {
    const { data } = await api.get("/posts");
    return data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw new Error("Failed to fetch posts");
  }
}

export async function fetchUsers() {
  try {
    const { data } = await api.get("/users");
    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw new Error("Failed to fetch users");
  }
}

export async function fetchUserDetails(id) {
  try {
    const { data } = await api.get(`/users/${id}`);
    return data;
  } catch (error) {
    console.error(`Error fetching user details for ID ${id}:`, error);
    throw new Error("Failed to fetch user details");
  }
}

export default api;
