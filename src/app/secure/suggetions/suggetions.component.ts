import { Component, OnInit } from '@angular/core';
import { SuggetionsService } from './suggetions.service';
import { Suggestions } from './suggestions';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-suggetions',
  templateUrl: './suggetions.component.html',
  styleUrls: ['./suggetions.component.css']
})
export class SuggetionsComponent implements OnInit {

  private listData:any;
  data: Suggestions[]= [];
  //EnterDataEnterPostData: FormGroup;
  submit= false;

  constructor(private suggetion:SuggetionsService, private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.getSuggetions();
    this.enterDate();

   }

  getSuggetions(){
    let result ;
    let dataResult : Suggestions ={};
     this.suggetion.getPostList().then(res => {
       this.listData = res;
     //  console.log(this.listData)
    //   console.log(this.listData[0].userId)
       for(var i = 0 ; i < this.listData.length; i++)
       {
         console.log(i);
         dataResult.Id1 = this.listData[i].userId;
         dataResult.Id2 = this.listData[i].id;
         dataResult.TitleName = this.listData[i].title;
         dataResult.BodyContent = this.listData[i].body;
         this.data.push(dataResult);
          dataResult = {};
        }
     console.log(this.data)
     
      // this.data = this.listData[0];
   })
   }

  //enterData(PostId, PostCount, PostTitle, PostBody){
   enterDate(){
    // var userId = localStorage.setItem('currentPostCount', PostCount.value);
    // var title = localStorage.setItem('currentPostTitle', PostTitle.value);
    // var body = localStorage.setItem('currentPostBody', PostBody.value);
  
    var title: 'foo';
    var body: 'bar';
    var userId: 1;
    this.suggetion.enterData(title,body,userId).then(res =>{
      console.log(res);
    })

   }

   onsubmit(PostId, PostCount, PostTitle, PostBody ){
    this.submit= true;

  

  }
  }

  