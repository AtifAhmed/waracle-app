import axiosInstance from "./axiosSetup";
import axios from "axios";

export const uploadCatImageAsync = async (formData: FormData) => {
  try {
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    const response = await axiosInstance.post(`images/upload`, formData, config);

    return response;
  } catch (error: any) {
    return error;
  }
};

export const getUploadedCatImagesAsync = async () => {
  try {
    //Could do paging
    const response = await axiosInstance.get(`images`, { params: { limit: 100 } });

    return response;
  } catch (error) {
    return error;
  }
};
export const setFavouriteCatAsync = async (imageId: string) => {
  try {
    const response = await axiosInstance.post(`favourites`, {
      image_id: imageId,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const unFavouriteCatAsync = async (favouriteId: number) => {
  try {
    const response = await axiosInstance.delete(`favourites/${favouriteId}`);
    return response;
  } catch (error) {
    return error;
  }
};

export const voteForCatAsync = async (imageId: string, value: number) => {
  try {
    return await axiosInstance.post(`votes`, {
      image_id: imageId,
      value: value,
    });
  } catch (error) {
    return error;
  }
};

export const getVotesAsync = async () => {
  try {
    const response = await axiosInstance.get(`votes`);
    return response;
  } catch (error) {
    return error;
  }
};

export const getDataAsync = async () => {
  const imagesRequest = axiosInstance.get(`images`, { params: { limit: 10 } });
  const votesRequest = axiosInstance.get(`votes`);

  return axios
    .all([imagesRequest, votesRequest])
    .then(
      axios.spread((...responses: any) => {
        const catImages = responses[0];
        const votes = responses[1];
        return { catImages, votes };
      })
    )
    .catch((errors: any) => {
      return errors;
    });
};
