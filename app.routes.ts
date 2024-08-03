import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { DeptComponent } from './pages/dept/dept.component';

export const routes: Routes = [
    {path:"Home",component:HomeComponent},
    {path:"Contact",component:ContactComponent},
    {path:"About",component:AboutComponent},
    {path:"Dept",component:DeptComponent}

];

