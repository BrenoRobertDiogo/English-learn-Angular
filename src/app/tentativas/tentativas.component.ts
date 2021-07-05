import { Component, Input, OnDestroy, OnInit, OnChanges } from '@angular/core';
import { Coracao } from 'app/shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges{
  @Input() public tentativas: number

  public coracoes: Array<Coracao> = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true),
  ]

  constructor() { 
    
    
  }

  ngOnChanges(){

    console.log(this.tentativas);
    if (this.tentativas !== this.coracoes.length) {
      let indice = this.coracoes.length - this.tentativas
      this.coracoes[indice -1].cheio = false
    }
  }
  ngOnInit() {
  }


}
