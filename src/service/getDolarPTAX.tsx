import { useEffect, useState } from 'react';
import api from './api'

export const getDolarPTAX = () => {
  const [dolarPTAX, setDolarPTAX] = useState(0);
  const currentDate = new Date();
  
  useEffect(() => {
    const fetchDolarPTAX = async (dateModifier = 0) => {
      // fetchDate = 'MM/DD/YYYY'
      const fetchDate = `${currentDate.getMonth()+1}/${currentDate.getDate()+dateModifier}/${currentDate.getFullYear()}`;

      try { 
        const { data } = await api.get(`CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='${fetchDate}'&$top=100&$format=json&$select=cotacaoVenda`);
        data.value[0] ? setDolarPTAX(data.value[0].cotacaoVenda) : (fetchDolarPTAX(dateModifier-1));
      } catch (error: any) {
        console.log('API error: ', error.message);
      }
    };

    fetchDolarPTAX();
  }, []);

  return dolarPTAX;
};
