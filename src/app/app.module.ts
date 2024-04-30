import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Add this import

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorizeComponent } from './authorize/authorize.component';
import { LoginComponent } from './login/login.component';
import { TaskComponent } from './task/task.component';
import { TodoModule } from './todo/todo.module';
import { HighlightPipe } from './highlight.pipe';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AuthorizeComponent,
    LoginComponent,
    TaskComponent,
    HighlightPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Add this line
    TodoModule
  ],
  providers: [
    provideClientHydration(),

    //HashLocationStrategy or PathLocationStrategy u can use
    { provide:LocationStrategy,useClass:HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
