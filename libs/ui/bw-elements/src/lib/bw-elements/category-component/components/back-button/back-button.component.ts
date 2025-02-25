/*

Back Button


PURPOSE :
 > Aid User in navigating back to the parent category.


ELEMENTS :
 > svg / for icon
 


VIEWS : none


INTERACTIVITY : none


FUNCTIONALITY : none


SENDS DATA TO : nowhere


GETS DATA FROM : nowhere


ROUTES TO : nowhere


USER STORY :
 > User should see an arrow indicating it directs them back to the parent category.



*/







import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-bwui-back-button',
  imports: [CommonModule],
  templateUrl: './back-button.component.html',
  styleUrl: './back-button.component.css',
})
export class BackButtonComponent {}
