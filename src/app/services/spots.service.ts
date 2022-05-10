import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotsService {

  spots = new Subject<string>();
  public spots$ = this.spots.asObservable();
  apiURL = " https://626bb1356a86cd64adc037fc.mockapi.io/";

  fav_spots = []

  constructor(private http: HttpClient) { }

  public get_spots() {
    return this.http.get<any>(this.apiURL+"spot");
  }

  public get_fav_spots() {
    return this.http.get<any>(this.apiURL+"favourites")
  }

  public addFav(id:number) {
    console.log('ad to favorites')
    return this.http.post<any>(this.apiURL+"favourites", {id:id})
  }

  public removeFav(id:number) {
    return this.http.delete<any>(this.apiURL+"favourites/"+id)
  }
  
  public add_spot(data: any) {
    return this.http.post<any>(this.apiURL+"spot", data);
  }

  

}
