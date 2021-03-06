import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Frases from './components/Frases';
import Spinner from './components/Spinner';

// Styled Componenets
const Contenedor = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 5rem;
`;

const Boton = styled.button`
	background: -webkit-linear-gradient( top left, #007D35 0%, #007D35 40%, #0F574E 100% );
	background-size: 300px;
	border: 2px solid black;
	color: #FFFFFF;
	font-family: Arial, Helvetica, sans-serif;
	font-size: 2rem;
	margin-top: 3rem;
	padding: 1rem 2.5rem;
	transition: background-size .8s ease;

	&:hover {
		cursor: pointer;
		background-size: 400px;
	}
`;

function App() {
	// State de frases
	const [ frase, guardarFrase ] 		= useState({});
	const [ spinner, changeSpinner ] 	= useState( false );

	const consultarAPI 	= async () => {
		changeSpinner( true );

		const api 		= await fetch( 'https://breaking-bad-quotes.herokuapp.com/v1/quotes' );
		const frase		= await api.json();		
		guardarFrase( frase[0] );

		changeSpinner( false );
	}

	useEffect( () => {
		consultarAPI();
	}, [] );

	return (
		<Contenedor>
			{ spinner ? 
				(
					<Spinner />
				)
				:
				(
					<Frases
						frase={ frase }
					/>
				)
			}

			<Boton
				onClick={ consultarAPI }
			>
				Obtener Frase
			</Boton>
		</Contenedor>
	);
};

export default App;