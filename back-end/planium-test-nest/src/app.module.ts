import { Module } from '@nestjs/common';
import { PlanoService } from './modules/plano/plano.service';
import { PlanoModule } from './modules/plano/plano.module';
import { PlanoController } from './modules/plano/plano.controller';
import { BeneficiarioModule } from './modules/beneficiario/beneficiario.module';
import { BeneficiarioController } from './modules/beneficiario/beneficiario.controller';
import { BeneficiarioService } from './modules/beneficiario/beneficiario.service';
import { ProposeModule } from './modules/propose/propose.module';
import { ProposeController } from './modules/propose/propose.controller';
import { ProposeService } from './modules/propose/propose.service';

@Module({
  imports: [PlanoModule, BeneficiarioModule, ProposeModule],

  controllers: [PlanoController, BeneficiarioController, ProposeController],

  providers: [PlanoService, BeneficiarioService, ProposeService],
})
export class AppModule {}
