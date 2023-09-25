/** @format */

import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Heading, Text, Center, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

function ConfirmationPage() {
	const name = useSelector((state) => state.enrollment.name);
	const age = useSelector((state) => state.enrollment.age);
	const navigate = useNavigate(); // Initialize useNavigate hook

	const handleExitClick = () => {
		navigate('/'); // Navigate to home page on button click
	};

	return (
		<Center
			h='100vh'
			w='100%'
			flexDirection='column'
			bgGradient='linear(to-r, teal.500,green.500)'
			color='white'>
			<Box
				p={4}
				shadow='md'
				borderWidth='1px'
				borderRadius='lg'
				bg='rgba(255, 255, 255, 0.1)'>
				<Heading mb={4}>Confirmation Page</Heading>
				<Text fontSize='xl' mb={4}>
					Your name{' '}
					<Box as='span' fontWeight='bold'>
						{name}
					</Box>{' '}
					aged{' '}
					<Box as='span' fontWeight='bold'>
						{age}
					</Box>{' '}
					has been added to the student system. You may now exit.
				</Text>
				<Button colorScheme='whiteAlpha' size='lg' onClick={handleExitClick}>
					Exit
				</Button>{' '}
				{/* Attach click handler to button */}
			</Box>
		</Center>
	);
}

export default ConfirmationPage;
