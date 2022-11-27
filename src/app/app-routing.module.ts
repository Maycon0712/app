import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'loginn',
    pathMatch: 'full'

  },
  
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pagina/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'botao',
    loadChildren: () => import('./pagina/botao/botao.module').then( m => m.BotaoPageModule)
  },
  {
    path: 'loginn',
    loadChildren: () => import('./pagina/loginn/loginn.module').then( m => m.LoginnPageModule)
  },
  {
    path: 'lista',
    loadChildren: () => import('./pagina/lista/lista.module').then( m => m.ListaPageModule)
  },
  {
    path: 'contato',
    loadChildren: () => import('./pagina/contato/contato.module').then( m => m.ContatoPageModule)
  },
  {
    path: 'conta',
    loadChildren: () => import('./pagina/conta/conta.module').then( m => m.ContaPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
