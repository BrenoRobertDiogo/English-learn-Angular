import { Component, OnInit, EventEmitter, Output } from '@angular/core';

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

  public progresso: number = 0;

  public tentativas: number = 3;

  @Output() public encerrarJogo = new EventEmitter()



  constructor() {
    this.atualizaRodada()
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
    if (this.rodadaFrase.frasePtBr.toLowerCase() == this.resposta.toLowerCase()) {

      // Trocar frase
      this.rodada++
      this.progresso += 100 / this.frases.length;
      console.log("Tamanho:  "+ this.frases.length);
      
      if (this.rodada == this.frases.length) {
        this.encerrarJogo.emit('vitoria')
        return;
      }

      this.atualizaRodada()
      return;
    }
    this.tentativas--
    if (this.tentativas === -1) {
      this.encerrarJogo.emit('derrota')
    }
  }

  /**
   * atualizaRodada
   */
  public atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada]
    this.resposta = '';
  }



}
