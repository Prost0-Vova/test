import styled from '@emotion/styled';


export const Container = styled.div`
background-color: grey;

height:1000px;
`;
export const Item = styled.li`
flex-direction: column;

display: flex;
background-color: white;

margin: 0 5px 0 5px;
max-width:320px;
height:100%;
justify-content: center;
margin:auto;
height:auto;
background-color:white;
border-radius:5px;
border-radius: 0 0 40px 40px;
`

export const ImageBlock = styled.div`
display:flex;

justify-content: center;


width:100%;
 
color:white;
`;

export const Image = styled.img`

max-width:288px;
height:288px;;



`;
export const TextDiv = styled.div`

display: flex;
justify-content: center;
margin:auto;
width:288px;
height:auto;



`;

export const Text = styled.a`
margin-top: 10px;
display: flex;
justify-content: center;
font-size: 24px;
font-weight:700;
height:auto;
max-width:231px;
margin-bottom:20px;

`;


export const LearnMoreDiv = styled.div`

`
export const LearnMore = styled.button`
border: 2px solid #54ADFF;
justify-content:center;
display:flex;
align-items:center;
background-color:white;
border-radius:40px;
width:248px;
margin:auto;
cursor:pointer;
height:40px;

margin-bottom:20px;


`;
export const TextMore = styled.a`
font-weight: 600;
font-size: 16px;
color: #54ADFF;
`