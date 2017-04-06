import { HttpService } from './http.service';
import { StorageService } from './storage/storage.service';

export const GLOBAL_SERVICES = [
    HttpService,
    StorageService
];