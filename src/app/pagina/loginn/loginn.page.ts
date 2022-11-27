import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-loginn',
  templateUrl: './loginn.page.html',
  styleUrls: ['./loginn.page.scss'],
})
export class LoginnPage implements OnInit {

  constructor(public nav:NavController) { }
  abrirPagina1(){
    this.nav.navigateForward('home');
  }
  abrirPagina(){
    this.nav.navigateForward('contato')
  }

  ngOnInit() {
  }

}
