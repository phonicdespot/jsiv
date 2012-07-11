// arrTrim() removes 0 valued elements from an array.
function arrTrim(input)
{
    var output = []
    for (x in input)
	{
	    if ( input[x] != 0 )
		{
		    output.push(input[x])
		}
	}
	return output
}

// rowAdd() => recursive function that when given
// a combination, finds the next one.
function rowAdd(row)
{
    for (i=0; i<row.length; i++)
    {
	// Increments rightmost array element by one,
	// if leftmost and rightmost elements are equal.
	// (i.e. all row elements are equal.)
	if (row[0] == row[row.length - 1])
	    {
		for (j=0; j<row.length-1; j++)
		{
		    row[j] = 0
		}
		row[row.length - 1] += 1
		return row	
	    }
	    var leftIndex
	    var rightIndex
	    // Deals with index variables for extreme indices of array,
	    // so variables never become negative.
	    if (i==0)
		{ leftIndex = 0 }
	    else
		{ leftIndex = i - 1 }
	    if (i==row.length-1)
		{ rightIndex = row.length - 1 }
	    else
		{ rightIndex = i + 1 }
	    // Scans array from left to right, incrementing current element
	    // if element on left is equal and element on right is greater.
	    if (row[i] < row[rightIndex] && row[i] == row[leftIndex])
		{
		    row[i] += 1
		    // Resets elements on left to 0 if element is incremented
		    // above 0, to ensure all combinations are found.
		    if (row[i] > 1)
			{
			    for (m=0; m<i; m++)
			    {
				row[m] = 0
			    }
			}
			return row
		}
    }
}

// pattArrange arranges an input array into the
// pattern specified by a binary pattern array,
// e.g. 1,2,4 arranged by 1,0,0,1,1 becomes 1,0,0,2,4
function pattArrange(input, pattern)
{
    var y = 0
    var output = []
    for (x in pattern)
	{
	    if ( pattern[x] == 1 )
		{
		    output[x] = input[y]
		    y++
		}
	    else
		{
		    output[x] = 0
		}
	}
	return output
}
