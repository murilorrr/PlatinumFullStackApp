import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { ProposeService } from './propose.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PropostaResponse } from './dto/proposta.response';

@Controller('proposta')
@ApiTags('Propose')
export class ProposeController {
  constructor(private proposeService: ProposeService) {}

  @Get()
  @HttpCode(200)
  @ApiOperation({ summary: 'get All proposes' })
  @ApiResponse({
    status: 201,
    description: 'get all propose',
    type: PropostaResponse,
  })
  getAllProposes(): PropostaResponse[] {
    return this.proposeService.getAllProposes();
  }

  @Post()
  @HttpCode(200)
  @ApiOperation({ summary: 'accept propose' })
  @ApiResponse({
    status: 201,
    description: 'accept propose',
    type: 'ok',
  })
  acceptPropose(@Body() propose: PropostaResponse) {
    this.proposeService.accept(propose.id);
  }
}
