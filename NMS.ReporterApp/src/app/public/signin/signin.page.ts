import { LocalServiceProvider } from './../../shared/providers/local.service';
import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validator, Validators } from '@angular/forms';
import { SharedClass } from '../../shared/shared.Class';
import { HttpServiceProvider } from 'src/app/shared/providers/http.service';
import { LoginResponse, LoginResponseDTO } from 'src/app/shared/models/LoginResponse';
import { StorageServiceProvider } from 'src/app/shared/providers/stroage.service';
import { StorageKey } from 'src/app/shared/enums/storagekey';
import { User } from 'src/app/shared/models';



@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  loginForm: FormGroup;

  error_message: {
    username: [
      { type: "required", message: "User Name is requires" }
    ]
    password: [
      { type: "required", message: "Password is requires" },
      { type: "minLength", message: "Password lenght must be longer then 6 characters" },
      { type: "maxLength", message: "Password lenght must be smaller then 30 characters" }
    ]

  }
  constructor(
    public menuCtrl: MenuController,
    public formBuilder: FormBuilder,
    public sharedClass: SharedClass,
    public navCtrl: NavController,
    public httpService: HttpServiceProvider,
    public storage: StorageServiceProvider,
    public localService : LocalServiceProvider
  ) {
    this.loginForm = this.formBuilder.group({
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ])),
      username: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });

  }

  ngOnInit() {

    this.menuCtrl.enable(false, '1');

    let user: User = this.localService.getUserid;
    if (user.id) {
      this.navCtrl.navigateRoot('/home');
    }
  }
  login() {
    if (this.loginForm.value.username == "admin" && this.loginForm.value.username == "admin") {
      this.navCtrl.navigateRoot('/home')
      this.sharedClass.presentToast('Login Successfully');
      console.log('Succ');
    }
    else {
      this.sharedClass.presentToast('Username or Password Incorrect')
      console.log('False');
    }
  }
  getMetadata(id){
    this.httpService.getUseMetaInfo(id)
    .subscribe((data:LoginResponseDTO)=>{
      if(data.User.length>0){
        this.localService.setUserMeta = data;
            this.navCtrl.navigateRoot('/home');
      }
    });
  }
  loginv2() {
    this.httpService.userLogin(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe((data: LoginResponse) => {
        if (data) {
          if (data.IsSuccess === true) {
            let user = new User();
            user.id = data.UserId;
            this.storage.setProperty(StorageKey.User, user);
            this.sharedClass.presentToast('Successfully Login');
            //  this.getMetadata(data);
            this.navCtrl.navigateRoot('/home');
          }
          else {
            this.sharedClass.presentToast('Failed Login');
          }
        }
      })
  }
}
