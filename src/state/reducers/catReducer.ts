import { ActionType, ICat, ICatVotes, IFavouriteCats } from "../action-types/index";
import { Action } from "../actions";

type IDefaultState = {
  isLoading: boolean;
  cats: ICat[];
  votes: ICatVotes[];
  favouriteCatImages: IFavouriteCats[];
};
const defaultState: IDefaultState = {
  isLoading: false,
  cats: [],
  votes: [],
  favouriteCatImages: [],
};

const catReducer = (state = defaultState, action: Action): IDefaultState => {
  switch (action.type) {
    case ActionType.IS_LOADING:
      return { ...state, isLoading: action.isLoading };
    case ActionType.SET_UPLOADED_CAT_IMAGES:
      return { ...state, cats: action.cats };
    case ActionType.SET_VOTES:
      return { ...state, votes: action.votes };
    case ActionType.SET_FAVOURITE_CAT:
      let selectedImage = state.favouriteCatImages.filter((x) => x.imageId !== action.imageId);
      selectedImage.push({ imageId: action.imageId, favouriteId: action.favouriteId });
      return { ...state, favouriteCatImages: selectedImage };
    case ActionType.SET_UNFAVOURITE_CAT:
      let images = state.favouriteCatImages.filter((x) => x.favouriteId !== action.favouriteId);
      return { ...state, favouriteCatImages: [...images] };

    default:
      return state;
  }
};

export default catReducer;
