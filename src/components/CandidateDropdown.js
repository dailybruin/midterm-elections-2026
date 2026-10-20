import {useState} from "react";
import styled from 'styled-components'

import chevron from '../images/Chevron.png'

const Container = styled.div`
	background-color: white;
    border: 2px solid #000000;
    border-radius: 8px;
    max-width: 515px;
    text-align: center;
    box-sizing: border-box;
    overflow: hidden
    transition: height 0.25s cubic-bezier(0.4, 0, 0.2, 1);
`;

const Option = styled.div`
	background-color: white;
	color: black;
    height: 53px;
    width: 100%;
    border-radius: 8px;
    box-sizing: border-box;
    text-align: center;

    padding: 12px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    cursor: pointer;

	h1 {
		margin: 0;
		font-family: Inter, sans-serif; 
        font-size: 24px;
        font-weight: 500;
        font-style: medium;
        color: #17171C;
	}

    /*chevron*/
    img{
        width: 20px;
        aspect-ratio: 2/1;
        object-fit: contain;
    }

`

const DropdownWrapper = styled.div`
  display: grid;
  width: 100%;
  box-sizing: border-box;
  grid-template-rows: ${props => props.$isOpen ? '1fr' : '0fr'};
  transition: grid-template-rows 0.25s cubic-bezier(0.4, 0, 0.2, 1);
`;

const DropdownContent = styled.div`
  overflow: hidden;
  width: 100%;
  box-sizing: border-box;
`;

const Dropdown = styled.div`
    display: flex;
    gap: 20px; 
    padding: 16px 16px 20px 16px;
    align-items: flex-start;

    .picture{
        flex: 0 0 115px;
        aspect-ratio: 115/146;

        border: 2px solid #000000; /* TODO: DELETE LATER, just showing the picture outline */
    }

    .description{  
        flex: 1 1 0%; /*take up remaining space*/
        min-width: 0;
        max-width: 348px;
        width: fit-content;
        box-sizing: border-box;
    }

    h3{
        margin: 0;
		font-family: Inter, sans-serif; 
        font-size: 14px;
        font-weight: 400;
        font-style: regular;
        color: #17171C;
        text-align: left;
        line-height: 20px;
    }
`;

export default function CandidateDropdown({name, description, picture, alt}){
    
    const [showDropdown, setShowDropdown] = useState(false);

    return(
        <Container>
            <Option onClick={() => setShowDropdown(prev => !prev)}>
                <h1>{name}</h1>
                <img src = {chevron} style={{transform: showDropdown ? 'rotate(180deg)' : 'rotate(0deg)'}}/>
            </Option>

            <DropdownWrapper $isOpen={showDropdown}>
                <DropdownContent> 
                    <Dropdown>
                        <div className="picture"><img src={picture} alt = {alt}/></div>
                        <div className="description"><h3>{description}</h3></div>
                    </Dropdown>
                </DropdownContent>
            </DropdownWrapper>
        </Container>
    );
}