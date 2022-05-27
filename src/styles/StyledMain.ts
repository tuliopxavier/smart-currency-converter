import styled from 'styled-components';

export const StyledMain = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 100vw;
    min-height: 100vh;
    
    transition: background-color .5s ease;

    & form {
        display: flex;
        flex-direction: column;
        max-width: 16rem;
        margin: 4rem .5rem;

        word-break: break-all;
        overflow: visible;     
        
        & select {
            background-color: transparent;
            width: 100%;
            height: 3rem;
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 2rem;

            border: none;
            outline: none;
            border-bottom: dashed 1px #00000050;
            
            transition: all .25s ease;

            &:focus {
                outline: 1px solid #ffffff50;
                outline-offset: 1rem;
                outline-style: dashed;
            }
        }

        & input {
            width: 100%;
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

            &:focus {
                outline: 1px solid #ffffff;
                outline-style: dashed;
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

    & footer {
        text-align: center;
        max-width: 20rem;
        padding: 1rem;
    }
    
`;