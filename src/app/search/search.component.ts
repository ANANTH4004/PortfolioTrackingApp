import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {


  coinList : any;
  filteredCoin : any;
  coinName !:string;
  originalCoinList!: any[];
  selectedcoin !: string;
  constructor(private http : HttpClient){}
  ngOnInit(): void {
    this.http.get("https://api.coinlore.net/api/tickers/").subscribe(data =>{
      this.coinList= data;
      this.originalCoinList = this.coinList.data;
      this.filteredCoin= data;
      console.log(data);
    });
  }

  //coin Search function
  search():void{
      this.filteredCoin.data = this.originalCoinList.filter((coin: { name: string }) =>
      coin.name.toLowerCase().startsWith(this.coinName.toLowerCase())
    );

  }

  // get the selected coin
  selectedCoin(event: any){

    console.log(this.selectedcoin);
  }
}
