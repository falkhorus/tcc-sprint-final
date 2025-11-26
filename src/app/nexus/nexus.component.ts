import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component'; // Importa o arquivo

@Component({
  selector: 'app-nexus',
  standalone: true,
  imports: [HeaderComponent], // Autoriza o uso
  templateUrl: './nexus.component.html',
  styleUrl: './nexus.component.css'
})
export class NexusComponent {

  opcaoSelecionada = 'contratando'

  alterarOpcao(opcao: string) {
    this.opcaoSelecionada = opcao;
  }
 
}
