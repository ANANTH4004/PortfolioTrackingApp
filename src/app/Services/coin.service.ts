import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CoinDetail } from '../Interface/CoinDetail';

@Injectable({
  providedIn: 'root'
})
export class CoinService {

  constructor(private http : HttpClient) { }
  getCoins(){
    return this.http.get<CoinDetail[]>('/assets/Json/portfolio.json');
  }
}
