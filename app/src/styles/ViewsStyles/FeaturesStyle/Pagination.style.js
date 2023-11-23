import styled from 'styled-components';

export const PaginationStyle = styled.div`

    display: flex;
    justify-content: center;
    margin-top: auto;

    a {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: color 0.3s ease;

        transition: transform 0.3s ease;

        &:hover {
        transform: scale(1.2);
        }
    }
`