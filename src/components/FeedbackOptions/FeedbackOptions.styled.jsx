import styled from 'styled-components';

export const OptionsList = styled.ul`
display: flex;
gap: 10px;
padding: 0;
margin: 0;
`;

export const Button = styled.button`
text-transform: capitalize;
font-size: inherit;
border-radius: 5px;
background-color: inherit;
border: 1px solid #d5d3d3;
cursor: pointer;
&:hover {
    background-color: #7171ff;
}
`;

export const OptionItem = styled.li`
list-style: none;
`;

