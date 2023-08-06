import { Controller, Get, HttpCode } from '@nestjs/common';
import { PlanoService } from 'src/modules/plano/plano.service';
import { PlansAndPrice } from './model/planAndPrice';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('plan')
@ApiTags('plan')
export class PlanoController {
  constructor(private planoService: PlanoService) {}

  @HttpCode(200)
  @Get()
  @ApiOperation({ summary: 'get planos' })
  @ApiResponse({
    status: 200,
    description: 'planos',
    type: PlansAndPrice,
  })
  getPlans(): PlansAndPrice[] {
    return this.planoService.getAllPlans();
  }
}
