//var Barricade = Parse.Object.extend("Barricade");
var user = new Parse.User();
var currentUser = Parse.User.current();
var connectQrcode = new QRCode("connectQrcode");
var scheduleDate = [];
var Schedule = Parse.Object.extend("Schedule");
/*//checkbox stuff...
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
});*/
//commented checkout box

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
function connect(){
    var doctorID = '123abc';
    connectQrcode.makeCode(doctorID);
    $("#connectModal").modal('show');

}