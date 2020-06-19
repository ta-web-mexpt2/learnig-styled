import styled, { css } from 'styled-components'
import {theme_one} from '../theme/themes'


// export const Button = styled.button`
//     font-size:1rem;
//     border-radius:5px;
//     margin:0 1rem;
//     background:transparent;
//     color:${props => props.primary ? theme_one.primary : (props.secondary ? theme_one.light :theme_one.dark)};
//     border:2px solid ${theme_one.primary};
//     padding:0.25rem 1rem;
// `;

export const Button = styled.button`
    font-size:1rem;
    border-radius:5px;
    margin:0 1rem;
    background:transparent;
    color:${props => props.theme.primary};
    border:2px solid ${props => props.theme.primary};
    padding:0.25rem 1rem;

    ${props =>
      props.primary && css`
        background:${props=> props.theme.primary};
        color: white;
        border-color:${props=> props.theme.primary};
      `};

    ${props =>
      props.secondary && css`
      background:${props=> props.theme.secondary};
      color: white;
      border-color:${props=> props.theme.secondary};
    `};

    ${props =>
      props.danger && css`
      background:${props=> props.theme.danger};
      color: white;
      border-color:${props=> props.theme.danger};
    `};
`;