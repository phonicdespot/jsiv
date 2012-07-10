document.write('<p>IV adder started...</p>');
var row=new Array(0,0,0,0,0,0)
document.write(row.join() + '</br>');

function rowAdd(row)
{
    for (i=0; i<row.length; i++)
    {
	var leftIndex
	var rightIndex
	if (row[0] == row[row.length - 1])
	    {
		for (j=0; j<row.length-1; j++)
		{
		    row[j] = 0
		}
		row[row.length - 1] += 1;
	    return row;	
	    }

	if (i==0)
	    { leftIndex = 0; }
	else
	    { leftIndex = i - 1; }

	if (i==row.length-1)
	    { rightIndex = row.length - 1 }
	else
	    { rightIndex = i + 1 }

	if (row[i] < row[rightIndex] && row[i] == row[leftIndex])
	    { row[i] += 1;
	    if (row[i] > 1)
		{
		    for (m=0; m<row.length - 1; m++)
			{
			    row[m] = 0;
			}
		}
	    return row;
	    // break;
	    }

	// document.write(i + ": ");
	// document.write(leftIndex + ':' + i + ':' + rightIndex + ':' + '</br>')
	// document.write(row[leftIndex] + ':' + row[i] + ':' + row[rightIndex] + ':' + ' ')
	// document.write(row.join() + '</br>');
    }
	// document.write(row.join() + '</br>');
	// return row;
}
for (j=0; j<14; j++)
    {
    rowAdd(row);
    document.write(row.join() + '</br>');
    }

