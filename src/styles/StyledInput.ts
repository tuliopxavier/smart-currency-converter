import styled from 'styled-components';

export const StyledInput = styled.div`
	label {
		display: inline-block;
		margin-bottom: 0.5rem;
		font-size: 0.75rem;
		position: relative;
		top: 1.75rem;
	}

	input {
		background-color: transparent;
		border: none;
		outline: none;
		transition: background-color 0.5s ease;
		margin-bottom: 2rem;
		font-size: 1.5rem;
		text-align: right;

		transition: all 0.25s ease;
		z-index: 1;

		&:first-of-type:focus {
			outline: 1px solid #f00;
			outline-offset: 1rem;
			outline-style: dashed;
		}

		&:last-of-type {
			margin-bottom: 0.5rem;
		}

		&:enabled {
			cursor: pointer;
		}

		&::placeholder {
			font-size: 0.75rem;
			color: #fff;
			mix-blend-mode: difference;
		}

    // Hide input arrows
		// Chrome, Safari, Edge, Opera
		&::-webkit-outer-spin-button,
		&::-webkit-inner-spin-button {
			-webkit-appearance: none;
			margin: 0;
		}
		// Firefox
		&[type='number'] {
			-moz-appearance: textfield;
		}
	}
`;
