import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

Exclude();
export class Plano {
  @Expose()
  @ApiProperty()
  codigo: string;

  @Expose()
  @ApiProperty()
  minimo_vidas: number;

  @Expose()
  @ApiProperty()
  faixa1: number;

  @Expose()
  @ApiProperty()
  faixa2: number;

  @Expose()
  @ApiProperty()
  faixa3: number;
}
