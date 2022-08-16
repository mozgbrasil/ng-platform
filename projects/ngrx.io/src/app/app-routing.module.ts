import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { LandingHomeComponent } from './features/landing/home/home.component';

const routes: Routes = [];
// const routes: Routes = [{ path: '', component: LandingHomeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
