/** @format */

import { configureStore } from '@reduxjs/toolkit';
import enrollmentReducer from './slices/enrollmentSlice';

export default configureStore({
	reducer: {
		enrollment: enrollmentReducer,
	},
});
