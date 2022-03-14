import { useEffect, useState } from 'react';

export const getDolarPTAX = () => {
  const [dolarPTAX, setDolarPTAX] = useState(0);
  const currentDate = new Date();
  
  useEffect(() => {
    const fetchDolarPTAX = (dateModifier = 0) => {
      // fetchDate = 'MM/DD/YYYY'
      const fetchDate = `${currentDate.getMonth()+1}/${currentDate.getDate()+dateModifier}/${currentDate.getFullYear()}`;

      fetch(`https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='${fetchDate}'&$top=100&$format=json&$select=cotacaoVenda`)
      .then(response => response.json())
      .then(data => {
        // IF contacaoVenda IS UNDEFINED (WEEKEND OR HOLIDAYS), FETCH THE DAY BEFORE
        (data.value[0]) ? setDolarPTAX(data.value[0].cotacaoVenda) : (fetchDolarPTAX(dateModifier-1));
      });
    };

    fetchDolarPTAX();

  }, []);

  return dolarPTAX;
};
