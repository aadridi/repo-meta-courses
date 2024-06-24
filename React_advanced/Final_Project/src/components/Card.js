import { Box, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Card = ({ title, description, imageSrc }) => {
	// Implement the UI for the Card component according to the instructions.
	// You should be able to implement the component with the elements imported above.
	// Feel free to import other UI components from Chakra UI if you wish to.
	return (
		<>
			<Box>
				<Box bg='white' borderRadius='10px' spacing={10}>
					<Image src={imageSrc} borderRadius='10px' />
					<Heading color='black' as='h3' size='md' p='4'>
						{title}
					</Heading>
					<Text color='grey' p='4'>
						{description}
					</Text>
					<Text color='black' p='4'>
						See more <FontAwesomeIcon icon={faArrowRight} size='1x' />
					</Text>
				</Box>
			</Box>
		</>
	);
};

export default Card;
