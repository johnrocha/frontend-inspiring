import { Component } from '@angular/core';
import { legends } from '../names/nameslist';
var _ = require('lodash');


@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss']
})
export class SearchPage {
  searchInput : string;
  results = [];
  active: boolean = false;

  legedary: Array<string>;
  allLegedary:any;
  querytext: string;

  constructor(){
    this.querytext = '';
    this.legedary = legends;
    this.allLegedary = this.legedary;
  }

  filterLegend(leg: any){
    let val = leg.target.value;
    
    if (val && val.trim() != ''){
      this.active = true;
      this.legedary = _.values(this.allLegedary);
      this.legedary = this.legedary.filter((legendary)=>{
        return (legendary.toLowerCase().indexOf(val.toLowerCase())>-1)
      })
      this.results = this.legedary;
    } else {
      this.active = false;
      this.legedary = this.allLegedary;
      
    }
  }

  ngOnInit() {}


  onSearch() {
    console.log(`Search: ${this.searchInput}`);
  }
}
