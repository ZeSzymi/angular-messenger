import { MessageService } from './services/messages.service';
import { UsersService } from './services/users.service';
import { AuthService } from './services/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MessangerComponent } from './users/messanger/messanger.component';
import { UsersComponent } from './users/users.component';
import { CallbackComponent } from './callback/callback.component';
import { HomeComponent } from './home/home.component';
import { HttpModule } from '@angular/http';
import { DisableEnterDirective } from './directives/disableEnter.directive';
import { RemoveMessengerService } from './services/remove-messenger.service';
import { UserPanelComponent } from './user-panel/user-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    CallbackComponent,
    MessangerComponent,
    DisableEnterDirective,
    UserPanelComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AuthService, RemoveMessengerService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
