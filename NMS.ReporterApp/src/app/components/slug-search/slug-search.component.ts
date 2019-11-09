import { HttpServiceProvider } from './../../shared/providers/http.service';
import { Component, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { LocalServiceProvider } from '../../shared/providers/local.service';

@Component({
  selector: 'app-slug-search',
  templateUrl: './slug-search.component.html',
  styleUrls: ['./slug-search.component.scss']
})
export class SlugSearchComponent  {
  @Input() BeatId;
  selectedCites: any =[];
  sc;
  searchText:string;
  Temp = [];
  constructor(
    public mdlCtrl: ModalController,
    public params: NavParams,
    public httpService : HttpServiceProvider,
    public localService : LocalServiceProvider
  ) {
    console.log('Hello RDetailPopupComponent Component');
    // this.selectedCites = params.get('categories');
    // console.log(this.selectedCites);
  //   this.selectedCites = [
  //     {
  //       value:'SAHIWALCTD'
  //     },
  //     {
  //       value:'SAHIWALTRAGEDY'
  //     },
  //     {
  //       value:'PAFSTRIKE'
  //     },
  //     {
  //       value:'INDIANJET'
  //     },
  // ]
    this.Temp =this.selectedCites
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    let userId = this.localService.getUserid;
    this.httpService.getSlugByUser(userId,this.BeatId)
    .subscribe((data:any)=>{
      console.log(data);
      if(data){
        this.selectedCites = data.Slugs;
      }
     
    })
  }
  select(sc){
    this.sc = sc;
    this.mdlCtrl.dismiss(this.sc);
    // console.log(sc);
  }
  onSearchChange(searchValue : any ) {
    let searchVariable = searchValue.detail.value;
    this.selectedCites = this.Temp;
    let searchdata = this.selectedCites.filter(it => {
      return ((it.SlugTitle || "").toLowerCase()).includes(searchVariable.toLowerCase()); // only filter country name
    });
    this.selectedCites = searchdata;
  //  console.log(searchdata);
  }
  addNew(){
    this.mdlCtrl.dismiss({value:this.searchText});
  } 
  dismiss() {

  }
}
