import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';
import { MessageBodyDto } from './dto/message-body.dto';
import { StatusGateway } from './websocket/status/status.gateway';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly statusWs: StatusGateway,
  ) {}

  @EventPattern('notificacao.entrada.rafael')
  async handleMessageReceived(@Payload() data: MessageBodyDto) {
    console.log('recebido', data);
    const resultadoProcessamento =
      await this.appService.handleMessageReceived(data);

    this.statusWs.server.emit('status@mensagem', resultadoProcessamento);
  }
}
