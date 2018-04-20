import { Observable } from 'rxjs/rx';

const obs = Observable.interval(500).take(5);
// obs.subscribe(value => console.log(' recibido ' + value));

// obs.map(j => 2 * j).subscribe(valor => console.log('v = ' + valor));
obs.map(j => 2 * j).filter(x => x > 4).subscribe(valor => console.log('v = ' + valor));
