import { Component, ContentChild, OnInit } from '@angular/core';
import { url } from 'inspector';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {
  personas = [
    {
      nome : "Doutor Marcelo - Ginecologista",
      url : "assets/icon/doutor.jpg",
      
    },
    {
      nome : "Doutor Frederico - Pediatra",
      url : "assets/icon/2.jpg",
      
    },
    {
      nome : "Doutor Jefersson - Cardiologista",
      url : "assets/icon/3.jpg",
      
    },
    {
      nome : "Doutora Roberta - Dentista",
      url : "assets/icon/4.jpg",
    

    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
