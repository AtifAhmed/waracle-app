import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions/index";
import { uploadCatImageAsync, setFavouriteCatAsync, getUploadedCatImagesAsync, voteForCatAsync, getVotesAsync, getDataAsync, unFavouriteCatAsync } from "api/catApi";
import { history } from "utils/history";
import { ICat, ICatVotes } from "state/action-types";
import { toast } from "react-toastify";

export const getVotes = () => async (dispatch: Dispatch<Action>) => {
  let res: any;
  try {
    res = await getVotesAsync();
    if (!showErrors(res)) {
      const data: ICatVotes[] = res.data;

      dispatch({
        type: ActionType.SET_VOTES,
        votes: data,
      });
    }
  } catch (e: any) {
    toast.error(e);
  }
};
export const voteForCat = (imageId: string, value: number) => async (dispatch: Dispatch<Action>) => {
  let res: any;
  try {
    res = await voteForCatAsync(imageId, value);
    if (!showErrors(res)) {
      dispatch<any>(getVotes());
    }
  } catch (e: any) {
    toast.error(e);
  }
};

export const setFavouriteCat = (imageId: string, isFavourite: boolean) => async (dispatch: Dispatch<Action>) => {
  let res: any;
  try {
    res = await setFavouriteCatAsync(imageId);
    if (!showErrors(res)) {
      dispatch({
        type: ActionType.SET_FAVOURITE_CAT,
        imageId: imageId,
        favouriteId: res.data.id,
      });
    }
  } catch (e: any) {
    toast.error(e);
  }
};

export const setUnFavouriteCat = (favouriteId: number) => async (dispatch: Dispatch<Action>) => {
  let res: any;
  try {
    res = await unFavouriteCatAsync(favouriteId);
    if (!showErrors(res)) {
      dispatch({
        type: ActionType.SET_UNFAVOURITE_CAT,
        favouriteId: favouriteId,
      });
    }
  } catch (e: any) {
    toast.error(e);
  }
};

export const getUploadedCatImages = () => async (dispatch: Dispatch<Action>) => {
  let res: any;
  try {
    dispatch({
      type: ActionType.IS_LOADING,
      isLoading: true,
    });
    res = await getDataAsync();

    const catImages: ICat[] = res.catImages.data;
    const votes: ICatVotes[] = res.votes.data;

    dispatch({
      type: ActionType.SET_UPLOADED_CAT_IMAGES,
      cats: catImages,
    });
    dispatch({
      type: ActionType.SET_VOTES,
      votes: votes,
    });
  } catch (e: any) {
    toast.error(e);
  } finally {
    dispatch({
      type: ActionType.IS_LOADING,
      isLoading: false,
    });
  }
};

export const uploadCatImage = (catImageFile: FormData) => async (dispatch: Dispatch<Action>) => {
  let res: any;
  try {
    dispatch({
      type: ActionType.IS_LOADING,
      isLoading: true,
    });

    res = await uploadCatImageAsync(catImageFile);
    if (!showErrors(res)) {
      history.push("/");
    }
  } catch (e: any) {
    toast.error(e);
  } finally {
    dispatch({
      type: ActionType.IS_LOADING,
      isLoading: false,
    });
  }
};

export const setVotes = (votes: ICatVotes[]) => ({
  type: ActionType.SET_VOTES,
  votes: votes,
});
const showErrors = (response: any): boolean => {
  if (response && response.status && Math.floor(response.status / 100) === 2) {
    return false;
  }
  if (response && Math.floor(response.response.status) / 100 != 2) {
    toast.error(response.response.data.message);
    return true;
  }
  return false;
};
