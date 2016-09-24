function pyramid(LineNumber : number):void {
    var CurrentLine = 0;
    var spaceCount = 0;
    var starCount =0;
    var LineString = "";
    for(CurrentLine = 1; CurrentLine <= LineNumber; CurrentLine++) {
        LineString="";
        for(spaceCount = 0; spaceCount < LineNumber-CurrentLine; spaceCount++) {
            LineString+=" ";
        }
        for(starCount = 0; starCount < 2*CurrentLine-1; starCount++) {
            LineString+="*";
        }
        console.log(LineString);
    }
}
var lineCount = 3;
pyramid(lineCount);