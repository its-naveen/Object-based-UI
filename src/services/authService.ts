import axios from "axios";
// import { getConfig } from "../config";

// const API_URL = getConfig();

import { BASE_URL } from "../config";

// export function login(payload: { username: string, password: string}) {
//   const response = axios.post(`${BASE_URL}/auth/login`, payload, {
//     headers: {
//       'Content-Type': 'application/json',
//     }
//   });
//   return response; 
// }

export function login(payload: { email: string }) {
  const response = axios.post(`${BASE_URL}/api/login`, payload, {
    headers: {
      'Content-Type': 'application/json',
    }
  });
  return response; 
}

export function signup(payload: { email: string, username: string}) {
  const response = axios.post(`${BASE_URL}/api/signup`, payload, {
    headers: {
      'Content-Type': 'application/json',
    }
  });
  return response;
}
