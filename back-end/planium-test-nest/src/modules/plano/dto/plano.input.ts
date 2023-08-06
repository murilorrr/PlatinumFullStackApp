import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { IsNumber } from 'class-validator';
import { Beneficiario } from 'src/modules/beneficiario/model/beneficiario';

@Exclude()
export class InputPlanoService {
  @Expose()
  @ApiProperty()
  @IsNumber()
  qtdDeBeneficiarios: number;
  @Expose()
  @ApiProperty()
  beneficiario: Beneficiario;
  @IsNumber()
  @Expose()
  @ApiProperty()
  registroDoPlanoEscolhido: number;
}
