import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { SocketIoConfig, provideSocketIo } from 'ngx-socket-io';


const config: SocketIoConfig = { url: 'http://localhost:8001', options: {transports: ['websocket']} };

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withFetch()),
    provideSocketIo(config)
  ]
};
