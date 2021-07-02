import { Component, OnInit } from '@angular/core';

import { Frase } from 'app/shared/frase.model';
import { FRASES } from './frases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
  public frases: Frase[] = FRASES;
  public instrucao: string = 'Traduza a frase:';
  public resposta: string = '';

  public rodada: number = 0;
  public rodadaFrase: Frase;

  constructor() {
    console.log(this.frases);
    this.rodadaFrase = this.frases[this.rodada]
  }

  ngOnInit() {
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
    
  }

  /**
   * verificaResposta
   */
  public verificarResposta(): void {
    console.log('Verificar resposta: ', this.resposta);
    // Trocar frase
    this.rodada++
    this.rodadaFrase = this.frases[this.rodada];
  }

}
