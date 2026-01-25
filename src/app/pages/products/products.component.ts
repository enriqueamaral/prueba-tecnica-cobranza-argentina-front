import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {

  private productService = inject(ProductService);

  products = signal<Product[]>([]);
  showFormModal = signal(false);
  showDeleteModal = signal(false);
  showViewModal = signal(false);
  editing = signal(false);
  productView = signal<Product | null>(null);

  selectedId: number | null = null;

  form = new FormGroup({
    sku: new FormControl(''),
    nombre: new FormControl(''),
    precio: new FormControl(0),
    cantidad: new FormControl(0)
  });

  ngOnInit() {
    this.load();
  }

  load() {
    this.productService.getAll().subscribe({
      next: (data) => this.products.set(data)
    });
  }

  openNew() {
    this.editing.set(false);
    this.selectedId = null;
    this.form.reset({
      sku: '',
      nombre: '',
      precio: 0,
      cantidad: 0
    });
    this.showFormModal.set(true);
  }

  openEdit(p: Product) {
    this.editing.set(true);
    this.selectedId = p.id!;
    this.form.setValue({
      sku: p.sku,
      nombre: p.nombre,
      precio: p.precio,
      cantidad: p.cantidad
    });
    this.showFormModal.set(true);
  }

  openView(id: number) {
    this.productView.set(null);
    this.showViewModal.set(true);
    this.productService.getById(id).subscribe({
      next: (data) => this.productView.set(data)
    });
  }

  openDelete(id: number) {
    this.selectedId = id;
    this.showDeleteModal.set(true);
  }

  save() {
    const payload = this.form.value as Product;
    const request = this.editing() 
      ? this.productService.update(this.selectedId!, payload)
      : this.productService.create(payload);

    request.subscribe({
      next: () => {
        this.load();
        this.closeAll();
      }
    });
  }

  confirmDelete() {
    if (this.selectedId) {
      this.productService.delete(this.selectedId).subscribe({
        next: () => {
          this.load();
          this.closeAll();
        }
      });
    }
  }

  closeAll() {
    this.showFormModal.set(false);
    this.showDeleteModal.set(false);
    this.showViewModal.set(false);
    this.editing.set(false);
    this.productView.set(null);
    this.selectedId = null;
  }
}