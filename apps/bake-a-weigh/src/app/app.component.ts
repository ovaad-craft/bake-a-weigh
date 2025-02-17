import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

import { IngredientManagerComponent } from '@bake-a-weigh/ingredient-manager';




@Component({
  imports: [NxWelcomeComponent, RouterModule, IngredientManagerComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'bake-a-weigh';
}
