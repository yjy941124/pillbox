//var Barricade = Parse.Object.extend("Barricade");
var user = new Parse.User();
var currentUser = Parse.User.current();
var scheduleQrcode = new QRCode("scheduleQrcode");
var scheduleDate = [];
var Schedule = Parse.Object.extend("Schedule");
//checkbox stuff...
{
    $("#checkbox1").attr('checked', !$("#dtpInput1")[0].disabled);
    $("#checkbox1").attr('checked', !$("#dtpInput2")[0].disabled);
    $("#checkbox1").attr('checked', !$("#dtpInput3")[0].disabled);
    $("#checkbox1").attr('checked', !$("#dtpInput4")[0].disabled);
    $("#checkbox1").attr('checked', !$("#dtpInput5")[0].disabled);
    $("#checkbox1").attr('checked', !$("#dtpInput6")[0].disabled);
    $("#checkbox1").attr('checked', !$("#dtpInput7")[0].disabled);
    $("#checkbox1").click(function () {
        $("#dtpInput1").attr('disabled', !this.checked)
        $("#dtpInput2").attr('disabled', !this.checked)
        $("#dtpInput3").attr('disabled', !this.checked)
        $("#dtpInput4").attr('disabled', !this.checked)
        $("#dtpInput5").attr('disabled', !this.checked)
        $("#dtpInput6").attr('disabled', !this.checked)
        $("#dtpInput7").attr('disabled', !this.checked)
    });
    $("#checkbox2").attr('checked', !$("#dtpInput8")[0].disabled);
    $("#checkbox2").attr('checked', !$("#dtpInput9")[0].disabled);
    $("#checkbox2").attr('checked', !$("#dtpInput10")[0].disabled);
    $("#checkbox2").attr('checked', !$("#dtpInput11")[0].disabled);
    $("#checkbox2").attr('checked', !$("#dtpInput12")[0].disabled);
    $("#checkbox2").attr('checked', !$("#dtpInput13")[0].disabled);
    $("#checkbox2").attr('checked', !$("#dtpInput14")[0].disabled);
    $("#checkbox2").click(function () {
        $("#dtpInput8").attr('disabled', !this.checked)
        $("#dtpInput9").attr('disabled', !this.checked)
        $("#dtpInput10").attr('disabled', !this.checked)
        $("#dtpInput11").attr('disabled', !this.checked)
        $("#dtpInput12").attr('disabled', !this.checked)
        $("#dtpInput13").attr('disabled', !this.checked)
        $("#dtpInput14").attr('disabled', !this.checked)
    });
    $("#checkbox3").attr('checked', !$("#dtpInput15")[0].disabled);
    $("#checkbox3").attr('checked', !$("#dtpInput16")[0].disabled);
    $("#checkbox3").attr('checked', !$("#dtpInput17")[0].disabled);
    $("#checkbox3").attr('checked', !$("#dtpInput18")[0].disabled);
    $("#checkbox3").attr('checked', !$("#dtpInput19")[0].disabled);
    $("#checkbox3").attr('checked', !$("#dtpInput20")[0].disabled);
    $("#checkbox3").attr('checked', !$("#dtpInput21")[0].disabled);
    $("#checkbox3").click(function () {
        $("#dtpInput15").attr('disabled', !this.checked)
        $("#dtpInput16").attr('disabled', !this.checked)
        $("#dtpInput17").attr('disabled', !this.checked)
        $("#dtpInput18").attr('disabled', !this.checked)
        $("#dtpInput19").attr('disabled', !this.checked)
        $("#dtpInput20").attr('disabled', !this.checked)
        $("#dtpInput21").attr('disabled', !this.checked)
    });
    $("#checkbox4").attr('checked', !$("#dtpInput22")[0].disabled);
    $("#checkbox4").attr('checked', !$("#dtpInput23")[0].disabled);
    $("#checkbox4").attr('checked', !$("#dtpInput24")[0].disabled);
    $("#checkbox4").attr('checked', !$("#dtpInput25")[0].disabled);
    $("#checkbox4").attr('checked', !$("#dtpInput26")[0].disabled);
    $("#checkbox4").attr('checked', !$("#dtpInput27")[0].disabled);
    $("#checkbox4").attr('checked', !$("#dtpInput28")[0].disabled);
    $("#checkbox4").click(function () {
        $("#dtpInput22").attr('disabled', !this.checked)
        $("#dtpInput23").attr('disabled', !this.checked)
        $("#dtpInput24").attr('disabled', !this.checked)
        $("#dtpInput25").attr('disabled', !this.checked)
        $("#dtpInput26").attr('disabled', !this.checked)
        $("#dtpInput27").attr('disabled', !this.checked)
        $("#dtpInput28").attr('disabled', !this.checked)
    });
}
//checkbox stuff...
$(function () {
    $.fn.editable.defaults.mode = 'inline';
    $('#datetimepicker1').datetimepicker({
        useCurrent: false,
        autoclose: true
    });$('#datetimepicker2').datetimepicker({
        useCurrent: false,
        autoclose: true
    });

    $('#datetimepicker3').datetimepicker({
        useCurrent: false,
        autoclose: true
    });$('#datetimepicker4').datetimepicker({
        useCurrent: false,
        autoclose: true
    });
    $('#datetimepicker5').datetimepicker({
        useCurrent: false,
        autoclose: true
    });$('#datetimepicker6').datetimepicker({useCurrent: false,
        autoclose: true});
    $('#datetimepicker7').datetimepicker({
        useCurrent: false,
        autoclose: true
    });
    $('#datetimepicker8').datetimepicker({
        useCurrent: false,
        autoclose: true
    });
    $('#datetimepicker9').datetimepicker({
        useCurrent: false,
        autoclose: true});
    $('#datetimepicker10').datetimepicker({useCurrent: false,
        autoclose: true});
    $('#datetimepicker11').datetimepicker({useCurrent: false,
        autoclose: true});
    $('#datetimepicker12').datetimepicker({useCurrent: false,
        autoclose: true});
    $('#datetimepicker13').datetimepicker({useCurrent: false,
        autoclose: true});
    $('#datetimepicker14').datetimepicker({useCurrent: false,
        autoclose: true});

    $('#datetimepicker15').datetimepicker({useCurrent: false,
        autoclose: true});
    $('#datetimepicker16').datetimepicker({useCurrent: false,
        autoclose: true});
    $('#datetimepicker17').datetimepicker({useCurrent: false,
        autoclose: true});
    $('#datetimepicker18').datetimepicker({useCurrent: false,
        autoclose: true});
    $('#datetimepicker19').datetimepicker({useCurrent: false,
        autoclose: true});
    $('#datetimepicker20').datetimepicker({useCurrent: false,
        autoclose: true});
    $('#datetimepicker21').datetimepicker({useCurrent: false,
        autoclose: true});

    $('#datetimepicker22').datetimepicker({useCurrent: false,
        autoclose: true});
    $('#datetimepicker23').datetimepicker({useCurrent: false,
        autoclose: true});
    $('#datetimepicker24').datetimepicker({useCurrent: false,
        autoclose: true});
    $('#datetimepicker25').datetimepicker({useCurrent: false,
        autoclose: true});
    $('#datetimepicker26').datetimepicker({useCurrent: false,
        autoclose: true});
    $('#datetimepicker27').datetimepicker({useCurrent: false,
        autoclose: true});
    $('#datetimepicker28').datetimepicker({useCurrent: false,
        autoclose: true});


});

