import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose, Type } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';
import { getPlansData } from 'src/modules/plano/repositories/plansRepositories';

@Exclude()
export class Beneficiario {
  @IsNumber()
  @Expose()
  @ApiProperty()
  idade: number;

  @Expose()
  @ApiProperty()
  @IsString()
  nome: string;

  @Expose()
  @ApiProperty()
  @IsNumber()
  plano: number;

  constructor(idade: number, nome: string, plano: number) {
    this.idade = idade;
    this.nome = nome;
    this.plano = plano;
  }

  public validate() {
    if (this.idadeIsNotValid()) throw new Error('Idade inválida');
    if (this.nomeIsNotValid()) throw new Error('Nome inválida');
    if (this.planoIsNotValid()) throw new Error('Plano inválido');
  }

  private idadeIsNotValid() {
    if (this.idade < 0) return true;
  }

  private nomeIsNotValid() {
    if (!this.nome) return true;
  }

  private planoIsNotValid() {
    const existePlanoNoRepositorio = getPlansData().some(
      (plan) => plan.codigo === this.plano,
    );

    if (!existePlanoNoRepositorio) return true;
  }
}

@Exclude()
export class InputBeneficiarioService {
  @Expose()
  @ApiProperty()
  @Type(() => Beneficiario)
  @ApiProperty({ type: Beneficiario, isArray: true })
  beneficiarios: Beneficiario[];

  @IsNumber()
  @Expose()
  @ApiProperty()
  plano: number;
}
