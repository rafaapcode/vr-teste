import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

interface NotificacaoResponse {
 mensagemId: string;  conteudoMensagem: string;
}

interface WSNotificacaoEvent {
    mensagemId: string;
    status: 'PROCESSADO_SUCESSO' | 'FALHA_PROCESSAMENTO';
}

@Injectable({ providedIn: 'root' })
export class NotificacoesService {
  private http = inject(HttpClient);
  constructor(private socket: Socket) {}

  sendNotificacao(conteudoMensagem: string): Observable<NotificacaoResponse> {
    return this.http.post<NotificacaoResponse>('http://localhost:3000/api/notificar', {
      mensagemId: uuidv4(),
      conteudoMensagem,
    });
  }

  getNotificacao(): Observable<WSNotificacaoEvent> {
    return this.socket.fromEvent<WSNotificacaoEvent>('status@mensagem')
  }
}
