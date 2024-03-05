import axios from "axios";

export const DataFetcher = async (formData = {}, setDataResponse) => {
  await axios
    .get("http://localhost:8000/api/itinary/user", formData, {
      headers: {
        "Content-Type": "application/ld+json",
        Accept: "application/ld+json",
      },
    })
    .then((response) => {
      console.log(response);

    })
    .catch((error) => {
      console.error("Erreur lors de la requête :", error);
    });
};
export const login = async (credentials) => {
  console.log(credentials);
  try {
    const response = await axios.post("http://localhost:8000/auth", credentials, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/ld+json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Erreur lors de la connexion :", error);
  }
};
export const register = async (userData, setResponseData) => {
  try {
    const response = await axios.post("http://localhost:8000/api/register", userData, {
      headers: {
        "Content-Type": "application/ld+json",
      },
    });
    console.log("Réponse de l'inscription:", response);
    setResponseData(response.data);
  } catch (error) {
    console.error("Erreur lors de l'inscription :", error.response ? error.response.data : error.message);
  }
};
// export const createitinary = async (setDataResponse) => {
//   await axios

//     .post("http://localhost:8000/api/itinary/publication", {
//       headers: {
//         "Content- Type": "application/ld+json",
//       },
//     })
//     .then((response) => {
//       console.log(response);
//       setDataResponse(response.data);
//     })
//     .catch((error) => {
//       console.error("Erreur lors de la requête :", error);
//     });
// };


export const createitinary = async (city, dates, setDataResponse) => {
  try {
    const response = await axios.post("http://localhost:8000/api/itinary/publication", {
      city: city,
      startDate: dates.startDate,
      endDate: dates.endDate,
    }, {
      headers: {
        "Content-Type": "application/ld+json", // Correct the typo here
      },
    });
    console.log(response);
    setDataResponse(response.data);
  } catch (error) {
    console.error("Erreur lors de la requête :", error);
  }
};


export default DataFetcher;
