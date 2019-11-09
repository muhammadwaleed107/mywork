import { LocalServiceProvider } from './shared/providers/local.service';
import { LoginResponseDTO } from 'src/app/shared/models/LoginResponse';
import { Broadcaster } from './shared/broadcaster';
import { SharedClass } from './shared/shared.class';
import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';
import { Subscription } from 'rxjs';
import { HttpServiceProvider } from './shared/providers/http.service';
import { MenuDTO } from './shared/models';
import { Beat } from './shared/models/beat';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  locationEnable;
  userMenu: MenuDTO;
  userMeta: LoginResponseDTO;
  currCord = {
    lat: '24.833486',
    lng: '67.073795'
  }

  assignCor = {
    lat: '24.829146',
    lng: '67.073328'
  }
  currentLocation = "No Location Found";
  public appPages = [
    {
      title: 'New News',
      url: '/home/new-news',
      icon: 'paper',
      count: false,
    },

    {
      title: 'Existing News',
      url: '/home',
      icon: 'document',
      count: false,
    },
    {
      title: 'Pending Assignments',
      url: '/home/exist-assignment',
      icon: 'today',
      count: true,
    },

    {
      title: 'Closed Assignments',
      url: '/home/closed-assignment',
      icon: 'briefcase',
      count: false,
    },
    {
      title: 'Guest Assignments',
      url: '/home/guest-assignment',
      icon: 'person',
      count: true,
    },
    {
      title: 'Upcoming Happenings',
      url: '/home/upcoming-happening',
      icon: 'megaphone',
      count: false,
    },
    {
      title: 'Happening Calender',
      url: '/home/happening-calender',
      icon: 'calendar',
      count: false,
    },
    {
      title: 'League',
      url: '/home/league-stats',
      icon: 'trophy',
      count: false,
    },
    // {
    //   title: 'Notification',
    //   url: '/home/mynotification',
    //   icon: 'list',
    //   count:false,
    // },
    // {
    //   title: 'Digital Portal',
    //   url: '/home/digital-portal',
    //   icon: 'list'
    // },
    // {
    //   title: 'New Assignment',
    //   url: '/home/add-assignment',
    //   icon: 'list'
    // },
    // {
    //   title: 'New Monitoring',
    //   url: '/home/news-monitoring',
    //   icon: 'list'
    // }
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private navCtrl: NavController,
    private sharedClass: SharedClass,
    private geolocation: Geolocation,
    private httpService: HttpServiceProvider,
    private diagnostic: Diagnostic,
    private broadCaster: Broadcaster,
    private localService: LocalServiceProvider
  ) {

    this.initializeApp();
    let local = +this.calcCrow(this.currCord, this.assignCor).toFixed(1)

    console.log('DISTANCE:', local / 1000);
    this.broadCaster.on('menuLoad')
      .subscribe((data: any) => {
        console.log('broadcaster working');
        this.loadMenu();
        // console.log(this.localService.getUserMeta);
      })
    this.userMenu = {
      FullName: "",
      CityLoc: "",
      CurrLoc: "",
      Beat: [new Beat()],
      UserImage: "",
      MarkLoc: ""
    };

  }
  loadMenu() {
    this.userMeta = this.localService.getUserMeta;
    this.userMenu.FullName = this.userMeta.User[0].FullName;
    this.userMenu.CityLoc = this.userMeta.User[0].LocationName;
    this.userMenu.UserImage = this.userMeta.User[0].ProfilePicture;
    // this.userMenu.Beat = this.userMeta.Beats;
  }
  calcCrow(coords1, coords2) {
    // var R = 6.371; // km
    var R = 6371000;
    var dLat = this.toRad(coords2.lat - coords1.lat);
    var dLon = this.toRad(coords2.lng - coords1.lng);
    var lat1 = this.toRad(coords1.lat);
    var lat2 = this.toRad(coords2.lat);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d;
  }
  toRad(Value) {
    return Value * Math.PI / 180;
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  logout() {
    this.navCtrl.navigateRoot('/sign-in');
  }
  locationChange(event) {
    if (event == true) {
      console.log('working');
      if (this.platform.is('cordova')) {
        this.getLocationMobile();
      }
      else {
        this.getLocationWEb();
      }


    }
    else {
      this.currentLocation = "No Location Found";
    }
    console.log(event);
  }
  getLocationMobile() {
    this.diagnostic.isLocationEnabled().then((isEnabled) => {
      if (!isEnabled && this.platform.is('cordova')) {
        this.currentLocation = "No Location Found";
        this.locationEnable = false
        //handle confirmation window code here and then call switchToLocationSettings
        this.diagnostic.switchToLocationSettings();
      }
      else {
        console.log('elseboxworking');
        this.geolocation.getCurrentPosition().then((resp) => {
          // resp.coords.latitude
          // resp.coords.longitude

          this.httpService.getLocationName(resp.coords.latitude, resp.coords.longitude)
            .subscribe((data: any) => {
              console.log(data);
              if (data) {
                this.currentLocation = data.results[0].formatted_address;
              }
            })
        }).catch((error) => {
          console.log('Error getting location', error);
        });
        // this.geolocation.getCurrentPosition().then((resp) => {
        //   // resp.coords.latitude
        //   // resp.coords.longitude

        //   this.httpService.getLocationName(resp.coords.latitude,resp.coords.longitude)
        //   .subscribe((data:any)=>{
        //     console.log(data);
        //     if(data){
        //       this.currentLocation = data.results[0].formatted_address;
        //     }
        //   })
        //  }).catch((error) => {
        //    console.log('Error getting location', error);
        //  });
      }
    });
    // console.log('locationMob');
    // this.geolocation.getCurrentPosition().then((resp) => {
    //   console.log('res=>',resp);
    //   this.httpService.getLocationName(resp.coords.latitude,resp.coords.longitude)
    //   .subscribe((data:any)=>{

    //     if(data){
    //       this.currentLocation = data.results[0].formatted_address;
    //     }
    //   })
    //  }).catch((error) => {
    //    console.log('Error getting location', error);
    //  });
  }

  getLocationWEb() {
    navigator.geolocation.getCurrentPosition(succ => {
      if (succ) {
        this.sharedClass.presentToast('succ');
        this.currCord.lat = succ.coords.latitude.toString();
        this.currCord.lng = succ.coords.longitude.toString();
        console.log('DISTANCE:', this.calcCrow(this.currCord, this.assignCor))
        this.httpService.getLocationName(succ.coords.latitude, succ.coords.longitude)
          .subscribe((data: any) => {
            console.log(data);
            if (data) {
              this.currentLocation = data.results[0].formatted_address;
            }
          })
        console.log('loc=>', succ);
      }
    })
  }
}
