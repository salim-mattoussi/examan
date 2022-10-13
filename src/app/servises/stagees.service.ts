import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stages } from '../model/stage';

@Injectable({
  providedIn: 'root'
})
export class StageesService {
url :"http://localhost:3000/stages";
  constructor(private http :HttpClient  ) { }

  getStage(){
    return this.http.get<Stages[]>(this.url)
  }
  addStage(stage:Stages){
    return this.http.post(this.url, stage)
  }
  updateStage(stage: Stages){
    return this.http.put(this.url+stage.id, stage)
  }
  deleteStage(id:number){
    return this.http.delete(this.url+id)
  }
}
