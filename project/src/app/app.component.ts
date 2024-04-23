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
  
  //This is one way Data Binding (Component.ts to Component.html )
  clsName='one';
  clsName2='two';


  mainClass='main';
  subClass='sub';


SwitchValue='one';

user=[
  {id:1, name:'Surya'},   //Array of objects
  {id:2, name:'john'},
]



userId=[{userid:10,username:'cody'},
  {userid:20,username:'cena'},
  {userid:30,username:'rock'},       //Array of objects
  {userid:40,username:'roman'},
  {userid:50,username:'randy'},
]
// interpolation step 1
subTitle='This is the interpolation';
step=1;

inter = {
  titleId:'1',              //Objects
  sub:'Interpolation',    
  status:'Active'
};

colorRange='red';
property='pb';
placeHolderValue='ENTER THE VALUE';

// This is property binding with that exsiting i have added attribute buinding
hrefval='https://google.com';
updated='https://youtube.com';



  readme(){
    alert("inn")
  }
  showAlert(id:any){
    console.log("inside alert");
    alert('Alert is success'+ id);
  }
}
