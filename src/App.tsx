import { ChangeEvent, useEffect, useState } from 'react';
import { StyledMain } from './styles/StyledMain';
import { banksData } from '../banksData';
import { Input } from './components/Input';
import { IOF } from './services/utils';
import { getDolarPTAX } from './services/getDolarPTAX';
import { useDolarConverter } from './services/useDolarConverter';
import { currencyMask } from './services/currencyMask';

function App() {
  const [bankId, setBankId] = useState<number>(0);
  const [dolarValue, setDolarValue] = useState<number>(0);
  const [realValue, setRealValue] = useState<string>('0.00');
  const dolarPTAX = getDolarPTAX();

  const inputStyle = {
    color: banksData[bankId].textColor,
    borderBottom: `solid 2px ${banksData[bankId].textColor}`,
  };

  const handleDolarInput = (e: ChangeEvent<HTMLInputElement>): void => {
    if ((e.target.value).length > 8) { return }; // max length 99.999,99
    let maskedDolarInput = Number(currencyMask(e.target.value).replace('.', '').replace(',', '.'));
    setDolarValue(maskedDolarInput);
  };

  useEffect(() => {
    const real = useDolarConverter(
      dolarValue,
      dolarPTAX,
      banksData[bankId].spreadPercentage,
      IOF
    );    
    setRealValue(currencyMask(real));
  }, [dolarValue, bankId]);

  return (
    <StyledMain style={{ backgroundColor: banksData[bankId].backgroundColor }}>
      <form style={{ color: banksData[bankId].textColor }}>
        <select
          onChange={(e) => { setBankId(Number(e.target.value)); }}
          style={{ color: banksData[bankId].textColor, borderBottom: `dashed 1px ${banksData[bankId].textColor}` }}>

          {banksData.map((bank) => {
            return (
              <option key={bank.id} value={`${bank.id}`}>
                {bank.name}
              </option>
            );
          })}

        </select>

        <Input id='dolar' value={dolarValue?.toFixed(2)} label='Dólar' style={inputStyle} placeholder='Insira valor em USD' onChange={handleDolarInput} />
        <Input id='dolar-ptax' label='Dólar PTAX' value={dolarPTAX} style={inputStyle} disabled />
        <Input id='iof' label='IOF (%)' value={IOF} style={inputStyle} disabled />
        <Input id='spread' label='Spread (%)' value={banksData[bankId].spreadPercentage} style={inputStyle} disabled />

        <a href={banksData[bankId].spreadLink} target='_blank' style={{ color: banksData[bankId].textColor }}>
          * Informações oficiais de spread
        </a>

        <h1> <span>R$</span> {realValue} </h1>
      </form>
    </StyledMain>
  );
}

export default App;
