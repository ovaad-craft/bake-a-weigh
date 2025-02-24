import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryIndex } from '@bake-a-weigh/site-types';

@Component({
  selector: 'lib-bwui-subcategory-button',
  imports: [CommonModule],
  templateUrl: './subcategory-button.component.html',
  styleUrl: './subcategory-button.component.css',
})
export class SubcategoryButtonComponent {
  @Input() SubcategoryData! : CategoryIndex;
}
