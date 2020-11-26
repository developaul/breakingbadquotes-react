import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const ContenedorFrase = styled.div`
    padding: 3rem;
    border-radius: .5rem;
    background-color: #FFFFFF;
    -webkit-box-shadow: 0px 0px 10px 10px rgba(0,0,0,0.5);
    -moz-box-shadow: 0px 0px 10px 10px rgba(0,0,0,0.5);
    box-shadow: 0px 0px 10px 10px rgba(0,0,0,0.5);
    max-width: 300px;

    @media ( min-width: 768px ) {
        max-width: 800px;
    }
    
    @media ( min-width: 992px ) {
        margin-top: 10rem;
    }

    h1 {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 2rem;
        font-size: 1rem;
        
        @media ( min-width: 768px ) {
            padding-left: 4rem;
            font-size: unset;
        }
        
        &::before {
            content: open-quote;
            font-size: 5rem;
            color: black;
            position: absolute;
            left: -1rem;
            top: -2rem;

            @media ( min-width: 768px ) {
                top: -4rem;
                font-size: 10rem;
            }
        }
    }
    
    p {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-weight: bold;
        text-align: right;
        color: #666666;
        margin-top: 2rem;
        font-size: .5rem;
        
        @media ( min-width: 768px ) {
            font-size: 1.4rem;
        }
    }
`;

const Frases = ({ frase:{ quote, author } }) => {
    return (
        <ContenedorFrase>
            <h1>{ quote }</h1>
            <p>- { author }</p>
        </ContenedorFrase>
    );
};

Frases.propTypes = {
    frase: PropTypes.object.isRequired
};

export default Frases;