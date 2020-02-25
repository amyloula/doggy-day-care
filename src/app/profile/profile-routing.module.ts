import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilePage } from './profile.page';
import { DogComponent } from './dog/dog.component';
import { OwnerComponent } from './owner/owner.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage
  },
  {
    path: 'dog/:id',
    component: DogComponent
  },
  {
    path: 'dog/:id/edit',
    component: EditComponent
  },
  {
    path: 'user',
    component: OwnerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule {}
