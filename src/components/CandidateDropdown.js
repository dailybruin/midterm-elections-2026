import {useState} from "react";
import styled from 'styled-components'

import chevron from '../images/Chevron.png'

const Container = styled.div`
    position: relative;
    background-color: white;
    font-family: 'Roboto Condensed', sans-serif;
    border-radius: 8px;
    width: 100%;
    text-align: center;
    box-sizing: border-box;

    /* subtle inked border: slightly rough, but still clean and defined */
    &::after {
        content: '';
        position: absolute;
        inset: 0;
        border: 2px solid #000000;
        border-radius: 8px;
        filter: url(#ink-light);
        pointer-events: none;
    }
`;

const Option = styled.div`
    background-color: white;
    color: black;
    min-height: 53px;
    width: 100%;
    border-radius: 8px;
    box-sizing: border-box;
    text-align: center;

    position: relative;
    padding: 10px 44px;
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    h1 {
        margin: 0;
        font-family: 'Roboto Condensed', sans-serif;
        font-size: ${props => props.$small ? '16px' : '22px'};
        font-weight: 400;
        line-height: 1.15;
        color: #17171C;
        text-align: center;
        text-wrap: balance;
        filter: url(#ink-light);   /* much gentler than ink-bleed */
    }

    @media (max-width: 600px) {
        h1 {
            font-size: ${props => props.$small ? '15px' : '20px'};
        }
    }

    /*chevron*/
    img{
        position: absolute;
        right: 16px;
        top: 50%;
        margin-top: -5px;
        width: 20px;
        aspect-ratio: 2/1;
        object-fit: contain;
    }
`

const DropdownWrapper = styled.div`
  display: grid;
  width: 100%;
  box-sizing: border-box;
  border-radius: 0 0 8px 8px;
  overflow: hidden;
  grid-template-rows: ${props => props.$isOpen ? '1fr' : '0fr'};
  transition: grid-template-rows 0.25s cubic-bezier(0.4, 0, 0.2, 1);
`;

const DropdownContent = styled.div`
  overflow: hidden;
  width: 100%;
  box-sizing: border-box;
`;

const Dropdown = styled.div`
    --pic-width: 40%;            /* share of the row the picture takes; the text gets the rest */

    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 5px 16px 20px 16px;
    align-items: center;

    .picture{
        flex: 0 0 var(--pic-width);
        aspect-ratio: 4/3;
        align-self: flex-start;
        box-sizing: border-box;
        overflow: hidden;
        background: #fff;
        display: flex;                 /* centers the image inside the box */
        align-items: center;
        justify-content: center;

        border: 2px solid #000000; /* TODO: DELETE LATER, just showing the picture outline */
    }

    .picture img{
        display: block;
        width: auto !important;        /* never stretch */
        height: auto !important;
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }

    .description{
        flex: 1 1 0%;                /* takes whatever the picture leaves */
        min-width: 0;
        box-sizing: border-box;
        /* removed max-width: 348px so the text can use the freed space */
    }

    h3{
        margin: 0;
        font-family: 'Poppins', sans-serif;
        font-size: ${props => props.$small ? '12px' : '14px'};
        font-weight: 400;
        color: #17171C;
        text-align: center;
        line-height: ${props => props.$small ? '18px' : '21px'};
    }
`;

export default function CandidateDropdown({name, description, picture, alt, small = false}){

    const [showDropdown, setShowDropdown] = useState(false);

    return(
        <Container>
            <Option $small={small} onClick={() => setShowDropdown(prev => !prev)}>
                <h1>{name}</h1>
                <img src={chevron}
                alt={showDropdown ? "a downwards black chevron arrow to expand dropdown" : "an upwards black chevron arrow to collapse dropdown"}
                style={{transform: showDropdown ? 'rotate(180deg)' : 'rotate(0deg)'}}/>
            </Option>

            <DropdownWrapper $isOpen={showDropdown}>
                <DropdownContent>
                    <Dropdown $small={small}>
                    {picture && (
                        <div className="picture"><img src={picture} alt={alt} /></div>
                    )}
                    {description && (
                        <div className="description"><h3>{description}</h3></div>
                    )}
                    </Dropdown>
                </DropdownContent>
            </DropdownWrapper>
        </Container>
    );
}