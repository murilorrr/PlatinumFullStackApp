import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

interface TabelaItem {
  minimoVidas: number;
  codigo: number;
  faixa1: string;
  faixa2: string;
  faixa3: string;
  nome: string;
}

@Component({
  selector: 'app-planium-create-propose-form',
  templateUrl: './planium-create-propose-form.component.html',
  styleUrls: ['./planium-create-propose-form.component.scss'],
})
export class PlaniumCreateProposeFormComponent {
  constructor(private httpClient: HttpClient) {}

  public planoEscolhido: {
    minimoVidas: number;
    codigo: number;
    faixa1: string;
    faixa2: string;
    faixa3: string;
    nome: string;
  } | null = null;

  public planos: TabelaItem[] | [] = [];

  public informacaoDosBeneficiarios: { nome: string; idade: string }[] = [];

  public displayedColumns: string[] = [
    'minimoVidas',
    'nome',
    'faixa1',
    'faixa2',
    'faixa3',
    'choose',
  ];

  ngOnInit(): void {
    this.httpClient.get<TabelaItem[]>('http://localhost:3000/plan').subscribe(
      (data) => {
        this.planos = data;
      },
      (error) => {
        console.error('Erro na requisição:', error);
      }
    );
  }

  async onSubmit() {
    this.httpClient
      .post<any>('http://localhost:3000/beneficiario', {
        beneficiarios: this.informacaoDosBeneficiarios,
        plano: this.planoEscolhido?.codigo,
      })
      .subscribe(
        async (response) => {
          const aceito = await this.solicitarConfirmacao('Aceita a Proposta?', response.descricaoProposta, 'Aceito', 'Cancelar');
          if (aceito) this.httpClient
          .post<any>('http://localhost:3000/proposta', {
            id: response.id
          }).subscribe(
            async (_responseProposta) => {
              await Swal.mixin({customClass: {popup: 'dialog-medio'}}).fire({title: 'Confirmardo!', icon: 'success'})
            },
            (errorProposta) => {
              console.error(errorProposta);
            })
        },
        (error) => {
          console.error(error);
        }
      );
  }

  public async solicitarConfirmacao(
    title: string,
    text: string,
    buttonTextConfirm?: string,
    buttonTextCancel?: string
  ): Promise<boolean> {
    const swalEstilizada = Swal.mixin({
      customClass: {
        cancelButton: 'botao-cancelar-swal botao-swal',
        confirmButton: 'mat-flat-button mat-accent botao-swal',
        popup: 'dialog-medio',
      },
    });
    const { value: clienteDesejaProsseguirAlteracao } = await swalEstilizada.fire({
      icon: 'question',
      iconColor: '#F0AA0A',
      padding: '36px',
      title,
      text: text,
      cancelButtonText: buttonTextCancel ? buttonTextCancel.toUpperCase() : 'DESISTIR',
      confirmButtonText: buttonTextConfirm ? buttonTextConfirm.toUpperCase() : 'PROSSEGUIR',
      showCancelButton: true,
      showConfirmButton: true,
      allowOutsideClick: false,
      allowEscapeKey: false,
    });
    return clienteDesejaProsseguirAlteracao as boolean;
  }

  escolherPlano(element: any) {
    this.planoEscolhido = element;

    const defaultInfos: { nome: string; idade: string }[] = [];

    for (let index = 0; index < element.minimoVidas; index++) {
      defaultInfos.push({ nome: '', idade: '' });
    }

    this.informacaoDosBeneficiarios = defaultInfos;
  }

  isNotValid() {
    if (
      this.informacaoDosBeneficiarios.some((objectInfo) =>
        Object.values(objectInfo).some((value) => value == '')
      )
    )
      return true;
    return false;
  }

  adicionarNovoBeneficiario() {
    this.informacaoDosBeneficiarios.push({ nome: '', idade: '' });
    setTimeout(() => {
      let element = document.getElementById('add');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  }
}
