import { Pipe, PipeTransform } from '@angular/core';
import { TipoImc } from './imc.model';

@Pipe(
    {
        name: 'imcpipe'
    }
)
export class ImcPipe implements PipeTransform {

    transform(valor: TipoImc): string {
        let valor_alfanumerico: string;
        valor_alfanumerico = TipoImc[valor];
        return valor_alfanumerico;
    }

}
