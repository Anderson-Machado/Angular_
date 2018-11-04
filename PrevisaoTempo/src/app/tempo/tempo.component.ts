import { Component, OnInit } from '@angular/core';
import { TempService } from '../temp.service';
import { query } from './preTempo';

@Component({
  selector: 'app-tempo',
  templateUrl: './tempo.component.html',
  styleUrls: ['./tempo.component.css']
})
export class TempoComponent implements OnInit {

  previsao:query;
  flag:boolean = false;
  

  cidade:string ="Niterói"
  constructor( private tempo:TempService) { }

  ngOnInit() {
 this.previsao ={
  count:0,
  created:'',
  lang:'',
  results: {
    channel: {
      language:'',
      lastBuildDate:'',
      link:'',
     title:'',
     ttl:'',
     wind:{
       chill:0,
       direction:0,
       speed:0
     },
     units:{
       distance:'',
       pressure:'',
       speed:'',
       temperature:''
     },
      location:{
        city:'',
        country:'',
        region:''
      },
      atmosphere:{
        humidity:0,
        pressure:0,
        rising:0,
        visibility:0
      },description:'',
      astronomy:{
        sunrise:'',
        sunset:''
      },
      image:{
        height:0,
        link:'',
        title:'',
        url:'',
        width:0
      },
      item:{
        condition:{
          code:0,
          date:'',
          forecast: [],
          temp:0,
          text:''
        },
        description:'',
        lat:0,
        link:'',
        long:0,
        pubDate:'',
        title:''
      }
      
    }
  }

 }  
  }

  getPrevisaoTempo()
  {
      this.tempo.geTtPrvisao(this.cidade).subscribe(resut=>{
       this.previsao = resut
      });
    
     
  }

  getTeste()
  {
       this.flag = true;
     
     
  }

  // converterFahrenheitToCelsius(f:number)
  // { debugger;
  //   return (5.0 / 9.0) * (f - 32);
  // }

}
