/*

Add Button


PURPOSE :
 > Serve as an indicator that the user would like to add an item to the respective category. 


ELEMENTS :
 > container for plus sign
 > p / for displaying the noun to use for item.


VIEWS : none


INTERACTIVITY : none


FUNCTIONALITY : none


SENDS DATA TO : nowhere


GETS DATA FROM :
 > Category Component


ROUTES TO : nowhere


USER STORY :
 > User should see a plus sign indicating that this is for adding an item.
 > User should see text that reads "add (item noun)".



*/







import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-bwui-add-button',
  imports: [CommonModule],
  templateUrl: './add-button.component.html',
  styleUrl: './add-button.component.css',
})
export class AddButtonComponent {
  @Input() ItemNoun! : string;
}
