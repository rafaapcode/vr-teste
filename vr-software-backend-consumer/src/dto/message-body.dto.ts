import { IsNotEmpty, IsString, IsUUID, MinLength } from 'class-validator';

export class MessageBodyDto {
  @IsString({ message: '"mensagemId" deve ser uma string' })
  @IsNotEmpty({ message: '"mensagemId" é obrigatório' })
  @IsUUID(undefined, { message: '"mensagemId" deve ser um UUID' })
  mensagemId: string;

  @IsString({ message: '"conteudoMensagem" deve ser uma string' })
  @IsNotEmpty({ message: '"conteudoMensagem" não pode ser vazia' })
  @MinLength(5, {
    message: '"conteudoMensagem" deve ter no mínimo 5 caracteres',
  })
  conteudoMensagem: string;
}
