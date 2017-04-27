import { HttpService } from './http.service';
import { StorageService } from './storage/storage.service';
import { SocketService } from './socket.service';

export const GLOBAL_SERVICES = [
    HttpService,
    StorageService,
    SocketService
];