import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { ListaModule } from './lista/lista.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { ChackSampleComponent } from './chack-sample/chack-sample.component';
import { CardComponent } from './card/card.component';
import { CompAtributosComponent } from './comp-atributos/comp-atributos.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    ChackSampleComponent,
    CardComponent,
    CompAtributosComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ListaModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
