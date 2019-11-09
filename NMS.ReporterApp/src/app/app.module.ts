import { Broadcaster } from './shared/broadcaster';
import { ApiModule } from './api.module';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PrivatePageModule } from './private/private.module';
import { PublicPageModule } from './public/public.module';
import { ComponentsModule } from './components/components.module'
import { SigninPageModule } from './public/signin/signin.module';
import { HttpClientModule } from '@angular/common/http';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';

import { HttpServiceProvider } from './shared/providers/http.service';
import { LocalServiceProvider } from './shared/providers/local.service';
import { StorageServiceProvider } from './shared/providers/stroage.service';
import { UtilitiesServiceProvider } from './shared/providers/utilities.service';






@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(),
    // ApiModule.forRoot('http://10.1.18.211:8080/'),
    ApiModule.forRoot("/"),
    SigninPageModule,
    PublicPageModule,
    PrivatePageModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ComponentsModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    Broadcaster,
    HttpServiceProvider,
    StorageServiceProvider,
    LocalServiceProvider,
    UtilitiesServiceProvider,
    Diagnostic,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
