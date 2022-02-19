import isSaturday from 'date-fns/isSaturday';
import isSunday from 'date-fns/isSunday';
import { useEffect, useState } from 'react';


export const getDolarPTAX = () => {
  const [dolarPTAX, setDolarPTAX] = useState(0);
  
  const current = new Date();
  const currentDate = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;

  useEffect(() => {
      const fetchDolarPTAX = (date: string) => {
        fetch(`https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='${date}'&$top=100&$format=json&$select=cotacaoVenda`)
        .then(response => response.json())
        .then(data => setDolarPTAX(data.value[0].cotacaoVenda));
      };

      if (isSaturday(new Date(currentDate))){
        fetchDolarPTAX(`${current.getMonth()+1}/${current.getDate()-1}/${current.getFullYear()}`);
      } else if (isSunday(new Date(currentDate))) {
        fetchDolarPTAX(`${current.getMonth()+1}/${current.getDate()-2}/${current.getFullYear()}`)
      } else fetchDolarPTAX(`${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`)
  }, [dolarPTAX]);

  return  dolarPTAX;
};
