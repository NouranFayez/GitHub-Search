import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule ,routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubDataService } from './github-data.service';
import { DetailsComponent } from './features/details/details.component';
import { MainComponent } from './features/main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    DetailsComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [GithubDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
