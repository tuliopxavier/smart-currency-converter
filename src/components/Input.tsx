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
        inputMode='numeric'
        style={style}
        id={id}
        value={value}
        min='0'
        step='any'
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        onInput={(e: any) => {
          e.target.value = Math.max(0, parseFloat(e.target.value))
            .toString()
            .slice(0, 9);
        }}
      />
    </StyledInput>
  );
};
