import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'paper2',
    pathMatch: 'full'
  },
  {
    path: 'first-page',
    loadChildren: () => import('./pages/first-page/first-page.module').then( m => m.FirstPagePageModule)
  },
  {
    path: 'smallvehicle',
    loadChildren: () => import('./pages/smallvehicle/smallvehicle.module').then( m => m.SmallvehiclePageModule)
  },
  {
    path: 'paper1',
    loadChildren: () => import('./pages/paper1/paper1.module').then( m => m.Paper1PageModule)
  },
  {
    path: 'roadsign',
    loadChildren: () => import('./pages/roadsign/roadsign.module').then( m => m.RoadsignPageModule)
  },
  {
    path: 'dangersign',
    loadChildren: () => import('./pages/dangersign/dangersign.module').then( m => m.DangersignPageModule)
  },
  {
    path: 'marks',
    loadChildren: () => import('./pages/marks/marks.module').then( m => m.MarksPageModule)
  },
  {
    path: 'paper2',
    loadChildren: () => import('./pages/paper2/paper2.module').then( m => m.Paper2PageModule)
  },
  {
    path: 'paper3',
    loadChildren: () => import('./pages/paper3/paper3.module').then( m => m.Paper3PageModule)
  },
  {
    path: 'paper4',
    loadChildren: () => import('./pages/paper4/paper4.module').then( m => m.Paper4PageModule)
  },
  {
    path: 'paper5',
    loadChildren: () => import('./pages/paper5/paper5.module').then( m => m.Paper5PageModule)
  },
  {
    path: 'limitsign',
    loadChildren: () => import('./pages/limitsign/limitsign.module').then( m => m.LimitsignPageModule)
  },
  {
    path: 'dontsign',
    loadChildren: () => import('./pages/dontsign/dontsign.module').then( m => m.DontsignPageModule)
  },
  {
    path: 'othersign',
    loadChildren: () => import('./pages/othersign/othersign.module').then( m => m.OthersignPageModule)
  },
  {
    path: 'commandsign',
    loadChildren: () => import('./pages/commandsign/commandsign.module').then( m => m.CommandsignPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
