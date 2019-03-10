
    var DifferHour = -1;
    var DifferMinute = -1;
    var DifferSecond = -1;
    var Dirthday = new Date("6 2,2019 00:00:00");
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
            document.formnow.dd.value = DifferHour
        if (convertMinute != DifferMinute)
            document.formnow.hh.value = DifferMinute
        if (convertSecond != DifferSecond)
            document.formnow.mm.value = DifferSecond
        document.formnow.ss.value = dSecs;
        document.formnow.ss.value = dSecs;
        setTimeout("clock()", 1000);
        
    }


    function testOpen(){

       window.open("file:///C:/Users/90595_000/Desktop/1235/%E6%98%9F%E4%B9%83%20%E3%81%95%E3%82%86%E3%81%BF_files/tu.html") 
    }
