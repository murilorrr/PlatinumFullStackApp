import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose, Type } from 'class-transformer';
import { Beneficiario } from 'src/modules/beneficiario/model/beneficiario';

@Exclude()
export class PropostaResponse {
  @Expose()
  @Type(() => Beneficiario)
  @ApiProperty({ type: Beneficiario, isArray: true })
  beneficiariosPreco: [{ beneficiario: Beneficiario; preco: string }] | any;

  @Expose()
  @ApiProperty()
  total: string;

  @Expose()
  @ApiProperty()
  descricaoProposta: string;

  @Expose()
  @ApiProperty()
  accepted: boolean;

  @Expose()
  @ApiProperty()
  id: string;
}
