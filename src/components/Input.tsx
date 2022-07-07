import { StyledInput } from '../styles/StyledInput';
import type { inputProps } from '../types/inputProps'

export const Input = ({ style, label, type='number', id, value, placeholder, onChange, disabled, }: inputProps) => {
  return (
    <StyledInput>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        inputMode= 'numeric'
        style={style}
        id={id}
        value={value}
        min='0'
        step= '0.01'
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
      />
    </StyledInput>
  );
};
