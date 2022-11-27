import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.page.html',
  styleUrls: ['./contato.page.scss'],
})
export class ContatoPage implements OnInit {

  constructor(public nav:NavController) { }
  abrirPagina(){
    this.nav.navigateForward('loginn')
  }
  abrirPagina1(){
    this.nav.navigateForward('home')
  }

  ngOnInit() {
  }

}
