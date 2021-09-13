export enum ActionType {
  ADD_CAT_TO_LIST = "addCatToList",
  GET_UPLOADED_CAT_IMAGES = "getUploadedCatImages",
  SET_UPLOADED_CAT_IMAGES = "setUploadedCatImages",
  SET_FAVOURITE_CAT = "setFavouriteCat",
  SET_UNFAVOURITE_CAT = "setUnfavouriteCat",
  VOTE = "vote",
  UPLOAD_CAT = "uploadCat",
  IS_LOADING = "isLoading",
  SET_VOTES = "SET_VOTES",
}

export type ICat = {
  id: string;
  url: string;
  height: number;
  width: number;
  original_filename: string;

  isFavourite: boolean;
};

export type ICatVotes = {
  image_id: string;
  value: number;
};

export type IFavouriteCats = {
  imageId: string;
  favouriteId: number;
};

export type IUnFavouriteCats = {
  favouriteId: number;
};
