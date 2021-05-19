import { configureStore } from '@reduxjs/toolkit'
import slice from './slice1';
export default configureStore({
    reducer: {
        todos: slice
    },
});