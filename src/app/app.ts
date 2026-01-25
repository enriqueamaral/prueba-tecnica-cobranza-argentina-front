import { Component, signal } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from "./pages/products/products.component";

@Component({
  selector: 'app-root',
  imports: [ HttpClientModule, FormsModule, ProductsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {
  protected readonly title = signal('prueba_tecnica');
}
