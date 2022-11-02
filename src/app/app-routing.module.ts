import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';

const routes: Routes = [
//   {
//     path:'',redirectTo:'app',pathMatch:'full'
//   },
// {
//   path:'logincomponent',component:LogincomponentComponent
// },
// {

// }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
