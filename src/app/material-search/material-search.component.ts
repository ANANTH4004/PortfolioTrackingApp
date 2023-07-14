import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-material-search',
  templateUrl: './material-search.component.html',
  styleUrls: ['./material-search.component.scss']
})
export class MaterialSearchComponent implements OnInit{
  ngOnInit(): void {
    this.filteredData = this.flightList;
  }
  searchTerm !: string;
  flightList: FlightEntity[] = [{ city: "Chennai", IATACode: "ITAT89" }, { city: "Mumbai", IATACode: "ITAT89" },
  { city: "Kolkata", IATACode: "ITAT89" }, { city: "Pune", IATACode: "ITAT89" }, { city: "Paris", IATACode: "ITAT89" }]

  filteredData !: FlightEntity[];
  filterPlace(){
    this.filteredData = this.flightList
    .filter((place: { city: string; }) => place.city.toLowerCase().includes(this.searchTerm.toLowerCase()))
    .slice(0, 100);

  }
  selectedPlace(place : FlightEntity){
    console.log(place);
  }

}

export interface FlightEntity {
  city: string;
  IATACode: string;
}