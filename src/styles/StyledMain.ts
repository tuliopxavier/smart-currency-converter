import styled from 'styled-components';

export const StyledMain = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100vh;
    
    transition: background-color .5s ease;

    & form {
        display: flex;
        flex-direction: column;
        max-width: 16rem;
        padding: 2rem;

        word-break: break-all;
        overflow: visible;     
        
        & select {
            background-color: transparent;
            height: 3rem;
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 2rem;

            border: none;
            outline: none;
            
            transition: background-color .5s ease;
        }

        & a {
            text-decoration: none;
            font-size: .75rem;
            opacity: .5;
            transition: opacity .25s ease;

            &:hover {
                text-decoration: revert;
                opacity: 1;
            }
        }

        & h1 {
            display: flex;
            justify-content: space-between;
            font-size: 2.5rem;
            word-break: break-all;

            & span {
                word-break: initial;
                font-weight: 100;
            }
        }
    }
    
`;