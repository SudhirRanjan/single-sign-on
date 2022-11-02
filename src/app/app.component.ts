import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-browser';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'sso-app';
  email:String="";
  password:String="";
  username:String="";
  baseUrl:String="";
  
  constructor(private msalService: MsalService,private httpClient: HttpClient  ) {

  }
  AuthenticateUser():Observable<String>{
    return this.httpClient.get(`${this.baseUrl}`, {responseType: 'text'});
  }
  ngOnInit(): void {
    this.msalService.instance.handleRedirectPromise().then(res=>{
      if(res!=null && res.account!=null){
        this.msalService.instance.setActiveAccount(res.account)
       //this.resData=res.account;
       this.email=res.account.username;
       console.log("home account is :"+this.email);
       //this.baseUrl="http://localhost:8080/app/login"+"/"+this.email;
       var output = this.email.split('');
       //console.log(output);

      this.AuthenticateUser().subscribe(data=>{console.log('BackEnd Response',data);})
      for(var i=0;i<output.length;i++) {
      if(output[i]!='_'){
      this.username=this.username+output[i];
      }
      else{
        break;
      }
     }
     //this.username=user;
    //  console.log("PersUsername is:"+this.username);
      }
      //get the username from response
      //console.log("username is "+res?.account?.username);
      //this.email=res?.account?.username;

    })
  }
  isLoggedIn() : boolean{
    return this.msalService.instance.getActiveAccount() != null
  }
  login(){
    this.msalService.loginRedirect();
//     this.msalService.loginPopup().subscribe((response: AuthenticationResult)=>{
// console.log("response"+response.account?.name)

    //   this.msalService.instance.setActiveAccount(response.account)
    //  });
  }
  logout()
  {
    this.msalService.logout();
  }
  logInUser()
  {
    this.email="sudhir_ranjan@gmail.com";
    var output = this.email.split('');
     console.log(output);
     var user="";
     for(var i=0;i<output.length;i++) {
      if(output[i]!='_'){
      user=user+output[i];
      }
      else{
        break;
      }
     }
     console.log("Persname is:"+user);

// if(this.email=="sudhir@persistent.com"&& this.password=="sudhir"){
//   console.log("welcome to dashboard");
//   }
//   else{
//     console.log("Unauthorised User:");
//   }
 }
  }
