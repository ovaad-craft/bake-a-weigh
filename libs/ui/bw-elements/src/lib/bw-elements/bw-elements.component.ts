/*

Modal Component



PURPOSE :
 > Serve as a means of presenting additional views without hiding or routing away from the current view. 


ELEMENTS :
 > Close Button
 > Container for inserting views via content projection


VIEWS : none


INTERACTIVITY :
 > Toggles itself off when close button gets clicked.


FUNCTIONALITY : none


SENDS DATA TO : nowhere


GETS DATA FROM : nowhere


ROUTES TO : nowhere


USER STORY :
 > User should see the expected view when the modal loads.
 > Modal should close when user clicks close button.
 > Modal should close when user clicks a "complete" or "cancel" button inside the nested view.

*/







import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-bw-elements',
  imports: [CommonModule],
  templateUrl: './bw-elements.component.html',
  styleUrl: './bw-elements.component.css',
})
export class BwElementsComponent {}
