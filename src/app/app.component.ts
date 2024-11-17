import { Component,HostListener} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';

import './days.pttype';
import { DaybBox } from './lcz.container.dayboxes';

import {CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray} from '@angular/cdk/drag-drop';


import { insistsz } from './instructions';


@Component({
  selector: 'lczCalendar',
  standalone: true,
  imports: [CdkDrag  ,RouterOutlet,  CdkDropList ,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})

export class AppComponent {
       constructor(
       private daybBoxes:DaybBox ,
       private valvezx:insistsz
       ){}
       
@HostListener('document:click', ['$event'])
    outsideClick(event: MouseEvent): void {
            this.valvezx.showsMyMonthsz=false;
            this.valvezx.ShowYyears=false;
   }

    ngOnInit() {
        this.daybBoxes.loadspPastmonthsvzday();//precentsVBday
        this.daybBoxes.loadnxknowsdays();//nowadays
        this.daybBoxes.loadizxnexdays();//aftterloadday

        function POup(baybe:DaybBox) { 
            baybe.datingnow();
        } 
  
      setInterval(POup, 6568,this.daybBoxes);
    }

  SubmitButton()
  {
     if(typeof this.valvezx.appointments[this.clicked]=='undefined')
       this.valvezx.appointments[this.clicked]=[];
     this.valvezx.appointments[this.clicked][this.valvezx.appointments[this.clicked].length]="body : ["+this.inputString+"] Inserted "+this.ShowThisDay()+' '+this.InputStringDate.toString();
  }


  nowadays(){
      return this.valvezx.nowadays;
  }

  prixzday(){
      return this.valvezx.prixzday;
  }

  aftterloadday(){
      return this.valvezx.aftterloadday;
  }

  YearClicked(year:number)
  {
     this.daybBoxes.YearClicked(year.toString());
     this.valvezx.clicked=this.valvezx.nd.getFullYear().toString()+this.valvezx.nd.getMonth().toString().valid()+this.valvezx.clicked.substr(6,2);
     this.daybBoxes.loadspPastmonthsvzday();//precentsVBday
     this.daybBoxes.loadnxknowsdays();//nowadays
     this.daybBoxes.loadizxnexdays();//aftterloadday
  }

    OneOfDayChosened(day:number)
    {
         this.valvezx.clicked=this.valvezx.nd.getFullYear().toString()+this.valvezx.nd.getMonth().toString().valid()+day.toString().valid();
    }

    GetNextMonths()
    {
       this.daybBoxes.GetNextMonths();
       this.valvezx.clicked=this.valvezx.nd.getFullYear().toString()+this.valvezx.nd.getMonth().toString().valid()+this.valvezx.clicked.substr(6,2);
       this.daybBoxes.loadspPastmonthsvzday();//precentsVBday
       this.daybBoxes.loadnxknowsdays();//nowadays
       this.daybBoxes.loadizxnexdays();//aftterloadday
    }

    GetPreviouseMnths()
    {
       this.daybBoxes.GetPreviouseMnths();
       this.valvezx.clicked=this.valvezx.nd.getFullYear().toString()+this.valvezx.nd.getMonth().toString().valid()+this.valvezx.clicked.substr(6,2);
       this.daybBoxes.loadspPastmonthsvzday();//precentsVBday
       this.daybBoxes.loadnxknowsdays();//nowadays
       this.daybBoxes.loadizxnexdays();//aftterloadday
    }

  MonthClicked(dym:string){
     this.daybBoxes.MonthClicked(dym);
     this.valvezx.clicked=this.valvezx.nd.getFullYear().toString()+this.valvezx.nd.getMonth().toString().valid()+this.valvezx.clicked.substr(6,2);
     this.daybBoxes.loadspPastmonthsvzday();//precentsVBday
     this.daybBoxes.loadnxknowsdays();//nowadays
     this.daybBoxes.loadizxnexdays();//aftterloadday
  }

  ThisShowingNnnmMonth(e:Event){
    this.daybBoxes.toggleDateMonths();
    e.stopPropagation();
    e.preventDefault();
  }

   todayeasy(){
      return this.valvezx.TodayFullLengthText;
   }

   showyear(){
      return this.valvezx.nd.getFullYear();
   }

   selledMonth(){
      return this.valvezx.nd.myMonth();
   }

   getthisdayBgJcolor(d:number)          {
     return this.daybBoxes.BGGroundge(d);
   }

   afontedsetColor(d:number)          {
         return this.daybBoxes.afontedsetColor(d);
   }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.valvezx.appointments[parseInt(this.valvezx.clicked)], event.previousIndex, event.currentIndex);
  }


   toggleYears(e:Event){
     this.daybBoxes.CeilingYearofYears()
     this.daybBoxes.toggleYears();
     e.stopPropagation();
     e.preventDefault();
  }

  showsMyMonthsz(){
    return this.valvezx.showsMyMonthsz;    
  }

  ShowYyears(){
    return this.valvezx.ShowYyears;    
  }

           clicked=0;
appointments=new Array(1).fill('').map(()=>new Array(1).fill(''));
  isApp()
  {
     this.clicked=parseInt(this.valvezx.clicked);this.appointments=this.valvezx.appointments;
       if(typeof this.valvezx.appointments[parseInt(this.valvezx.clicked)]=='undefined' || this.valvezx.appointments[parseInt(this.valvezx.clicked)].length===0)
	  return false;
       else
          return true;
	  
  }

    ShowThisDay()
    {
	return this.daybBoxes.ShowThisDay();
    }
  CeilingYearofYears(){
       return this.valvezx.SelectingYearofYears;
  }

  InputStringDate:string="";
  inputString:string="";
 }