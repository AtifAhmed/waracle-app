import { ActionType } from "../action-types/index";
import { ICat, ICatVotes } from "state/action-types";

interface ISetFavouriteCat {
  type: ActionType.SET_FAVOURITE_CAT;
  imageId: string;
  favouriteId: number;
}

interface ISeUntFavouriteCat {
  type: ActionType.SET_UNFAVOURITE_CAT;
  favouriteId: number;
}

interface IIsLoading {
  type: ActionType.IS_LOADING;
  isLoading: boolean;
}

interface ISetUploadedCatImages {
  type: ActionType.SET_UPLOADED_CAT_IMAGES;
  cats: ICat[];
}
interface ISetCatVotes {
  type: ActionType.SET_VOTES;
  votes: ICatVotes[];
}
// interface IUploadCat {
//   type: ActionType.UPLOAD_CAT;
//   catImageFile: File;
// }
// interface IGetUploadedCatImages {
//   type: ActionType.GET_UPLOADED_CAT_IMAGES;
// }
export type Action = IIsLoading | ISetFavouriteCat | ISetUploadedCatImages | ISetUploadedCatImages | ISetCatVotes | ISeUntFavouriteCat;
