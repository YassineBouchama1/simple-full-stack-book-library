import axios from "axios";
  const apiKey = "5d4ddf6097msh911242527e98044p1d4398jsne1bf694d4335";

export const fetchByTitle = async (title) => {
  try {
    const response = await axios.get(
      "https://books-api7.p.rapidapi.com/books/find/title",
      {
        params: {
          title: title,
        },
        headers: {
          "X-RapidAPI-Key": apiKey,
          "X-RapidAPI-Host": "books-api7.p.rapidapi.com",
        },
      }
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};