import { Component, OnInit } from '@angular/core';
import { Stages } from '../model/stage';
import { StageesService } from '../servises/stagees.service';

@Component({
  selector: 'app-add-stage',
  templateUrl: './add-stage.component.html',
  styleUrls: ['./add-stage.component.css']
})
export class AddStageComponent implements OnInit {
  stage : Stages;
  constructor( private service:StageesService ) { }

  ngOnInit(): void {
    this.stage = new Stages();

  }
  save(){
    console.log(this.stage)
    //this.stage = new Stages();
    this.service.addStage(this.stage).subscribe();
  }

}
