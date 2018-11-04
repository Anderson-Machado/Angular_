//**Representa os objetos para modelar dados vindo do webservice */
  export class query{
        count:number;
        created:string;
        lang:string;
        results: results;
     }

    export class results {
        channel: channel;
    }
     export class channel {
         astronomy:astronomy;
         atmosphere:atmosphere;         
         description:string;
         image:image;
         item:item;
         units: units;
         title:string;
         link:string;
         location:location;
         wind:wind;
         language:string;
         lastBuildDate:string;
         ttl:string;
       
     }
      export class units{
        distance:string;
        pressure:string;
        speed:string;
        temperature:string;
       }
      export class location{
        city:string;
        country:string;
        region:string;
       }
      export class wind {
        chill:number;
        direction:number;
        speed:number;
       }

       export class atmosphere {
         humidity:number;
         pressure:number;
         rising:number;
         visibility:number;
       }
      export class astronomy {
        sunrise:string;
        sunset:string;
       }
      export class image {
        title:string;
        width:number;
        height:number;
        link:string;
        url:string;
       }
       export class item{
        title:string;
        lat:number;
        long:number;
        link:string;
        pubDate:string;
        condition:condition;
        description:string;
       }
       export class condition {
         code:number;
         date:string;
         temp:number;
         text:string;
         forecast:forecast[];
        }
       export class forecast{
          code:number;
          date:string;
          day:string;
          high:number;
          low:number;
          text:string;
         }
         
        export class guid {
         isPermaLink:boolean
        }


//dj0yJmk9MFN3WHdNYU5KMEUyJmQ9WVdrOVlUZHZkR05wTXpJbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD00MA--