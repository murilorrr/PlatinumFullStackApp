import { Injectable } from '@nestjs/common';
import {
  acceptPropose,
  create,
  getProposeData,
} from './repositories/propose.repository';
import { InputBeneficiarioService } from '../beneficiario/model/beneficiario';
import { getPlansData } from '../plano/repositories/plansRepositories';
import { v4 as uuidv4 } from 'uuid';
import { PropostaResponse } from './dto/proposta.response';

@Injectable()
export class ProposeService {
  accept(id: string) {
    acceptPropose(id);
  }

  generatePropose(
    beneficiarioInfoInput: InputBeneficiarioService,
  ): PropostaResponse {
    const propose: PropostaResponse = {
      total: '',
      descricaoProposta: '',
      accepted: false,
      beneficiariosPreco: [],
      id: uuidv4(),
    };

    let totalNumber = 0;

    beneficiarioInfoInput.beneficiarios.map((beneficiario) => {
      const planoEscolhido = getPlansData().find(
        (plano) => plano.codigo == beneficiarioInfoInput.plano,
      );

      const preco = this.verificaPrecoBaseadoNaIdadeDoBeneficiario(
        {
          faixa1: this.getMoney(planoEscolhido.faixa1),
          faixa2: this.getMoney(planoEscolhido.faixa2),
          faixa3: this.getMoney(planoEscolhido.faixa3),
        },
        beneficiario.idade,
      );

      propose.beneficiariosPreco.push({
        beneficiario: beneficiario,
        preco: `R$ ${preco}`,
      });
      totalNumber += preco;
    });

    propose.total = 'R$ ' + totalNumber;

    propose.descricaoProposta = `
    Seu plano custará ${propose.total} para um total de ${
      propose.beneficiariosPreco.length
    } ${propose.beneficiariosPreco.length == 1 ? 'pessoa' : 'pessoas'}
    `;

    create(propose);

    return propose;
  }

  verificaPrecoBaseadoNaIdadeDoBeneficiario(
    plano: { faixa1: number; faixa2: number; faixa3: number },
    idade: number,
  ) {
    if (idade > 40) return plano.faixa3;
    if (idade > 18 && idade <= 40) return plano.faixa2;
    if (idade > 0 && idade <= 18) return plano.faixa1;
  }

  getMoney(str) {
    return Number(str.replace(/[^\d,]+/g, '').replace(',', '.'));
  }

  getAllProposes() {
    return getProposeData();
  }
}
