import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { MessageBodyDto } from './dto/message-body.dto';

@Injectable()
export class ApiService {
  constructor(@Inject('MESSAGES_SERVICE') private rabbitClient: ClientProxy) {}

  notificar(messageBodyDto: MessageBodyDto) {
    this.rabbitClient.emit('notificacao.entrada.rafael', messageBodyDto);
    return { message: 'Mensagem recebida' };
  }
}
