import { Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { ValidacionComponent } from './components/validacion/validacion.component';


export const routes: Routes = [
        {
            path : 'formulario_vacaciones',
            component : FormularioComponent
        },
        {
            path : '',
            redirectTo : 'formulario_vacaciones',
            pathMatch : 'full'
        },
        {
            path : 'validation_user',
            component : ValidacionComponent
        }
];
