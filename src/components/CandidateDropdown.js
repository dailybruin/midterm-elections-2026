import React, { useState, useEffect } from "react";
import styled from 'styled-components'


const Option = styled.div`
	background-color: white;
	color: black;
    height: 53px;
    width: 515px;
    border-radius: 8px;
    border: 2px solid;
    border-color: #000000;
    text-align: center;
	h1 {
		margin: 0;
		font-family: Inter, sans-serif; 
        font-size: 24px;
        weight: 500;
	}
`
const Container = styled.div`
	background-color: white;
    border: 2px solid #000000;
    border-radius: 8px;
    height: 369px;
    width: 515px;
    text-align: center;
	h1 {
		margin: 0;
		font-family: Inter, sans-serif; 
        font-size: 24px;
        weight: 500;
	}
    h2 {
		margin: 0;
		font-family: Inter, sans-serif; 
        font-size: 14px;
        weight: 400;
	}
`

export default function CandidateDropdown({name, description, picture}){
    return(
        <Container>
            <Option>
                <h1>{name}</h1>
            </Option>
            <div>
                <h2>{description}</h2>
                <h2>{picture}</h2>
            </div>
        </Container>
    );
}