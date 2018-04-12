import { UserPanelComponent } from './user-panel/user-panel.component';
import { CallbackComponent } from './callback/callback.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const appRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'callback', component: CallbackComponent},
    { path: 'home', component: HomeComponent },
    { path: 'users', component: UsersComponent, canActivate: [AuthGuardService] },
    { path: 'user-panel', component: UserPanelComponent, canActivate: [AuthGuardService] }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
    providers: [AuthGuardService]
})
export class AppRoutingModule {}
