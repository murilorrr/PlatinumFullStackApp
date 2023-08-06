import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

Exclude();
export class IPrice {
  @ApiProperty()
  @Expose()
  codigo: number;

  @ApiProperty()
  @Expose()
  minimo_vidas: number;

  @ApiProperty()
  @Expose()
  faixa1: string;

  @ApiProperty()
  @Expose()
  faixa2: string;

  @ApiProperty()
  @Expose()
  faixa3: string;
}
