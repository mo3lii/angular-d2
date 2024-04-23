import { productsList } from './../../Model/ProductsList';
import { IProduct } from './../../Model/iproduct';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ProductItemComponent } from './product-item/product-item.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  products: IProduct[] = productsList;
}
