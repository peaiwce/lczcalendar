import { Component,Injectable } from '@angular/core';
import { insistsz } from'./instructions';

@Injectable({
  providedIn: 'root'
})
export class DaybBox {

       constructor(
       private parentApi:insistsz
       ){}

    datingnow(){
	this.parentApi.TodayFullLengthText='Today is '+this.parentApi.Todayn.myDay()+' '+this.parentApi.Todayn.myMonth()+' '+this.parentApi.Todayn.getDate();
	this.parentApi.Todayn=new Date();
    }

    loadspPastmonthsvzday(){
	this.parentApi.firstMonthDayOfweek=this.getFirstDayOfWeek();
        this.parentApi.nd.setDate(0);
	this.parentApi.LastDayLastMonth=this.getLastDateOfMonth();
        this.parentApi.nd.setDate(this.parentApi.LastDayLastMonth+1);
	var Slthing=[];
        for(var i=0;i<this.parentApi.firstMonthDayOfweek;i++)
            Slthing[i]={id:1,val:this.parentApi.LastDayLastMonth-this.parentApi.firstMonthDayOfweek+i+1};
        this.parentApi.prixzday=Slthing;
    }

    loadnxknowsdays(){
	this.parentApi.lastDayOfTheMonth=this.getLastDateOfMonth();
	var Slthing=[];
        for(let i=0;i<=this.parentApi.lastDayOfTheMonth-1;i++)
            Slthing[i]={id:i+1,val:i+1};
	this.parentApi.nowadays=Slthing;
    }

    loadizxnexdays(){
	this.parentApi.firstMonthDayOfweek=this.getFirstDayOfWeek();
	this.parentApi.lastDayOfTheMonth=this.getLastDateOfMonth();
	var Slthing=[];
        for(var i=0,j=1;i<42-this.parentApi.firstMonthDayOfweek-this.parentApi.lastDayOfTheMonth;i++,j++)
            Slthing[i]={id:j,val:j};
	    this.parentApi.aftterloadday=Slthing;
    }






       BGGroundge(d:number){
            if(this.parentApi.Todayn.getDate().toString().valid()==d.toString().valid() && this.parentApi.Todayn.getMonth().toString().valid()==this.parentApi.nd.getMonth().toString().valid() && this.parentApi.Todayn.getFullYear()==this.parentApi.nd.getFullYear() && ((typeof this.parentApi.appointments[parseInt(this.parentApi.nd.getFullYear().toString()+this.parentApi.nd.getMonth().toString().valid()+d.toString().valid())])=='undefined'))
            {
	      if(this.parentApi.clicked.trim()==this.parentApi.nd.getFullYear().toString()+this.parentApi.nd.getMonth().toString().valid()+d.toString().valid().valid())
                return "#0c3f66";//only day is same as my date calendar day meaning this day and no extra event when day clicked
              else
                return 'lightgray';//only day is same as my date calendar day meaning this day and no extra event nor clicked one
                //mycollection[vji].style.color='black';
            }
            else if(this.parentApi.Todayn.getDate().toString().valid()==d.toString().valid() && this.parentApi.Todayn.getMonth().toString().valid()==this.parentApi.nd.getMonth().toString().valid() && this.parentApi.Todayn.getFullYear()==this.parentApi.nd.getFullYear())
            {
	      if(this.parentApi.clicked.trim()==this.parentApi.nd.getFullYear().toString()+this.parentApi.nd.getMonth().toString().valid()+d.toString().valid())
                return "#0c6660";//today's event - click sent before
	      else
                return '#df9d49';//today's event
                //mycollection[vji].style.color='white';
            }
            else if(((typeof this.parentApi.appointments[parseInt(this.parentApi.nd.getFullYear().toString()+this.parentApi.nd.getMonth().toString().valid()+d.toString().valid())])!='undefined'))
            {
	      if(this.parentApi.clicked.trim()==this.parentApi.nd.getFullYear().toString()+this.parentApi.nd.getMonth().toString().valid()+d.toString().valid())
                return '#660c42';//events
	      else
                return "#c42d60";//events
                //mycollection[vji].style.color='white';
            }
            else
            {
	      if(this.parentApi.clicked.trim()==this.parentApi.nd.getFullYear().toString()+this.parentApi.nd.getMonth().toString().valid()+d.toString().valid())
                return "#bfa300";
	      else
                return "white";	      
                //mycollection[vji].style.color='black';
            }
      }



