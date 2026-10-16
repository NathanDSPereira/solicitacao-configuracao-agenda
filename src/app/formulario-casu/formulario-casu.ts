import { Component, inject } from '@angular/core';
import { createUrlTreeFromSnapshot, RouterLink } from '@angular/router';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-casu',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './formulario-casu.html',
  styleUrl: './formulario-casu.css',
})
export class FormularioCasu {
  private fb = inject(FormBuilder);

  formulario = this.fb.group({
    tipo: ['', Validators.required],
    solicitante: ['', Validators.required],
    dataSolicitacao: ['', Validators.required],
    resumo: ['', Validators.required],
    descricao: ['', Validators.required],
    dataRegencia: ['', Validators.required],

    // Campos obrigatórios para o tipo Antecipação
    dataHoraAnterior: [''],
    tipoAtendimentoAnterior: [''],
    dataHoraDestino: [''],
    tipoAtendimentoDestino: [''],

    // Campos obrigatórios para o tipo Bloqueio
    dataBloqueio: [''],
    tipoAtendimentoBloqueio: [''],
    dataReposicao: [''],
    tipoAtendimentoReposicao: [''],

    // Campos obrigatórios para o tipo Ajuste Tempo de Slot
    tempoAtual: [''],
    diaSemanaAtual: [''],
    tipoAtendimentoAtual: [''],
    tempoNovo: [''],
    diaSemanaNovo: [''],
    tipoAtendimentoNovo: [''],

    // Campos obrigatórios para o tipo Alterações permanentes
    dataHoraPermanenteAtual: [''],
    tipoAtendimentoPermanenteAtual: [''],
    dataHoraPermanenteNovo: [''],
    tipoAtendimentoPermanenteNovo: [''],
  });

  get tipoSelecionado(): string {
    return this.formulario.controls.tipo.value ?? '';
  }

  ngOnInit() {
    this.formulario.controls.tipo.valueChanges.subscribe((tipo) => {
      this.limparValidacoesCondicionais();
      this.limparCamposEspecificos();

      const camposObrigatorios: string[] = [];

      switch (tipo) {
        case 'Antecipação':
          camposObrigatorios.push(
            'dataHoraAnterior',
            'tipoAtendimentoAnterior',
            'dataHoraDestino',
            'tipoAtendimentoDestino',
          );
          break;
        case 'Bloqueio':
          camposObrigatorios.push(
            'dataBloqueio',
            'tipoAtendimentoBloqueio',
            'dataReposicao',
            'tipoAtendimentoReposicao',
          );
          break;
        case 'Ajuste Tempo de Slot':
          camposObrigatorios.push(
            'tempoAtual',
            'diaSemanaAtual',
            'tipoAtendimentoAtual',
            'tempoNovo',
            'diaSemanaNovo',
            'tipoAtendimentoNovo',
          );
          break;
        case 'Alterações permanentes':
          camposObrigatorios.push(
            'dataHoraPermanenteAtual',
            'tipoAtendimentoPermanenteAtual',
            'dataHoraPermanenteNovo',
            'tipoAtendimentoPermanenteNovo',
          );
          break;
      }

      camposObrigatorios.forEach((campo) => {
        const campoPegado = this.formulario.get(campo);
        campoPegado?.setValidators(Validators.required);
        campoPegado?.updateValueAndValidity();
      });
    });
  }

  private limparValidacoesCondicionais(): void {
    const campos = [
      'dataHoraAnterior',
      'tipoAtendimentoAnterior',
      'dataHoraDestino',
      'tipoAtendimentoDestino',
      'dataBloqueio',
      'tipoAtendimentoBloqueio',
      'dataReposicao',
      'tipoAtendimentoReposicao',
      'tempoAtual',
      'diaSemanaAtual',
      'tipoAtendimentoAtual',
      'tempoNovo',
      'diaSemanaNovo',
      'tipoAtendimentoNovo',
      'dataHoraPermanenteAtual',
      'tipoAtendimentoPermanenteAtual',
      'dataHoraPermanenteNovo',
      'tipoAtendimentoPermanenteNovo',
    ];

    campos.forEach((campo) => {
      const campoPegado = this.formulario.get(campo);
      campoPegado?.clearValidators();
      campoPegado?.updateValueAndValidity();
    });
  }

  private limparCamposEspecificos(): void {
    const campos = [
      'dataHoraAnterior',
      'tipoAtendimentoAnterior',
      'dataHoraDestino',
      'tipoAtendimentoDestino',
      'dataBloqueio',
      'tipoAtendimentoBloqueio',
      'dataReposicao',
      'tipoAtendimentoReposicao',
      'tempoAtual',
      'diaSemanaAtual',
      'tipoAtendimentoAtual',
      'tempoNovo',
      'diaSemanaNovo',
      'tipoAtendimentoNovo',
      'dataHoraPermanenteAtual',
      'tipoAtendimentoPermanenteAtual',
      'dataHoraPermanenteNovo',
      'tipoAtendimentoPermanenteNovo',
    ];

    campos.forEach((campo) => {
      const campoPegado = this.formulario.get(campo);
      campoPegado?.clearValidators();
      campoPegado?.updateValueAndValidity();
    });
  }

  enviar(): void {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    console.log('Formulário enviado com sucesso:', this.formulario.value);
  }
}
