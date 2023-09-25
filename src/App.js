/** @format */

import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider, CSSReset, Box, extendTheme } from '@chakra-ui/react';
import store from './store';
import HomePage from './components/HomePage';
import EnrollmentPage from './components/EnrollmentPage';
import ConfirmationPage from './components/ConfirmationPage';

// Optionally, you can define a theme to customize Chakra UI components globally
const theme = extendTheme({
	// Custom theme configurations go here
});

function App() {
	return (
		<Provider store={store}>
			<ChakraProvider theme={theme}>
				<CSSReset />
				<Box p={4}>
					<Router>
						<Routes>
							<Route path='/' element={<HomePage />} />
							<Route path='/enroll' element={<EnrollmentPage />} />
							<Route path='/confirmation' element={<ConfirmationPage />} />
						</Routes>
					</Router>
				</Box>
			</ChakraProvider>
		</Provider>
	);
}

export default App;
