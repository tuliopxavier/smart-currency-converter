import { ChangeEvent, useEffect, useState } from 'react';
import { StyledMain } from './styles/StyledMain';
import { banksData } from '../banksData';
import { Input } from './components/Input';
import { IOF } from './service/utils';
import { getDolarPTAX } from './service/getDolarPTAX';
import { useDolarConverter } from './service/useDolarConverter';

function App() {
  const [bankId, setBankId] = useState<number>(0);
  const [dolarValue, setDolarValue] = useState<number>(0);
  const [realValue, setRealValue] = useState<number>(0);
  const dolarPTAX = getDolarPTAX();

  const inputStyle = {
    color: banksData[bankId].textColor,
    borderBottom: `solid 2px ${banksData[bankId].textColor}`,
  };

  const handleDolarInput = (e: ChangeEvent<HTMLInputElement>): void => {
    const dolarHandle = parseFloat(e.target.value);
    setDolarValue(dolarHandle);
  };

  useEffect(() => {
    const real = useDolarConverter(
      dolarValue,
      dolarPTAX,
      banksData[bankId].spreadPercentage,
      IOF
    );
    setRealValue(parseFloat(real) || 0);
  }, [dolarValue, bankId]);

  return (
    <StyledMain style={{ backgroundColor: banksData[bankId].backgroundColor }}>
      <form style={{ color: banksData[bankId].textColor }}>
        <select
          onChange={(e) => { setBankId(parseInt(e.target.value)); }}
          style={{ color: banksData[bankId].textColor }}>
            
            {banksData.map((bank) => {
              return (
                <option key={bank.id} value={`${bank.id}`}>
                  {bank.name}
                </option>
              );
            })}

        </select>

        <Input id='dolar' label='Dólar' style={inputStyle} placeholder='Insira valor em USD' onChange={handleDolarInput} />
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
