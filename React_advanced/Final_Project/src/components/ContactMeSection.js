import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Heading, Input, Select, Textarea, VStack, FormHelperText } from '@chakra-ui/react';
import * as Yup from 'yup';
import FullScreenSection from './FullScreenSection';
import useSubmit from '../hooks/useSubmit';
import { useAlertContext } from '../context/alertContext';
import { Component } from 'react';

const LandingSection = () => {
	const { isLoading, response, submit } = useSubmit();
	const { onOpen, onClose, isOpen, type, message } = useAlertContext();

	const formik = useFormik({
		initialValues: {
			firstName: '',
			email: '',
			type: '',
			comment: '',
		},
		onSubmit: async (values, actions) => {
			const res = await submit('/submit', values);
			if (res?.type === 'success') {
				actions.resetForm();
			}
		},
		validationSchema: Yup.object({
			firstName: Yup.string().required('Required'),
			email: Yup.string().email('Invalid Email Address').required('Required'),
			type: Yup.string().optional(),
			comment: Yup.string().min(25, 'Must be at least 25 characters').required('Required'),
		}),
	});

	useEffect(() => {
		if (response) {
			onOpen(response.type, response.message);
		}
	}, [response, onOpen]);

	return (
		<FullScreenSection isDarkBackground backgroundColor='#512DA8' py={16} spacing={8}>
			<VStack w='1024px' p={32} alignItems='flex-start'>
				<Heading as='h1' id='contactme-section'>
					Contact me
				</Heading>
				<Box p={6} rounded='md' w='100%'>
					<form onSubmit={formik.handleSubmit}>
						<VStack spacing={4}>
							<FormControl isInvalid={formik.touched.firstName && !!formik.errors.firstName}>
								<FormLabel htmlFor='firstName'>Name</FormLabel>
								<Input id='firstName' name='firstName' value={formik.values.firstName} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Enter your name here' />
								<FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
							</FormControl>
							<FormControl isInvalid={formik.touched.email && !!formik.errors.email}>
								<FormLabel htmlFor='email'>Email Address</FormLabel>
								<Input id='email' name='email' type='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Enter your email address here' />
								<FormErrorMessage>{formik.errors.email}</FormErrorMessage>
							</FormControl>
							<FormControl>
								<FormLabel htmlFor='type'>Type of enquiry</FormLabel>
								<Select id='type' name='type' value={formik.values.type} onChange={formik.handleChange} onBlur={formik.handleBlur}>
									<option value='hireMe'>Freelance project proposal</option>
									<option value='openSource'>Open source consultancy session</option>
									<option value='other'>Other</option>
								</Select>
							</FormControl>
							<FormControl isInvalid={formik.touched.comment && !!formik.errors.comment}>
								<FormLabel htmlFor='comment'>Your message</FormLabel>
								<Textarea id='comment' name='comment' height={250} value={formik.values.comment} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Enter your message here' />
								<FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
							</FormControl>
							<Button type='submit' isLoading={isLoading || formik.isSubmitting} colorScheme='purple' width='full'>
								Submit
							</Button>
						</VStack>
					</form>
				</Box>
			</VStack>
		</FullScreenSection>
	);
};

export default LandingSection;
