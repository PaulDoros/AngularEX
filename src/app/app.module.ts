import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  IgxIconModule, IgxTreeModule
} from "igniteui-angular";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocalitatiPipe } from './localitati.pipe';
import { CafenelePipe } from './cafenele.pipe';
import { JudetPipe } from './judet.pipe';
import { SearchFilter } from './search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LocalitatiPipe,
    CafenelePipe,
    JudetPipe,
    SearchFilter
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IgxTreeModule,
	IgxIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
