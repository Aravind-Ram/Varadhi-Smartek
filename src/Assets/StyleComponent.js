import styled from 'styled-components';

export const CardHeading = styled.h6`
    color: #4e73df;
    font-size: 1rem;
    font-weight: 700;
    margin: 0;
`;

export const Padding = styled.div`
    float: ${props => props.float ? props.float : 'left'};
`; 

export const ErrorText = styled.span`    
    width: 100%;
    margin-top: .25rem;
    font-size: 80%;
    color: #dc3545;
`;
