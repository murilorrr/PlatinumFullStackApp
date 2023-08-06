import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { Beneficiario, InputBeneficiarioService } from './model/beneficiario';
import { PropostaResponse } from '../propose/dto/proposta.response';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BeneficiarioService } from './beneficiario.service';

@Controller('beneficiario')
@ApiTags('beneficiario')
export class BeneficiarioController {
  constructor(private beneficiarioService: BeneficiarioService) {}

  @Get()
  @HttpCode(200)
  @ApiOperation({ summary: 'Get All Beneficiarios' })
  @ApiResponse({
    status: 200,
    type: Beneficiario,
    description: 'Get All Beneficiarios',
    isArray: true,
  })
  getAllBeneficiarios(): Beneficiario[] {
    return this.beneficiarioService.getBeneficiariosData();
  }

  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: 'Post Beneficiários' })
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
    type: PropostaResponse,
  })
  @ApiResponse({ status: 400, description: 'payload validation' })
  addBeneficiaries(
    @Body() request: InputBeneficiarioService,
  ): PropostaResponse {
    return this.beneficiarioService.saveBeneficiarioInfos(request);
  }
}
