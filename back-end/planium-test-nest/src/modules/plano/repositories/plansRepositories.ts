import { readFileSync } from 'fs';
import { join } from 'path';
import { IPlan } from 'src/modules/plano/dto/plano.response';
import { PlansAndPrice } from '../model/planAndPrice';
import { IPrice } from '../model/price';

export const getPlansData = (): PlansAndPrice[] => {
  const stringDataPlans = readFileSync(
    join(__dirname, '../../../../../', 'plans.json'),
    'utf8',
  );
  const stringDataPrices = readFileSync(
    join(__dirname, '../../../../../', 'prices.json'),
    'utf8',
  );

  const plans: IPlan[] = JSON.parse(stringDataPlans);
  const prices: IPrice[] = JSON.parse(stringDataPrices);

  const plansAndPrices: Partial<PlansAndPrice[]> = plans.map((plan) => {
    const result = prices.find((price) => plan.codigo == price.codigo);

    return {
      codigo: plan.codigo,
      minimoVidas: result.minimo_vidas,
      faixa1: `R$ ${result.faixa1}`,
      faixa2: `R$ ${result.faixa2}`,
      faixa3: `R$ ${result.faixa3}`,
      nome: plan.nome,
    };
  });

  return plansAndPrices;
};
