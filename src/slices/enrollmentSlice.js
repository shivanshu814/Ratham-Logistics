/** @format */

import { createSlice } from '@reduxjs/toolkit';

export const enrollmentSlice = createSlice({
	name: 'enrollment',
	initialState: {
		name: '',
		age: '',
		students: [],
	},
	reducers: {
		enrollStudent: (state, action) => {
			state.name = action.payload.name;
			state.age = action.payload.age;
			state.students.push(action.payload);
		},
	},
});

export const { enrollStudent } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;
