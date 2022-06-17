
import { ADD_TO_FAVOURITE, SAVE_TO_STORE } from './home-actions-types';

export const saveCharector = (charector) => (
    {
        type: SAVE_TO_STORE,
        data: charector
    }
);

export const addToFavourite = (charector) => (
    {
        type: ADD_TO_FAVOURITE,
        data: charector
    }
);
