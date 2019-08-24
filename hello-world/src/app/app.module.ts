import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegisterComponent } from './register/register.component';
import { IfComponent } from './if/if.component';
import { ForComponent } from './for/for.component';
import { ArrayComponent } from './array/array.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    LoginComponentComponent,
    RegisterComponent,
    IfComponent,
    ForComponent,
    ArrayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
