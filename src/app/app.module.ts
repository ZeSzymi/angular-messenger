import { MessageService } from './services/messages.service';
import { UsersService } from './services/users.service';
import { AuthService } from './services/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MessangerComponent } from './messanger/messanger.component';
import { UsersComponent } from './users/users.component';
import { CallbackComponent } from './callback/callback.component';
import { HomeComponent } from './home/home.component';
import { HttpModule } from '@angular/http';
import { DisableEnterDirective } from './directives/disableEnter.directive';
import { TemporaryComponent } from './temporary/temporary.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    CallbackComponent,
    MessangerComponent,
    DisableEnterDirective,
    TemporaryComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AuthService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
