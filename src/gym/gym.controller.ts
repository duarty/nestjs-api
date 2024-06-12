import { Controller, Get } from '@nestjs/common';

@Controller('gym')
export class GymController {
  @Get()
  listAll(): string {
    return 'listall';
  }
}
