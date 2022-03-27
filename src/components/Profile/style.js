import styled, { keyframes } from 'styled-components';
import { bounceInLeft } from 'react-animations';
const bounceAnimation = keyframes`${bounceInLeft}`;
export const Container = styled.form`
	animation: 1s ${bounceAnimation};
  display: flex;
  justify-content: center;
  flex-direction: column;
    @media only screen and (min-width:400px) {
	  #countryCodeSelect {
	  	width:23% !important;
	  }
  	}
    @media only screen and (min-width:301px) {
	  #countryCodeSelect {
	  	width:38% !important;
	  }
	  #countryCodeSelect > div > div {
	  	font-size:0.90em;
	  }
  	}
  	@media only screen and (max-width:300px) {
	  #countryCodeSelect {
	  	width:52% !important;
	  }
	  #countryCodeSelect > div > div {
	  	font-size:0.85em;
	  }
  	}
`;


export const SelectContainer = styled.div`   
    > div {
        // margin:0 auto 0 15%;
        margin:0 auto 0 0;
        color: #333;
        border-radius: 0.2rem; 
        width:100%;
    }
`
export const Label = styled.label`
    font-weight: 400;
    font-size: 15px;
    // margin:0 auto 0 18%;
    // margin:0 auto 0 15%;
    margin:0 auto 0 10%;
`