function scheduleTip(){


    $("#scheduleTipModal").modal('show');
}
// remember for baseslots use getDate(); for the rest use .date this gives out NY timestamps.
function autoFill(){
    var dateArrayWeek1 = [];var dateArrayWeek2 = [];var dateArrayWeek3 = [];var dateArrayWeek4 = [];
    var zeroArray = [0,0,0,0,0,0,0];
    //console.log(document.getElementById('checkbox1').checked);
    if (document.getElementById('checkbox1').checked){
        baseSlot1 = $("#datetimepicker1").data("datetimepicker").getDate();dateArrayWeek1.push(baseSlot1.valueOf()/1000);
    } else{dateArrayWeek1 = zeroArray;}
    if (document.getElementById('checkbox2').checked){
        baseSlot2 = $("#datetimepicker8").data("datetimepicker").getDate();dateArrayWeek2.push(baseSlot2.valueOf()/1000);
    } else{dateArrayWeek2 = zeroArray;}
    if (document.getElementById('checkbox3').checked){
        baseSlot3 = $("#datetimepicker15").data("datetimepicker").getDate();dateArrayWeek3.push(baseSlot3.valueOf()/1000);
    } else{dateArrayWeek3 = zeroArray;}
    if (document.getElementById('checkbox4').checked){
        baseSlot4 = $("#datetimepicker22").data("datetimepicker").getDate();dateArrayWeek4.push(baseSlot4.valueOf()/1000);
    } else{dateArrayWeek4 = zeroArray;}
    var dateString = "#datetimepicker";
    var dateArray = [];
    for (var i = 2; i<= 7; i++){
        if (document.getElementById('checkbox1').checked){
            document.getElementById("dtpInput" + i.toString()).value = new Date(baseSlot1.valueOf() + (i-1) * 86400000).toLocaleString();
            $(dateString + i.toString()).data("datetimepicker").date = new Date(baseSlot1.valueOf() + (i-1) * 86400000);
            dateArrayWeek1.push($(dateString + i.toString()).data("datetimepicker").date.valueOf()/1000);
        }
        if (document.getElementById('checkbox2').checked){
            document.getElementById("dtpInput" + (i+7).toString()).value = new Date(baseSlot2.valueOf() + (i-1) * 86400000).toLocaleString();
            $(dateString + (i+7).toString()).data("datetimepicker").date = new Date(baseSlot2.valueOf() + (i-1) * 86400000);
            dateArrayWeek2.push($(dateString + (i+7).toString()).data("datetimepicker").date.valueOf()/1000);
        }
        if (document.getElementById('checkbox3').checked){
            document.getElementById("dtpInput" + (i+14).toString()).value = new Date(baseSlot3.valueOf() + (i-1) * 86400000).toLocaleString();
            $(dateString + (i+14).toString()).data("datetimepicker").date = new Date(baseSlot3.valueOf() + (i-1) * 86400000);
            dateArrayWeek3.push($(dateString + (i+14).toString()).data("datetimepicker").date.valueOf()/1000);
        }
        if (document.getElementById('checkbox4').checked){
            document.getElementById("dtpInput" + (i+21).toString()).value = new Date(baseSlot4.valueOf() + (i-1) * 86400000).toLocaleString();
            $(dateString + (i+21).toString()).data("datetimepicker").date = new Date(baseSlot4.valueOf() + (i-1) * 86400000);
            dateArrayWeek4.push($(dateString + (i+21).toString()).data("datetimepicker").date.valueOf()/1000);
        }




    }
    dateArray.push(dateArrayWeek1);dateArray.push(dateArrayWeek2);dateArray.push(dateArrayWeek3);
    dateArray.push(dateArrayWeek4);
    var midnight = (new Date(dateArray[0][0]*1000)).setHours(0,0,0);
    console.log($("#datetimepicker1").data("datetimepicker").getDate());
    console.log(midnight);
    dateArray.push(midnight/1000);
    UTCtimeStamp = Math.round((new Date()).valueOf()/1000);
    dateArray.push(UTCtimeStamp);
    scheduleDate = dateArray;

    console.log(scheduleDate);
    //console.log(dateArray);
    //console.log(baseDay.valueOf());
    //console.log(secondDay.valueOf());
    //console.log(secondDay.valueOf()-baseDay.valueOf());
}
/*
 function duplicate(){
 //1 8 15 22 86400
 var dateArray = [];
 var dateArrayWeek1 = []; var dateArrayWeek2 = []; var dateArrayWeek3 = []; var dateArrayWeek4 = [];
 var dateString = "#datetimepicker";
 var baseTime = $("#datetimepicker1").data("datetimepicker").getDate().valueOf()/1000;
 dateArrayWeek1.push(baseTime);//give up the miliseconds.
 dateArrayWeek2.push($("#datetimepicker8").data("datetimepicker").getDate().valueOf()/1000 - baseTime);
 dateArrayWeek3.push($("#datetimepicker15").data("datetimepicker").getDate().valueOf()/1000 - baseTime);
 dateArrayWeek4.push($("#datetimepicker22").data("datetimepicker").getDate().valueOf()/1000 - baseTime);
 for (var i = 2; i <= 7; i++){
 var UTCOneDay = 60*60*24;

 dateArrayWeek1.push(UTCOneDay*(i-1));
 dateArrayWeek2.push(dateArrayWeek2[0] + UTCOneDay*(i-1));
 dateArrayWeek3.push(dateArrayWeek3[0] + UTCOneDay*(i-1));
 dateArrayWeek4.push(dateArrayWeek4[0] + UTCOneDay*(i-1));
 }
 dateArray.push(dateArrayWeek1);dateArray.push(dateArrayWeek2);dateArray.push(dateArrayWeek3);
 dateArray.push(dateArrayWeek4);
 var dateArrayString = dateArray.toString();
 document.getElementById("dtpInput2").value = document.getElementById("dtpInput1").value;
 console.log(document.getElementById("dtpInput1").value);
 console.log($("#datetimepicker1").data("datetimepicker"));
 //console.log(baseTime);
 //console.log(dateArrayWeek2);
 console.log(dateArray.toString());
 autoFillQrcode.makeCode(dateArrayString);
 $("#autoFillModal").modal('show');
 }*/


