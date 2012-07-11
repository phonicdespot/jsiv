// arrange() test code
document.write('<p>arrange() test started...</p>')
var input = new Array(1,2,3)
var pattern = new Array(1,0,0,1,0,1)
var testout = pattArrange(input,pattern)
document.write(testout)
document.write('<p>arrange() test complete...</p>')

// Combinations test code
document.write('<p>Combinations test started...<p>')
var row=new Array(0,0,1,2,2,3)
for (k=0; k<12; k++)
{
    rowAdd(row)
    var write = arrTrim(row)
    document.write(write + '</br>')
}
document.write('<p>Combinations test complete...<p>')
