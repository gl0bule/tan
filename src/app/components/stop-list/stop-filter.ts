import {Pipe, PipeTransform} from '@angular/core';

@Pipe({ name: 'stopFilter' })
export class StopFilter implements PipeTransform {
    transform(stops: Array<Stop>, filter: string) {
        return stops.filter(stop => stop.libelle.toLowerCase().includes(filter.toLowerCase()));
    }
}