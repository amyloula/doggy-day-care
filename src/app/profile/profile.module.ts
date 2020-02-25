import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ProfilePageRoutingModule } from "./profile-routing.module";

import { ProfilePage } from "./profile.page";
import { DogComponent } from "./dog/dog.component";
import { EditComponent } from "./edit/edit.component";
import { OwnerComponent } from "./owner/owner.component";
import { SettingsComponent } from "./settings/settings.component";
import { CalendarComponent } from '../calendar/calendar.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ProfilePageRoutingModule],
  declarations: [
    ProfilePage,
    DogComponent,
    EditComponent,
    OwnerComponent,
    CalendarComponent,
    SettingsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProfilePageModule {}
