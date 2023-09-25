/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Box, Heading, Center, Text } from '@chakra-ui/react';

function HomePage() {
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
				<Heading mb={4}>Enter into Student Info System</Heading>
				<Text fontSize='xl' mb={4}>
					Welcome to our student information system. Click the button below to
					enroll!
				</Text>
				<Link to='/enroll'>
					<Button colorScheme='whiteAlpha' size='lg'>
						Enroll Now!
					</Button>
				</Link>
			</Box>
		</Center>
	);
}

export default HomePage;
