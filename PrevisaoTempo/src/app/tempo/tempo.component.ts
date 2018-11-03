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
  
  cidade:string ="Niterói"
  constructor( private tempo:TempService) { }

  ngOnInit() {
 this.previsao ={
  count:0,
  created:'',
  lang:'',
  results: null

 }  
  }

  getPrevisaoTempo()
  {
      this.tempo.geTtPrvisao(this.cidade).subscribe(resut=>{
       this.previsao = resut;
       console.log('Recebendo os dados',this.previsao);
      } 
      //this.previsao = resut
      );
      
  
  }

}
