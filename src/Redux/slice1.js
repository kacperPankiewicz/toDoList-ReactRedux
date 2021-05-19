import { createSlice } from '@reduxjs/toolkit';

const Slice1 = createSlice({
    name: "todo",
    initialState: [
    ],
    reducers: {
        addTodo: (state, action) => {
            const newZad = {
                id: Date.now(),
                prio: action.payload.prio,
                category: action.payload.category,
                activity: action.payload.activity,
                isDone: "false"

            };
            state.push(newZad);
        },
        toggleBut: (state, action) => {
            const id = state.findIndex((listEl) => listEl.id === action.payload.id
            );
            state[id].isDone = action.payload.isDone;
        },
        removeArg: (state, action) => {

            return state.filter(item => item.id !== action.payload.id)

        }
    },

});

export const { addTodo, toggleBut, removeArg } = Slice1.actions;

export default Slice1.reducer;