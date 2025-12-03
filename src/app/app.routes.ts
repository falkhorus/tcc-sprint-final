import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NexusComponent } from './nexus/nexus.component';
import { MuralComponent } from './mural/mural.component';
import { TermosComponent } from './termos/termos.component';
import { PerfilComponent } from './perfil/perfil.component';

export const routes: Routes = [

    // se o caminho for vazio na url, redireciona para login
    {path: '', component: HomeComponent, pathMatch: 'full'},


    //Essas são as rotas principais
    { path: 'login', component: LoginComponent} ,
    {path: 'register', component: RegisterComponent},
    { path: 'nexus', component: NexusComponent },  
    { path: 'mural', component: MuralComponent },
    { path: 'home', component: HomeComponent},
    { path: 'termos',  component: TermosComponent},
    { path: 'perfil', component: PerfilComponent}



];
