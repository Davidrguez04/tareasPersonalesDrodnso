import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: '', component: TaskComponent }, // Página principal
  { path: 'about', component: AboutComponent } // Página "Acerca de"
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
