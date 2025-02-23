import { Route } from '@angular/router';
import { IngredientManagerComponent } from 'libs/apps/ingredient-manager/src/lib/ingredient-manager/ingredient-manager.component';

export const appRoutes: Route[] = [
    {
        path: '',
        redirectTo: 'ingredient-manager',
        pathMatch: "full"
    },
    {
        path: 'ingredient-manager',
        //loadComponent: ()=>import('@bake-a-weigh/ingredient-manager').then(a=> a.IngredientManagerModule),
        component: IngredientManagerComponent,
        loadChildren: ()=>import('@bake-a-weigh/ingredient-manager').then(a=> a.IngredientManagerModule)
    }
];
