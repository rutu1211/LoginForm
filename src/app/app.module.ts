import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ReactiveFormsModule} from '@angular/forms';
import { SecureComponent } from './secure/secure.component';
import { HeaderComponent } from './secure/header/header.component';
import { HomePageComponent } from './secure/home-page/home-page.component';
import { SuggetionsComponent } from './secure/suggetions/suggetions.component';
import { SuggetionsService } from './secure/suggetions/suggetions.service';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { DataCommentsComponent } from './secure/data-comments/data-comments.component';
import { PhotoAlbumComponent } from './secure/photo-album/photo-album.component';
import {PhotoAlbumService} from './secure/photo-album/photo-album.service';
import { DataDisplayComponent } from './secure/data-display/data-display.component';
import {  HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SecureComponent,
    HeaderComponent,
    HomePageComponent,
    SuggetionsComponent,
    DataCommentsComponent,
    PhotoAlbumComponent,
    DataDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule
,

  ],
  providers: [SuggetionsService, PhotoAlbumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
