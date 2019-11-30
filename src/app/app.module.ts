import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MultiStepFormComponent } from './components/multi-step-form/multi-step-form.component';
import { FormatTitlePipe } from './pipes/format-title.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, MultiStepFormComponent, FormatTitlePipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
