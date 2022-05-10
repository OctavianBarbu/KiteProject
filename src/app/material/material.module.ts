import { NgModule } from '@angular/core';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

const MaterialComponents = []

@NgModule({
  imports: [

  ],
  exports: [
    MatTableModule,
    MatSortModule
  ]
})
export class MaterialModule { }
