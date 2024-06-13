import axios from "axios";
import { loadFromLocalStorage } from "../utils/localStorageUtils";
import { toast } from "sonner";
import Toast from "../components/Toast";
export const fetchDataApi = async (path, method, body = null) => {
  let user = loadFromLocalStorage("user");
  let api = axios.create({
    baseURL: "https://jobapp-backend-ptoc.onrender.com/api/v1",
    headers: {
      Authorization: `Bearer ${user.token}`,
      "Content-Type": "application/json",
    },
  });

  try {
    let response = await api[method](path, body);
    return { ok: true, data: response.data };
  } catch (error) {
    console.error("algo salio mal", error);
    return { ok: false, data: error };
  }
};
