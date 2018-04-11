import { Subject } from 'rxjs/Subject';
export class RemoveMessengerService {
    onRemoveMessage = new Subject<string[]>();
}
