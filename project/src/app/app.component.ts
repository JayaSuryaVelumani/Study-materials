import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'project';
  showMessage=true; 
  colorName= 'green';
  ColorValue='red';
  bgColorVal='#ccc';
  clsName='one';
  clsName2='two';
SwitchValue='one';

user=[
  {id:1, name:'Surya'},
  {id:2, name:'john'},
]



userId=[{userid:10,username:'cody'},
  {userid:20,username:'cena'},
  {userid:30,username:'rock'},
  {userid:40,username:'roman'},
  {userid:50,username:'randy'},
]

  readme(){
    
    console.log("Clicked")
  }
}
