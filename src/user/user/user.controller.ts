import {
  Controller,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Query,
  Res,
} from '@nestjs/common';
@Controller('/api/users')
export class UserController {
  @Get('/sample-response')
  @Header('Content-type', 'application/json')
  @HttpCode(200)
  sampleResponse(): Record<string, string> {
    return {
      data: 'Hello JSON',
    };
  }
  @Get('/hello')
  getQuery(@Query('nama') nama: string): string {
    return `Hello ${nama}`;
  }
  @Get('/:id')
  getParams(@Param('id') id: string): string {
    return `${id}`;
  }
  @Post()
  post(): string {
    return 'POST';
  }
  @Get('/sample')
  get(): string {
    return 'Heloo NestJS';
  }
}
