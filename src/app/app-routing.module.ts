import { CallbackComponent } from './callback/callback.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import { TemporaryComponent } from './temporary/temporary.component';

const appRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'callback', component: CallbackComponent},
    { path: 'home', component: HomeComponent },
    { path: 'users', component: UsersComponent, canActivate: [AuthGuardService] },
    { path: 'temporary', component: TemporaryComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
    providers: [AuthGuardService]
})
export class AppRoutingModule {}
