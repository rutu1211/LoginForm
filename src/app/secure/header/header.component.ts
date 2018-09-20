import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd, RouteConfigLoadEnd, RoutesRecognized, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  selection : string;
href:string;
  constructor(private router: Router,private route:ActivatedRoute) {
  //   router.events.subscribe((val) => {
  //     // see also 
  //     console.log(val instanceof NavigationEnd) 
  // });
  //   router.events.subscribe((event :Event) => { 
  //   //  console.log(val);
  
    
  //   console.log(event);
  //     console.log("Navigation End")
     

      
  //   })
   }

  ngOnInit() {
    this.href = this.router.url;
    console.log("url is",this.router.url); 
          if(this.href.includes('home/home'))
          {
            this.selection = 'home';
          }
          if(this.href.includes('Suggestions')){
            this.selection = 'Suggestions';
          }
         
   
  }
  headerClickEvent(){
    console.log("called");
    if (this.router.url.includes('home/home')){
      this.selection = 'home';
    }
    else if (this.router.url.includes('Suggestions')){
      this.selection = 'Suggestions';
    }
  }
  }

