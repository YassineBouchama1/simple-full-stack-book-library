import axios from "axios";
  const apiKey = "5d4ddf6097msh911242527e98044p1d4398jsne1bf694d4335";

export const fetchByAuthor =  async () => {
    try {
  
      const response = await axios.get(
        "https://books-api7.p.rapidapi.com/books/find/author",
        {
          params: {
            lname: "dickens",
            fname: "Charles",
          },
          headers: {
            "X-RapidAPI-Key": apiKey,
            "X-RapidAPI-Host": "books-api7.p.rapidapi.com",
          },
        }
      );
    return response.data;
    } catch (error) {
      console.error(error);
    }
  }