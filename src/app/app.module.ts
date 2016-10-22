import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { SearchComponent } from './search.component';
import { ClientListComponent } from './client/client-list.component';
import { TherapistListComponent } from './therapist/therapist-list.component';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

export const firebaseConfig = {
    apiKey: "AIzaSyB1YoqFwLH8yHfbrBvDPp6EIS9G9IYJVJs",
    authDomain: "trackr-23a42.firebaseapp.com",
    databaseURL: "https://trackr-23a42.firebaseio.com",
    storageBucket: "trackr-23a42.appspot.com",
    messagingSenderId: "767208206365"
  };

const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'search', component: SearchComponent },
      { path: 'clients', component: ClientListComponent },
      { path: 'therapists', component: TherapistListComponent }
    ]),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    SearchComponent,
    ClientListComponent,
    TherapistListComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
