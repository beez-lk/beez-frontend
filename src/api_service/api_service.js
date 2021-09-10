import axios from "axios";
import { base_url } from "../config/config";

const handleApiCall = async (method, url, body) => {
  const token = localStorage.getItem("beeez_access_token") || "";
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
      if (error.response.data.message === "Validation Errors") {
        global.showAlert(
          "Sorry, There are some validation errors!",
          error.response.data.data[0].message
        );
        throw error;
      }
      return error.response.data;
    }
    global.showAlert("Something went wrong", "Please try again!");
    throw error;
  }
};

export const loginCall = async (email, password) => {
  const response = await handleApiCall("POST", "/auth/sign_in", {
    email: email,
    password: password,
  });
  if (response.success) {
    localStorage.setItem("beeez_access_token", response.data.access_token);
  }
  return response;
};

export const signUpCall = async (email, name) => {
  const response = await handleApiCall("POST", "/auth/signup", {
    email: email,
    name: name,
  });
  return response;
};

export const verificationCall = async (verificationCode) => {
  const response = await handleApiCall("POST", "/auth/verify_email", {
    verification_code: verificationCode,
  });
  return response;
};

export const setPasswordCall = async (verificationCode, password) => {
  const response = await handleApiCall("POST", "/auth/set_password", {
    verification_code: verificationCode,
    password: password,
  });
  if (response.success) {
    localStorage.setItem("beeez_access_token", response.data.access_token);
  }
  return response;
};

export const getAuthUserCall = async () => {
  const response = await handleApiCall("GET", "/api/users/me", null);
  return response;
};
