import { Injectable } from '@angular/core';
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private firebaseAuthentication: FirebaseAuthentication) { }
  timeout: 3000;

  createUser(emailAddress: string, password: string) {
    this.firebaseAuthentication.createUserWithEmailAndPassword(emailAddress, password);
  }

  userLogin() {
    this.firebaseAuthentication.signInWithEmailAndPassword();
  }

  twitterLogin() {
    this.firebaseAuthentication.signInWithTwitter();
  }

  googleLogin() {
    this.firebaseAuthentication.signInWithGoogle();
  }

  facebookLogin() {
    this.firebaseAuthentication.signInWithFacebook();
  }

  signOut() {
    this.firebaseAuthentication.signOut();
  }

  verifyPhone(phoneNumber: string) {
    this.firebaseAuthentication.verifyPhoneNumber(phoneNumber, this.timeout);
  }

  verifyEmail() {
    this.firebaseAuthentication.sendEmailVerification();
  }

  resetPassword(emailAddress: string) {
    this.firebaseAuthentication.sendPasswordResetEmail(emailAddress);
  }

  getAuthToken() {
    this.firebaseAuthentication.getIdToken();
  }
}
