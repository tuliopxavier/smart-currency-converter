import { useEffect, useState } from 'react';

export const getDolarPTAX = () => {
  const [dolarPTAX, setDolarPTAX] = useState(0);
  const currentDate = new Date();
  
  useEffect(() => {
    const fetchDolarPTAX = (dayBefore = 0) => {
      const validDate = `${currentDate.getMonth()+1}/${currentDate.getDate()+dayBefore}/${currentDate.getFullYear()}`;

      fetch(`https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='${validDate}'&$top=100&$format=json&$select=cotacaoVenda`)
      .then(response => response.json())
      .then(data => {
        // IF contacaoVenda IS UNDEFINED, FETCH THE DAY BEFORE
        (data.value[0]) ? setDolarPTAX(data.value[0].cotacaoVenda) : (fetchDolarPTAX(dayBefore-1));
      });
    };

    fetchDolarPTAX();

  }, []);

  return dolarPTAX;
};
