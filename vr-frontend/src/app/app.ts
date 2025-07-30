import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificacoesService } from './notificacoes.service';

interface Notificacao {
  msgId: string;
  status: string;
}

@Component({
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
  ],
  selector: 'app-notificacao',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class NotificacaoComponent implements OnInit {
  conteudoMensagem = '';
  notificacoes: Notificacao[] = [];
  private readonly notificacoesService = inject(NotificacoesService);
  constructor(private readonly snackBar: MatSnackBar){}

  ngOnInit(): void {
    this.notificacoesService.getNotificacao().subscribe((notificacao) => {
      const idx = this.notificacoes.findIndex(
        (n) => n.msgId === notificacao.mensagemId
      );
      this.notificacoes = this.notificacoes.with(idx, {
        ...this.notificacoes[idx],
        status: notificacao.status,
      });
    });
  }

  enviarNotificacao() {
    if (this.conteudoMensagem.trim()) {
      this.notificacoesService
        .sendNotificacao(this.conteudoMensagem)
        .subscribe({
          next: (config) => {
            this.notificacoes.push({
              msgId: config.mensagemId,
              status: 'AGUARDANDO PROCESSAMENTO',
            });
          },
          error: (error) => {
            this.snackBar.open(error.error.message[0], 'Fechar', {
              duration: 2500,
            })
          }
        });
      this.conteudoMensagem = '';
    }
  }
}
