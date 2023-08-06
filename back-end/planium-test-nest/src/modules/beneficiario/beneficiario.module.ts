import { Module } from '@nestjs/common';
import { BeneficiarioController } from './beneficiario.controller';
import { BeneficiarioService } from './beneficiario.service';
import { ProposeModule } from '../propose/propose.module';

@Module({
  imports: [ProposeModule],
  controllers: [BeneficiarioController],
  providers: [BeneficiarioService],
  exports: [BeneficiarioService],
})
export class BeneficiarioModule {}
