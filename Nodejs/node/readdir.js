var testFolder = './data'; // './data' == 'data'
//실행 위치를 기준으로 현재 디렉토리(./)의 경로 지정 
var fs = require('fs');

fs.readdir(testFolder, function(error, filelist){
    console.log(filelist);
})