import { createSlice, PayloadAction } from "@reduxjs/toolkit";
//#region TYPE DEF
type Player = {
    key: string;
    score: number;
    displayName: string;
};
//#endregion

const players = createSlice({
    name: "players",
    initialState: [] as Player[],
    reducers: {
        addPlayer: (state, action: PayloadAction<{ key: string; displayName: string }>) => {
            const newPlayer: Player = {
                key: action.payload.key,
                score: 0,
                displayName: action.payload.displayName,
            };

            state.push(newPlayer);
        },
        removePlayer: (state, action: PayloadAction<{ key: string }>) => {
            const index = state.findIndex((player) => player.key === action.payload.key);
            state.splice(index, 1);
        },
        changeScore: (state, action: PayloadAction<{ key: string; amount: number }>) => {
            const index = state.findIndex((player) => player.key === action.payload.key);
            state[index].score += action.payload.amount;
        },
    },
});

export const { addPlayer, removePlayer, changeScore } = players.actions;
export default players.reducer;
