// import { key } from "./key";
import {
  mockMonthData,
  mockPOD
} from "/Users/imsteaky/Turing/mod4/WaWoVue/src/mockData.js";
// import { pod } from

// export const fetchPoD = async date => {
//   try {
//     const url = `https://api.nasa.gov/planetary/apod?api_key=${key}`;
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     throw new Error(error);
//   }
// };

export const fetchPics = () => {
  return mockMonthData;
};

export const fetchPOD = () => {
  return mockPOD;
};
