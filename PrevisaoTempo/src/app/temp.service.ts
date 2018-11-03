import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TempService {
 Url:string = " https://api.hgbrasil.com/weather/?format=json&woeid=455903&array_limit=2&fields=only_results,temp,city_name,forecast,max,min,date&key=SUA-CHAVE "
  constructor(private serv:HttpClient) { 
 
  }
  
  geTtPrvisao()
  {

  }
}
