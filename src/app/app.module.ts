import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { FormsModule } from '@angular/forms';
import { MsalModule, MsalService, MSAL_INSTANCE } from '@azure/msal-angular';
import { IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';
export function MSALInstanceFactory(): IPublicClientApplication{
  return new PublicClientApplication({
    auth: {
      clientId: '07748146-1eaf-4262-9f30-30298ecfb1a8',
      redirectUri: 'http://localhost:4200',
      authority:'https://login.microsoftonline.com/1f4beacd-b7aa-49b2-aaa1-b8525cb257e0'
    },
    cache: {
      cacheLocation: "sessionStorage", // This configures where your cache will be stored
      storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
  });
}
@NgModule({
  declarations: [
    AppComponent,
    LogincomponentComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,
    AppRoutingModule,FormsModule,MsalModule,
  ],
  providers: [
    {
      provide: MSAL_INSTANCE,
      useFactory:MSALInstanceFactory,
    },
    MsalService,HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
