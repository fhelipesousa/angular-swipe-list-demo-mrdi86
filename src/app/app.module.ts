import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { SwipeListModule } from "@nhochdrei/angular-swipe-list";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    SwipeListModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
