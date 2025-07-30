import { bootstrapApplication } from '@angular/platform-browser';
import { NotificacaoComponent } from './app/app';
import { appConfig } from './app/app.config';

bootstrapApplication(NotificacaoComponent, appConfig)
  .catch((err) => console.error(err));
