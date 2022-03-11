import { ChangeEvent } from 'react';
import { StyledInput } from '../styles/StyledInput';

type Props = {
  id: string;
  label: string;
  style?: {};
  type?: string;
  value?: number;
  placeholder?: string;
  disabled?: boolean;
  onChange?: void | any;
};

export const Input = ({ style, label, type='number', id, value, placeholder, onChange, disabled, }: Props) => {
  return (
    <StyledInput>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        inputMode='decimal'
        style={style}
        id={id}
        value={value}
        min='0'
        step='any'
        maxLength={9}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        // onInput={(e: ChangeEvent<HTMLInputElement>) => {
        //   if (e.target.value.toString().length = 10 ) return false;
        // }}
      />
    </StyledInput>
  );
};
