
    var DifferHour = -1;
    var DifferMinute = -1;
    var DifferSecond = -1;
    var Dirthday = new Date("6 2,2020 00:00:00");
    var daysms = 24 * 60 * 60 * 1000;
    var hoursms = 60 * 60 * 1000;
    var Secondms = 60 * 1000;
    var miscrosecond = 1000;
    function clock() {
        var time = new Date();
        var hour = time.getHours();
        var minute = time.getMinutes();
        var second = time.getSeconds();
        var timevalue = "" + ((hour > 12) ? hour - 12 : hour)
        timevalue += ((minute < 10) ? ":0" : ":") + minute;
        timevalue += ((second < 10) ? ":0" : ":") + second;
        timevalue += ((hour > 12) ? "PM" : "AM")
        var convertHour = DifferHour;
        var convertMinute = DifferMinute;
        var convertSecond = DifferSecond;
        var Diffms = Dirthday.getTime() - time.getTime();
        DifferHour = Math.floor(Diffms / daysms);
        Diffms -= DifferHour * daysms;
        DifferMinute = Math.floor(Diffms / hoursms);
        Diffms -= DifferMinute * hoursms;
        DifferSecond = Math.floor(Diffms / Secondms);
        Diffms -= DifferSecond * Secondms;


        var dSecs = Math.floor(Diffms / miscrosecond);


        if (convertHour != DifferHour)
            document.formnow.dd.value = DifferHour+'日'
        if (convertMinute != DifferMinute)
            document.formnow.hh.value = DifferMinute+'時'
        if (convertSecond != DifferSecond)
            document.formnow.mm.value = DifferSecond+'分'
        document.formnow.ss.value = dSecs+'秒';
     
        setTimeout("clock()", 1000);
        
    }



