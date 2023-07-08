import { Component, OnDestroy, OnInit } from '@angular/core';
import {Car} from '../Interface/car'
import { HttpClient } from '@angular/common/http';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { SearchComponent } from '../search/search.component';
import { MessageService } from 'primeng/api';


interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [DialogService, MessageService]
})
export class HomeComponent implements OnInit, OnDestroy{


    ref: DynamicDialogRef | undefined;
    selectedCity: City | undefined;
    coinLists : any | undefined;

    visible: boolean = false;
    constructor(private http : HttpClient, public dialogService: DialogService,public messageService: MessageService){}
  ngOnDestroy(): void {
    if (this.ref) {
      this.ref.close();
  }
  }

    ngOnInit() {

         this.http.get("https://api.coinlore.net/api/tickers/").subscribe(data =>{
          this.coinLists = data;
          console.log(data);
        });

    }
    showDialog() {
      let width = '50%';
      if (window.innerWidth < 768) {
        width = '90%';
      }
      this.ref = this.dialogService.open(SearchComponent,{
        header : "Search Coin",
        width : width,
        height:'80%'
      });
    }
}
