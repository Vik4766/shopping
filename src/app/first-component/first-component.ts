import { Component } from '@angular/core';
import {CurrencyPipe } from '@angular/common';

enum Category {
  Electronics = 'Electronics',
  Clothing = 'Clothing',
  Home = 'Home',
  Books = 'Books',
  Sports = 'Sports'
};

@Component({
  selector: 'app-first-component',
  imports: [CurrencyPipe],
  templateUrl: './first-component.html',
  styleUrl: './first-component.css',
})
export class FirstComponent {


public name: string = 'LapTop';
public description: string[] = ['This is a description of the product.', 'This is another description.'];
public price: number = 1000;
public category: Category = Category.Electronics;
public isAvailable: boolean = true;




}
