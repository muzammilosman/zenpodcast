import { Controller, Get, Query } from '@nestjs/common';
import { AuthorizationService } from './authorization.service';

@Controller('auth')
export class AuthorizationController {
  constructor(private authorizationService: AuthorizationService) {}

  @Get()
  getAccessToken(@Query() code: string) {
    this.authorizationService.getUserAccessToken(code);
  }
}
