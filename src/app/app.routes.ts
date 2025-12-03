
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NexusComponent } from './nexus/nexus.component';
import { MuralComponent } from './mural/mural.component';
import { TermosComponent } from './termos/termos.component';
import { PerfilComponent } from './perfil/perfil.component';
import { authGuard } from './auth.guard';




export const routes: Routes = [


    

    // se o caminho for vazio na url, redireciona para login
    {path: '', component: HomeComponent, pathMatch: 'full'},


    
    // --- ROTAS PÚBLICAS (Qualquer um acessa) ---
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'termos', component: TermosComponent }, 
    


    { 
        path: 'mural', 
        component: MuralComponent, 
        canActivate: [authGuard] 
    },
    { 
        path: 'perfil', 
        component: PerfilComponent, 
        canActivate: [authGuard] 
    },
    { 
        path: 'nexus', 
        component: NexusComponent, 
        canActivate: [authGuard] 
    },


    

    // ROTA CORINGA (Se digitar url errada, vai pra home)
    { path: '**', redirectTo: 'home' }

    



];
