import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class PlansAndPrice {
  @Expose()
  @ApiProperty()
  codigo: number;

  @Expose()
  @ApiProperty()
  minimoVidas: number;

  @Expose()
  @ApiProperty()
  faixa1: string;

  @Expose()
  @ApiProperty()
  faixa2: string;

  @Expose()
  @ApiProperty()
  faixa3: string;

  @Expose()
  @ApiProperty()
  nome: string;
}
