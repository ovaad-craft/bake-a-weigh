/*

TestChild

PURPOSE :

VIEWS :

ELEMENTS :

INTERACTIVITY :

GETS DATA FROM :

SENDS DATA TO :

USER STORIES :

*/





import { Component, Input }    from '@angular/core';
import { CommonModule } from '@angular/common';






@Component({
    selector    : 'lib-test-child',
    imports     : [
        CommonModule,
    ],
    templateUrl : './test-child.component.html',
    styleUrls   : [ './test-child.component.css' ]
})

export class TestChildComponent {

    
    
    @Input() SomeProp01! : GHGHG SomeProp02;
    @Input() SomeProp03! : string;

    



    

}