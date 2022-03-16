import { configureStore } from '@reduxjs/toolkit';
import application from '../reducers/application';

export default configureStore({
    reducer: {
        application
    }
});
