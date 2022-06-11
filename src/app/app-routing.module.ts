import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';

const routes: Routes = [
{
  path : '',
  component : AppComponent,
  children :[
    {   
        path : '',
        component : LoginScreenComponent
    }
  ]
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
