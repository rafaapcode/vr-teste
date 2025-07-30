import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ApiService } from './api.service';
import { MessageBodyDto } from './dto/message-body.dto';

@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @HttpCode(202)
  @Post('notificar')
  notificar(@Body() messageBodyDto: MessageBodyDto) {
    this.apiService.notificar(messageBodyDto);
    return messageBodyDto;
  }
}
