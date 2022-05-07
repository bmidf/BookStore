import { createStore } from 'redux';
import reducer from "../service/reducer";

export const store = createStore(
    reducer
 );