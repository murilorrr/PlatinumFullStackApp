import { Injectable } from '@nestjs/common';
import { Beneficiario, InputBeneficiarioService } from './model/beneficiario';
import { createBeneficiario } from './repositories/beneficiarioRepositorie';
import { getPlansData } from '../plano/repositories/plansRepositories';
import { ProposeService } from '../propose/propose.service';

@Injectable()
export class BeneficiarioService {
  constructor(private proposeService: ProposeService) {}
  saveBeneficiarioInfos(beneficiarioInfoInput: InputBeneficiarioService) {
    beneficiarioInfoInput.beneficiarios.forEach((beneficiario) => {
      const beneficiarioDTO = new Beneficiario(
        beneficiario.idade,
        beneficiario.nome,
        beneficiarioInfoInput.plano,
      );

      const planoEscolhido = getPlansData().find(
        (plano) => plano.codigo == beneficiarioInfoInput.plano,
      );

      if (!planoEscolhido) {
        throw new Error('planoEscolhido not found');
      }

      if (
        beneficiarioInfoInput.beneficiarios.length < planoEscolhido.minimoVidas
      ) {
        throw new Error(
          'Não cumpre com o minimo de ' + planoEscolhido.minimoVidas + ' vidas',
        );
      }

      beneficiarioDTO.validate();
      createBeneficiario(beneficiarioDTO);
    });

    return this.proposeService.generatePropose(beneficiarioInfoInput);
  }

  getBeneficiariosData() {
    return this.getBeneficiariosData();
  }
}
