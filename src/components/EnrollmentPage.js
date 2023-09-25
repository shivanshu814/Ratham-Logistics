/** @format */

import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { enrollStudent } from '../slices/enrollmentSlice';
import {
	VStack,
	Box,
	Text,
	Button,
	FormControl,
	FormLabel,
	Input,
	Select,
	Flex,
	Center,
} from '@chakra-ui/react';

function EnrollmentPage() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [step, setStep] = useState(0);
	const [messages, setMessages] = useState([]);
	const [name, setName] = useState('');
	const [age, setAge] = useState('');
	const [slot, setSlot] = useState('');
	const [date, setDate] = useState('');

	useEffect(() => {
		if (step === 0) {
			setTimeout(() => {
				setMessages((prev) => [
					...prev,
					'Bot: Hello, Welcome to student info system!',
				]);
				setStep(1);
			}, 3000);
		}
	}, [step]);

	const handleGotItClick = () => {
		setMessages((prev) => [...prev, 'User: Got it!']);
		setStep(2);
	};

	const handleDateSelect = (selectedDate) => {
		setDate(selectedDate);
		setMessages((prev) => [...prev, `User: ${selectedDate}`]);
		setStep(3);
	};

	const handleSlotSelect = (selectedSlot) => {
		setSlot(selectedSlot);
		setMessages((prev) => [...prev, `User: ${selectedSlot}`]);
		setStep(4);
	};

	const handleNameSubmit = (e) => {
		e.preventDefault();
		if (name.trim()) {
			setMessages((prev) => [...prev, `User: ${name}`]);
			setStep(5);
		}
	};

	const handleAgeSelect = (selectedAge) => {
		setAge(selectedAge);
		setMessages((prev) => [...prev, `User: ${selectedAge}`]);
		dispatch(enrollStudent({ name, age: selectedAge }));
		setTimeout(() => {
			setMessages((prev) => [
				...prev,
				'Bot: Thank you. In 5 seconds, bot will exit',
			]);
			let countdown = 5;
			const intervalId = setInterval(() => {
				countdown -= 1;
				if (countdown === 0) {
					clearInterval(intervalId);
					navigate('/confirmation');
				}
			}, 1000);
		}, 0);
	};

	return (
		<Flex direction='column' h='100vh' w='100%'>
			<VStack flex='1' overflowY='auto' spacing={4} p={4} align='stretch'>
				{messages.map((message, index) => (
					<Flex
						key={index}
						justifyContent={
							message.startsWith('User:') ? 'flex-end' : 'flex-start'
						}>
						<Box
							maxW='70%'
							p={3}
							borderRadius='lg'
							bg={message.startsWith('User:') ? 'teal.500' : 'gray.200'}
							color={message.startsWith('User:') ? 'white' : 'black'}>
							<Text>{message}</Text>
						</Box>
					</Flex>
				))}
			</VStack>
			<Box p={4} bg='gray.100'>
				{step === 1 && (
					<Center>
						<Button colorScheme='teal' onClick={handleGotItClick}>
							Got it!
						</Button>
					</Center>
				)}
				{step === 2 && (
					<Center>
						<Button
							colorScheme='teal'
							onClick={() => handleDateSelect('15 MAY, MON')}>
							15 MAY, MON
						</Button>
					</Center>
				)}
				{step === 3 && (
					<Center>
						<Button colorScheme='teal' onClick={() => handleSlotSelect('11AM')}>
							11AM
						</Button>
					</Center>
				)}
				{step === 4 && (
					<FormControl as='form' onSubmit={handleNameSubmit}>
						<FormLabel>Enter your Name:</FormLabel>
						<Input
							type='text'
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						<Center>
							<Button mt={2} colorScheme='teal' type='submit'>
								Submit
							</Button>
						</Center>
					</FormControl>
				)}
				{step === 5 && (
					<Select
						placeholder='Select Age'
						onChange={(e) => handleAgeSelect(e.target.value)}
						value={age}>
						{Array.from({ length: 23 }, (_, i) => i + 18).map((age) => (
							<option key={age} value={age}>
								{age}
							</option>
						))}
					</Select>
				)}
			</Box>
		</Flex>
	);
}

export default EnrollmentPage;
