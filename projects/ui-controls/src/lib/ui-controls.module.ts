import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { UiControlsComponent } from './ui-controls.component';
import { CardListComponent } from './card-list/card-list.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    UiControlsComponent,
    CardListComponent
  ],
  imports: [
    CommonModule,
    DragDropModule
  ],
  exports: [
    UiControlsComponent,
    CardListComponent
  ]
})
export class UiControlsModule { }
