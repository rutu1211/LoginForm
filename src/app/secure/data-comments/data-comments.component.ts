import { Component, OnInit } from '@angular/core';
import { SuggetionsService } from '../suggetions/suggetions.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-data-comments',
  templateUrl: './data-comments.component.html',
  styleUrls: ['./data-comments.component.css']
})
export class DataCommentsComponent implements OnInit {
  private listData;
  id : number;
  constructor(private suggetion:SuggetionsService,private route:ActivatedRoute) { 
    this.id = this.route.snapshot.params.id;
    
  }

  ngOnInit() {
  
    this.getPostById(this.id);
   }

  getSuggetions(){
    let result ;
     this.suggetion.getPostList().then(res => {
       this.listData = res;
   })
  }
   getPostById(id){
    let result ;
     this.suggetion.getPostById(id).then(res => {
       this.listData = res;
   })

 }
}
