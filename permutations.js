var d=0;
a = new Array();

// ========================================================
function GeneratePermutations(inputstring) {
    inputstring=removeSpaces(inputstring);

    var circular_only=false
    var chars = new Array();
    var charray = new Array();
    var frequency = new Array();
    var inputchar, ii, jj, cc, ccc, numchars, nn=0;

    numchars = inputstring.length;
    for (ii=0; ii<numchars; ii++) chars[ii] = inputstring.charAt(ii);

    for (ii=0; ii<numchars; ii++) {
	inputchar = chars[ii];
	cc = -1;
	for (ccc=0; ccc<charray.length; ccc++) { if (inputchar == charray[ccc]) cc = ccc; }
	if (cc<0) {
	    charray[charray.length] = inputchar;
	    frequency[frequency.length] = 1;
	} else {
	    frequency[cc]++;
	}
    }

    d = 0;
    for (ii=0; ii<frequency.length; ii++) {
	cc = frequency[ii];
	for (jj=0; jj<cc; jj++) {
	    a[d] = nn;
	    d++;
	}
	nn++;
    }

    var perms = 0;
    var output_text = delimiter;
    var new_perm = "";
    var circular = false;
    var test_perm = "";
    var okay = true;
    var firstcomma = -1;
    var busy = true
    var ellipsis = "";
    var atleast = "";
    var insertat = 0;
    var dmax=d;

    for (ii=0; ii<dmax; ii++) {
	new_perm = new_perm + charray[a[ii]];
    }
    if (maxwidth > 0) {
	if ( output_text.indexOf(new_perm+delimiter) >-1 ) okay = false;    // yes yes, dirty
    }
    if (circular_only) {
	test_perm = new_perm;
	for (ii=0; ii<dmax-1; ii++) {
	    test_perm = test_perm.substring(1,dmax) + test_perm.substring(0,1);
	    if ( output_text.indexOf(test_perm) >-1 ) okay = false;
	}
    }
}

if (okay) {
    perms++;
    if (shuffle) {
	insertat = (new_perm.length+delimwidth) * Math.round( ((output_text.length-1)*Math.random())/(new_perm.length+delimwidth) );
	insertat = (output_text).indexOf(delimiter,insertat)+delimwidth;
	if (insertat < delimwidth) insertat = delimwidth;
	output_text = output_text.substring(0,insertat) + new_perm + delimiter + output_text.substring(insertat,output_text.length);
    } else {
	output_text = output_text + new_perm + delimiter;	// even if display_list = false !!!
    }

    if ( display_list && !(maxoutput == "") && (perms >= maxoutput) ) {
	busy = false;
	ellipsis = "..."
	atleast = "at least "
    }
    return output_text
}

// ========================================================
function removeSpaces(string) {
    var tstring = "";
    var i;
    string = '' + string;
    splitstring = string.split(" ");
    for(i = 0; i < splitstring.length; i++)
    tstring += splitstring[i];
    return tstring;
}

// ========================================================
function Adjacent_equals() {
    var ii;
    for (ii=0; ii<d-1; ii++) {
	if (a[ii] == a[ii+1]) return(true);
    }
    return(false);
}

// ========================================================
function nextperm() {
    var i, j, k, swap, s, si;

    for (k=d-2; k>=0; k--) {
	if (a[k] < a[k+1]) {
	    s  = a[k+1];
	    si = k+1;
	    for (i=k+2; i<d; i++) {
		if ((a[i]>a[k])&&(a[i]<s)) {
		    s = a[i];
		    si = i;
		}
	    }
	    swap  = a[si];
	    a[si] = a[k];
	    a[k]  = swap;
	    for (i=k+1; i<d-1; i++) {
		for (j=i+1; j<d; j++) {
		    if (a[i]>a[j]) {
			swap = a[i];
			a[i] = a[j];
			a[j] = swap;
		    }
		}
	    }
	    return(true);
	}
    }
    return(false);
}
