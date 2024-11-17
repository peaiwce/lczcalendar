    declare interface String {
        valid() : string;
    }

    String.prototype.valid = function()
    {
        if(this.toString().length==1)
            return '0'+this;
        else
            return this.toString();
    }



    declare interface Date {
        GetZMc() : string;
	GetZdy() : string;
	myMonth() : string;
	myDay() : string;
    }
   
    Date.prototype.GetZMc = function()
    {
        if(this.getMonth().toString().length==1)
            return '0'+this.getMonth();
        else
            return this.getMonth().toString();
    }

    Date.prototype.GetZdy = function()
    {
        if(this.getDate().toString().length==1)
            return '0'+this.getDate();
        else
            return this.getDate().toString();
    }

    Date.prototype.myMonth = function()
    {
        if (this.getMonth()==0) {return 'January'};
        if (this.getMonth()==1) {return 'February'};
        if (this.getMonth()==2) {return 'March'};
        if (this.getMonth()==3) {return 'April'};
        if (this.getMonth()==4) {return 'May'};
        if (this.getMonth()==5) {return 'June'};
        if (this.getMonth()==6) {return 'July'};
        if (this.getMonth()==7) {return 'August'};
        if (this.getMonth()==8) {return 'September'};
        if (this.getMonth()==9) {return 'October'};
        if (this.getMonth()==10) {return 'November'};
        if (this.getMonth()==11) {return 'December'};
	return '';
    }

    Date.prototype.myDay = function()
    {
        if (this.getDay()==0) {return 'Sun'};
        if (this.getDay()==1) {return 'Mon'};
        if (this.getDay()==2) {return 'Tue'};
        if (this.getDay()==3) {return 'Wed'};
        if (this.getDay()==4) {return 'Thu'};
        if (this.getDay()==5) {return 'Fri'};
        if (this.getDay()==6) {return 'Sat'};
	return "";
    }
