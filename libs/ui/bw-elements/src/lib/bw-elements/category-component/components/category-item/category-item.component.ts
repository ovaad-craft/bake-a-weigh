import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryIndexItem } from '@bake-a-weigh/site-types';

@Component({
  selector: 'lib-bwui-category-item',
  imports: [CommonModule],
  templateUrl: './category-item.component.html',
  styleUrl: './category-item.component.css',
})
export class CategoryItemComponent {
  @Input() ItemData! : CategoryIndexItem;
}
