import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {query} from './tempo/preTempo'
@Injectable({
  providedIn: 'root'
})
export class TempService {
// Url:string = " https://api.hgbrasil.com/weather/?format=json&woeid=455903&array_limit=2&fields=only_results,temp,city_name,forecast,max,min,date&key=SUA-CHAVE "
  constructor(private serv:HttpClient) { 
 
  }
  
  geTtPrvisao(cidade:string)
  {    let Url:string = "https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='Niterói, ak')&format=json";
       let result = this.serv.get<query>(Url);      
      return result;
  }
}
