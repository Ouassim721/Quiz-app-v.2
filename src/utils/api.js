import axios from "axios";

const API_URL = `https://thingproxy.freeboard.io/fetch/https://api.jsonserve.com/Uw5CrX`;

export const fetchQuizData = async () => {
  try {
    const response = await axios.get(API_URL);
    
    // Log the response to check the structure
    console.log("API Response:", response);
    
    // Check if the response contains the 'questions' key
    if (response && response.data && response.data.questions) {
      return response.data.questions;
    } else {
      console.error("No questions found in the API response");
      return null;
    }
  } catch (error) {
    console.error("Error fetching quiz data:", error);
    return null;
  }
};


