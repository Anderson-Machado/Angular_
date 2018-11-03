//**Representa os objetos para modelar dados vindo do webservice */
export class ModelPrevisao
{
   temp:number;
   date:string;
   city_name:string;
   forecast: fore[];
}

export class fore{
    date:string;
    max:number;
    min:number;
}