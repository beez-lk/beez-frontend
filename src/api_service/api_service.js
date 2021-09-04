import axios from "axios";
import { base_url } from "../config/config";
import store from "../store/store";
import _ from "lodash";

const actions = store.getActions();

const handleApiCall = async (method, url, body) => {
  const token = localStorage.getItem("sn_rest_access_token") || "";
  try {
    const response = await axios({
      baseURL: base_url,
      url: url,
      timeout: 10000,
      method: method,
      data: body,
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          if (error.response.data.data.message === "TokenExpiredError") {
            return await refresh(method, url, body);
          }
          break;
        default:
          break;
      }
    }
  }
};

export const loginCall = async (userName, password) => {
  const response = await handleApiCall("POST", "/auth/restaurant/login", {
    user_name: userName,
    password: password,
  });
  if (response.success) {
    localStorage.setItem("sn_rest_access_token", response.data.access_token);
    localStorage.setItem("sn_rest_refresh_token", response.data.refresh_token);
  }
  return response;
};

export const refresh = async (method, url, body) => {
  const refreshToken = localStorage.getItem("sn_rest_refresh_token");
  try {
    const response = await axios.post(`${base_url}/auth/restaurant/refresh`, {
      refresh_token: refreshToken,
    });
    if (response.data.success) {
      localStorage.setItem(
        "sn_rest_access_token",
        response.data.data.access_token
      );
      localStorage.setItem(
        "sn_rest_refresh_token",
        response.data.data.refresh_token
      );
      return await handleApiCall(method, url, body)
    }
  } catch (error) {}
};

export const getRestaurantCall = async () => {
  const response = await handleApiCall("GET", "/api/restaurant/me", null);
  if (response.success) {
    actions.setRestaurant(response.data);
  }
  return response;
};

export const getItemCategoriesCall = async () => {
  const response = await handleApiCall(
    "GET",
    "/api/restaurant/item-categories",
    null
  );
  if (response.success) {
    actions.setItemCategories(response.data);
    actions.setSelectedItemCategory(_.first(response.data));
  }
  return response;
};

export const setAdminPasswordCall = async (adminPassword) => {
  const response = await handleApiCall(
    "POST",
    "/api/restaurant/set_admin_password",
    {
      admin_password: adminPassword,
    }
  );
  if (response.success) {
    actions.setRestaurant(response.data);
  }
  return response;
};

export const createItemCategoryCall = async (data) => {
  const response = await handleApiCall(
    "POST",
    "/api/restaurant/item-categories",
    data
  );
  if (response.success) {
    actions.addItemCategory(response.data);
  }
  return response;
};

export const updateItemCategoryCall = async (data, id) => {
  const response = await handleApiCall(
    "PUT",
    `/api/restaurant/item-categories/${id}`,
    data
  );
  if (response.success) {
    actions.updateItemCategory(response.data);
  }
  return response;
};


export const createItemCall = async (data) => {
  const response = await handleApiCall(
    "POST",
    "/api/restaurant/items",
    data
  );
  if (response.success) {
    actions.addItem(response.data);
  }
  return response;
};

export const updateItemCall = async (data, id) => {
  const response = await handleApiCall(
    "PUT",
    `/api/restaurant/items/${id}`,
    data
  );
  if (response.success) {
    actions.updateItem(response.data);
  }
  return response;
};
