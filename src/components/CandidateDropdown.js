import React, { useState, useEffect } from "react";
import styled from 'styled-components'

import chevron from '../images/Chevron.png'


const Option = styled.div`
	background-color: white;
	color: black;
    height: 53px;
    width: 515px;
    border-radius: 8px;
    box-sizing: border-box;
    text-align: center;

    padding: 12px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;        

	h1 {
		margin: 0;
		font-family: Inter, sans-serif; 
        font-size: 24px;
        font-weight: 500;
	}

    /*chevron*/
    img{
        width: 20px;
        aspect-ratio: 2/1;
        object-fit: contain;
    }

`
const Container = styled.div`
	background-color: white;
    border: 2px solid #000000;
    border-radius: 8px;
    height: 369px;
    width: 515px; /*515*/
    text-align: center;
	h1 {
		margin: 0;
		font-family: Inter, sans-serif; 
        font-size: 24px;
        weight: 500;
	}
    h3 {
		margin: 0;
		font-family: Inter, sans-serif; 
        font-size: 14px;
        weight: 400;
        color: #17171C
        optical-size: 0;
	}
`

const Dropdown = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 5px;

    .picture{
        flex: 0 1 115px;
        aspect-ratio: 146/115;
        border: 2px solid #000000;
        /*width: 348px;*/
    }
    
    .description{
        flex: 0 1 348px;
        text-align: left;
        style: regular;
    }
`

export default function CandidateDropdown({name, description, picture}){
    
    const [showDropdown, setShowDropdown] = useState(false);

    return(
        <Container>
            <Option onClick={() => setShowDropdown(prev => !prev)}>
                <h1>{name}</h1>
                <img src = {chevron}/>
            </Option>
            {showDropdown && 
            <Dropdown>
                <div className="picture"><img src={picture}/></div>
                <div className="description"><h3>{description}</h3></div>
            </Dropdown>}
        </Container>
    );
}