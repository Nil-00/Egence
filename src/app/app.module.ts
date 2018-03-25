import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { MainToolbarComponent } from './main-toolbar/main-toolbar.component';

@NgModule({
  declarations: [AppComponent, NavigationbarComponent, MainContentComponent, MainToolbarComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
