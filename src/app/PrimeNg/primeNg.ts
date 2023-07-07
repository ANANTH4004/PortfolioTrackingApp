import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SelectButtonModule } from 'primeng/selectbutton';
import { MultiSelectModule } from 'primeng/multiselect';
import { SliderModule } from 'primeng/slider';
import { SpinnerModule } from 'primeng/spinner';
import { ProgressBarModule } from 'primeng/progressbar';
import { TabViewModule } from 'primeng/tabview';
import { AccordionModule } from 'primeng/accordion';
import { MenuModule } from 'primeng/menu';
import { PanelModule } from 'primeng/panel';
import { ToolbarModule } from 'primeng/toolbar';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { PrimeNGConfig } from 'primeng/api';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
// Import other PrimeNG modules you need

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule,
    CalendarModule,
    DropdownModule,
    TableModule,
    DialogModule,
    ToastModule,
    CardModule,
    CheckboxModule,
    RadioButtonModule,
    InputTextareaModule,
   
    SelectButtonModule,
    MultiSelectModule,
    SliderModule,
    SpinnerModule,
    ProgressBarModule,
    TabViewModule,
    AccordionModule,
    MenuModule,
    PanelModule,
    DynamicDialogModule,
    ToolbarModule,
    // Import other PrimeNG modules you need
  ],
  exports: [
    
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule,
    CalendarModule,
    DropdownModule,
    DynamicDialogModule,
    TableModule,
    DialogModule,
    ToastModule,
    CardModule,
    CheckboxModule,
    VirtualScrollerModule,
    RadioButtonModule,
    InputTextareaModule,
    SelectButtonModule,
    MultiSelectModule,
    SliderModule,
    SpinnerModule,
    ProgressBarModule,
    TabViewModule,
    AccordionModule,
    MenuModule,
    PanelModule,
    ToolbarModule,
    // Export other PrimeNG modules you need
  ]
})
export class PrimeNGModule { }
