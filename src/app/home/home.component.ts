import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { SearchComponent } from '../search/search.component';
import { MessageService } from 'primeng/api';
import { MatTableDataSource } from '@angular/material/table';
import { CoinDetail } from '../Interface/CoinDetail';
import { MatPaginator } from '@angular/material/paginator';
import { CoinService } from '../Services/coin.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [DialogService, MessageService]
})
export class HomeComponent implements OnInit, OnDestroy {

  //coin Details
  displayedColumns: string[] = ['coinId', 'coinName', 'coinPrice', '_1h', '_24h', '_7d', 'coinMKT', 'holdings', 'PNL'];
  coinDetails = new MatTableDataSource<CoinDetail>();
  @ViewChild(MatPaginator) paginator !: MatPaginator;

  //Search Component
  ref: DynamicDialogRef | undefined;
  coinLists: any | undefined;
  visible: boolean = false;
  constructor(private http: HttpClient, public dialogService: DialogService, public messageService: MessageService,
    private coinService: CoinService) { }


  ngOnInit() {

    //coin Search
    this.http.get("https://api.coinlore.net/api/tickers/").subscribe(data => {
      this.coinLists = data;
      console.log(data);
    });

    //Coin Details
    this.coinService.getCoins().subscribe(data => {
      console.log(data);
      this.coinDetails.data = data;
    });
  }
  ngAfterViewInit(): void {
    this.coinDetails.paginator = this.paginator;
  }
  ngOnDestroy(): void {
    if (this.ref) {
      this.ref.close();
    }
  }
  showDialog() {
    let width = '50%';
    if (window.innerWidth < 768) {
      width = '90%';
    }
    this.ref = this.dialogService.open(SearchComponent, {
      header: "Search Coin",
      width: width,
      height: '80%'
    });
  }
}
