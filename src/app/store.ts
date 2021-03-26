import { configureStore } from "@reduxjs/toolkit";
import players from "./playerSlice";


const store = configureStore({
    reducer: {
        players
    }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;