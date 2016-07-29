/**
 * Created by a on 7/5/16.
 */
var History = Parse.Object.extend("History");
var historyRecord='';
var pairQrcode = new QRCode("pairQrcode");

function viewHistory(){
    var queryhistory = new Parse.Query(History);
    queryhistory.descending("createdAt");
    queryhistory.first({
        success: function (result) {
            console.log(result);
            historyRecord = result.get('history');
            var historyRecordArray = [];
            historyRecordArray = historyRecord.split(';');
            console.log(historyRecordArray[1]);
            var historyTableHead = "<tr class='info'><th>Pillbox cell number</th><th>Behaviors</th><th>TimeStamp</th></tr>";
            var historyTable='';
            for (var i = 1; i < historyRecordArray.length-1; i++) {
                var splitContent;
                splitContent = historyRecordArray[i].split(',');
                var cell = splitContent[0];
                var condition = splitContent[1].toString();
                var conditionByDigit = condition.split('');
                var conditionString = '';
                if (conditionByDigit[0] == '0'){
                    conditionString += 'The cap opened.'
                }
                else {conditionString += 'The cap closed.'}
                if (conditionByDigit[1] == '0'){
                    conditionString += '; The container was outside.'
                }
                else {conditionString += '; The container was inside.'}
                if (conditionByDigit[2] == '1'){
                    conditionString += '; The pills were inside.'
                }
                else {conditionString += '; The pills were not present.'}
                if (conditionByDigit[3] == '1'){
                    conditionString += '; The wrong container was opened!'
                }
                var timeStamp = (new Date(splitContent[2]*1000)).toLocaleString();
                historyTable = historyTable + '<tr><td>' + cell + '</td>' + '<td>' + conditionString
                    +'</td><td>'+ timeStamp + '</td></tr>';
            }
            historyTable = historyTableHead + historyTable;
            document.getElementById("historyTable").innerHTML = historyTable;
        }

    });
}
function historyTip(){
    $("#scheduleTipModal").modal('show');
}
function pair(){
    var pairURL = 'https://smart-pillbox.parseapp.com/history';
    pairQrcode.makeCode(pairURL);
    $("#pairModal").modal('show');

}