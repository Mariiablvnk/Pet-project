import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './components/base/base.component';
import { HelpUsComponent } from './components/help-us/help-us.component';
import { InfoComponent } from './components/info/info.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PetDetailsComponent } from './components/pet-details/pet-details.component';
import { PetlistComponent } from './components/petlist/petlist.component';
import { PetsResolver } from './services/pets.resolver';

const routes: Routes = [
  {path: '', component: BaseComponent},
  {path: 'pets', component: PetlistComponent},
  {path: 'pets/:id', component: PetDetailsComponent, resolve: {data: PetsResolver}},
  {path: 'help', component: HelpUsComponent},
  {path: 'info', component: InfoComponent},

  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
