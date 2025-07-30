import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { MessageBodyDto } from './dto/message-body.dto';
import { MessageStatus } from './types/status';

@Injectable()
export class AppService {
  constructor(@Inject('STATUS_SERVICE') private rabbitClient: ClientProxy) {}

  private simularProcessamento(message: MessageBodyDto): {
    mensagemId: string;
    status: MessageStatus;
  } {
    const numero = Math.floor(Math.random() * 10) + 1;
    const payload = {
      mensagemId: message.mensagemId,
      status: MessageStatus.PROCESSADO_SUCESSO,
    };

    if (numero > 2) {
      this.rabbitClient.emit('notificacao.status.rafael', payload);
      return payload;
    }

    payload.status = MessageStatus.FALHA_PROCESSAMENTO;
    this.rabbitClient.emit('notificacao.status.rafael', payload);
    return payload;
  }

  async handleMessageReceived(message: MessageBodyDto): Promise<{
    mensagemId: string;
    status: MessageStatus;
  }> {
    return await new Promise((resolve) =>
      setTimeout(
        () => {
          const processamentoResposta = this.simularProcessamento(message);
          resolve(processamentoResposta);
        },
        1000 + Math.random() * 1000,
      ),
    );
  }
}
