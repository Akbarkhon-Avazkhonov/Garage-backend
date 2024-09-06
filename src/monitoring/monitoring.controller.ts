import { Controller, Get, Param } from '@nestjs/common';
import { MonitoringService } from './monitoring.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Monitoring')
@Controller('monitoring')
export class MonitoringController {
  constructor(private readonly monitoringService: MonitoringService) {}

  @ApiOperation({ summary: ' Rents count for month ' })
  @Get('rents/:year/:month')
  findRentsByMonth(@Param('year') year: string, @Param('month') month: string) {
    return this.monitoringService.findRentsByMonth(+year, +month);
  }

  @ApiOperation({ summary: 'Sum for month ' })
  @Get('sum/:year/:month')
  findIncomeByMonth(
    @Param('year') year: string,
    @Param('month') month: string,
  ) {
    return this.monitoringService.findIncomeByMonth(+year, +month);
  }

  @ApiOperation({ summary: 'Owners income or real balance  ' })
  @Get('ownersIncome')
  findIncomeByPersentage() {
    return this.monitoringService.findIncomeByPersentage();
  }

  @Get('history/:year/:month')
  findHistoryByMonth(
    @Param('year') year: string,
    @Param('month') month: string,
  ) {
    return this.monitoringService.findHistoryByMonth(+year, +month);
  }
}
