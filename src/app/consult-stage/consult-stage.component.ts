import { Component, OnInit } from '@angular/core';
import { Stages } from '../model/stage';
import { StageesService } from '../servises/stagees.service';

@Component({
  selector: 'app-consult-stage',
  templateUrl: './consult-stage.component.html',
  styleUrls: ['./consult-stage.component.css']
})
export class ConsultStageComponent implements OnInit {
  list : Stages[]
  constructor( private servise :StageesService) { }

  ngOnInit(): void {
    this.servise.getStage().subscribe(
      (data:Stages[])=>{this.list = data ; console.log(this.list)}
    );
  }
  incriment(stage :Stages){
    let i = this.list.indexOf(stage)
    if (i!=-1){
      this.list[i].nbrInteresse++ ;
    }

  }
  delete(stage:Stages){
    let i = this.list.indexOf(stage)
    if (i!=-1){
      this.servise.deleteStage(stage.id).subscribe(
        ()=>this.list.splice(i,1)
      );
    }
  }

}
