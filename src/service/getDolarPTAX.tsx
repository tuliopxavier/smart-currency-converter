import isSaturday from 'date-fns/isSaturday';
import isSunday from 'date-fns/isSunday';
import { useEffect, useState } from 'react';


export const getDolarPTAX = () => {
  const [dolarPTAX, setDolarPTAX] = useState(0);
  
  const current = new Date();
  const currentDate = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;
  const lastDate = `${current.getMonth()+1}/${current.getDate()-1}/${current.getFullYear()}`;
  const beforeLastDate = `${current.getMonth()+1}/${current.getDate()-2}/${current.getFullYear()}`;

  useEffect(() => {
      const fetchDolarPTAX = (date: string) => {
        fetch(`https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='${date}'&$top=100&$format=json&$select=cotacaoVenda`)
        .then(response => response.json())
        .then(data => {
          // IF contacaoVenda UNDEFINED, FETCH THE LAST VALID DAY (NULLISH COALESCING OPERATOR)
          (data.value[0]) ? setDolarPTAX(data.value[0].cotacaoVenda) : (fetchLastDay() ?? fetchBeforeLastDay);
        });
      };
      
      const fetchCurrentDay = () => {fetchDolarPTAX(currentDate)}
      const fetchLastDay = ():any => {fetchDolarPTAX(lastDate)}
      const fetchBeforeLastDay = () => {fetchDolarPTAX(beforeLastDate)}
      
      if (isSaturday(new Date(currentDate))) fetchLastDay();
      if (isSunday(new Date(currentDate))) fetchBeforeLastDay();
      fetchCurrentDay();

  }, [dolarPTAX]);

  return  dolarPTAX;
};
