import { Injectable } from '@nestjs/common';
import { Plano } from 'src/modules/plano/model/plano';
import { getPlansData } from './repositories/plansRepositories';
import { PlansAndPrice } from './model/planAndPrice';

@Injectable()
export class PlanoService {
  verificaPrecoBaseadoNaIdadeDoBeneficiario(plano: Plano, idade: number) {
    if (idade > 40) return plano.faixa3;
    if (idade > 18 && idade <= 40) return plano.faixa2;
    if (idade > 0 && idade <= 18) return plano.faixa1;
  }

  public getAllPlans(): PlansAndPrice[] {
    return getPlansData();
  }
}