       afontedsetColor(d:number){
            if(this.parentApi.Todayn.getDate().toString().valid()==d.toString().valid() && this.parentApi.Todayn.getMonth().toString().valid()==this.parentApi.nd.getMonth().toString().valid() && this.parentApi.Todayn.getFullYear()==this.parentApi.nd.getFullYear() && ((typeof this.parentApi.appointments[parseInt(this.parentApi.nd.getFullYear().toString()+this.parentApi.nd.getMonth().toString().valid()+d.toString().valid())])=='undefined'))
            {
	      if(this.parentApi.clicked.trim()==this.parentApi.nd.getFullYear().toString()+this.parentApi.nd.getMonth().toString().valid()+d.toString().valid())
                return 'white';//only day is same as my date calendar day meaning this day and no extra event when day clicked
              else
                return "black";//only day is same as my date calendar day meaning this day and no extra event nor clicked one
                //mycollection[vji].style.color='black';
            }
            else if(this.parentApi.Todayn.getDate().toString().valid()==d.toString().valid() && this.parentApi.Todayn.getMonth().toString().valid()==this.parentApi.nd.getMonth().toString().valid() && this.parentApi.Todayn.getFullYear()==this.parentApi.nd.getFullYear())
            {
                return "white";//today's event - clicked and not
            }
            else if(((typeof this.parentApi.appointments[parseInt(this.parentApi.nd.getFullYear().toString()+this.parentApi.nd.getMonth().toString().valid()+d.toString().valid())])!='undefined'))
            {
                return 'white';//events or click ev
            }
            else
            {
	      if(this.parentApi.clicked.trim()==this.parentApi.nd.getFullYear().toString()+this.parentApi.nd.getMonth().toString().valid()+d.toString().valid())
                return "white";
	      else
                return "black";
            }
      }








  CeilingYearofYears(){
      var Slthing=[];
      for(var i=0,y=(this.parentApi.nd.getFullYear()-5);i<13;i++,y++)
               Slthing[i]={ id: i, val: y };
      this.parentApi.SelectingYearofYears=Slthing;
  }

    toggleDateMonths(){
        this.parentApi.showsMyMonthsz=true;
	this.parentApi.ShowYyears=false;
	return true;
    }
    
    MonthClicked(dym:string)
    {
        this.parentApi.nd.setTime(Date.parse(dym+" 20, "+this.parentApi.nd.getFullYear()));
    }


     ShowThisDay(){
       if(parseInt(this.parentApi.clicked.substr(6,1))==0)
   	   return (this.parentApi.clicked.substr(7,1)+" "+this.parentApi.nd.myMonth()+' '+this.parentApi.nd.getFullYear().toString());
       else
	   return (this.parentApi.clicked.substr(6,2)+" "+this.parentApi.nd.myMonth()+' '+this.parentApi.nd.getFullYear().toString());
     }


    toggleYears(){
	this.parentApi.showsMyMonthsz=false;
	this.parentApi.ShowYyears=true;
    }

    YearClicked(chilledbfcvyears:string)
    {
        this.toggleYears();
        this.parentApi.nd.setTime(Date.parse(this.parentApi.nd.myMonth()+" 20, "+chilledbfcvyears));
    }

    GetNextMonths()
    {
        this.parentApi.nd.setDate(35);
    }

    GetPreviouseMnths()
    {
        this.parentApi.nd.setDate(0);
    }

    getFirstDayOfWeek()
    {
        this.parentApi.nd.setDate(1);
        var d=this.parentApi.nd.getDay();
        return d;
    }


    getLastDateOfMonth():number
    {
        this.parentApi.nd.setDate(30);

        if(this.parentApi.nd.getDate()<this.parentApi.minDayOfTheMonth)
        {
            this.parentApi.nd.setDate(0);
            return 29;
        }
        else
            this.parentApi.nd.setDate(31);

        if(this.parentApi.nd.getDate()<this.parentApi.minDayOfTheMonth)
        {
            this.parentApi.nd.setDate(0);
            return 30;
        }
        else
            this.parentApi.nd.setDate(32);

        if(this.parentApi.nd.getDate()<this.parentApi.minDayOfTheMonth)
        {
            this.parentApi.nd.setDate(0);
            return 31;
        }
	return 30;
    }
}