function submit(){
    //dataArray is the moment object array contains 28 different dates.
    //QR Code parses the toString object of dataArray.
    /*var dateArray = [];
     var dateString = "#datetimepicker";
     console.log($("#datetimepicker1").data("datetimepicker").isInput);
     if ($("#datetimepicker1").data("datetimepicker").isInput == false){
     dateArray.push(0);
     }
     else{
     dateArray.push(($("#datetimepicker1").data("datetimepicker").getDate().valueOf()/1000));//give up the miliseconds.
     }
     //dateArray.push(($("#datetimepicker1").data("datetimepicker").getDate().valueOf()/1000));//give up the miliseconds.
     for (var i = 2; i <= 28; i++){

     var dataStringOne = $(dateString + i.toString()).data("datetimepicker").getDate().valueOf()/1000;
     //dataStringOne = dataStringOne.toString();

     var dateDiff = dataStringOne - dateArray[0];
     dateArray.push(dateDiff);
     }
     //console.log(moment.utc($("#datetimepicker1").data("datetimepicker").getDate()));
     var dateArrayString = dateArray.toString;
     console.log(dateArray);*/
    //add the timestamp for verification. notice the timestamp is in UTC.
    //this timestamp is added to the tail.

    //console.log(scheduleDate);
    scheduleDateString = scheduleDate.toString();
    var scheduleData = new Schedule();
    scheduleData.set("schedule",scheduleDateString);
    scheduleData.save(null, {
        success: function(result) {
            //res.status(200).end();
            //res.send('OK');
        },
        error: function(result, error) {
            //res.status(404).end();
            //alert('Failed to create new object, with error code: ' + error.message);
        }
    });
    //make the first one AFTER the 28 pills to be midnight of the pill take time.
    //the last one is the current timestamp for verification,
    //console.log(midnight);
    console.log(scheduleDateString);
    scheduleQrcode.makeCode(scheduleDateString);
    $("#scheduleModal").modal('show');
}
