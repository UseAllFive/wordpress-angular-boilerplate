import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/publishReplay';

// http://www.syntaxsuccess.com/viewarticle/caching-with-rxjs-observables-in-angular-2.0
export function cache(o: Observable<any>): Observable<any> {
  return o
    .publishReplay(1)
    .refCount()
    ;
}
