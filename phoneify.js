function phoneParsing(number) {
	// checks whether there is a 1 or not at beginning
	number = number.toString();
    number = number.split('');
	if(number.length == 10) {
		number.unshift('1');
	}
	number = number.join('');
	number = number.toString();
    function noSpacesFunc(number) {
        // Works as a 'reset' function for other functions
        return number.toString().replace(/\D/g, '');
    }

    function removeInitialNumberFunc(number) {
        number = noSpacesFunc(number);
        number = number.split('');
        if (number[0] == 1) {
            number.splice(0, 1);
        }
        return number.join('');
    }

    function addParenthesesFunc(number) {
        number = noSpacesFunc(number);
        number = number.split('');
        if (number.length == 11) {
            number.splice(1, 0, ' ');
            number.splice(5, 0, ' ');
            number.splice(9, 0, ' ');
            number.splice(2, 0, '(');
            number.splice(6, 0, ')');
        } else if (number.length == 10) {
            number.splice(3, 0, ' ');
            number.splice(7, 0, ' ');
            number.splice(0, 0, '(');
            number.splice(4, 0, ')');
        } else {
            return null;
        }
        return number.join('');
    }

    function addParenthesesWithDashesFunc(number) {
    	number = addParenthesesFunc(number);
    	if(number.length == 16) {
	   		number = number.replace(' ', '-');
	   		number = number.replace(' ', '-');
	   		number = number.replace(' ', '-');
    	} else if (number.length == 14) {
	   		number = number.replace(' ', '-');
	   		number = number.replace(' ', '-');
	   		number = number.replace(' ', '-');
    	} else {
    		return null;
    	}
    	return number;
    }

    function addDashesFunc(number) {
        number = noSpacesFunc(number);
        number = number.split('');
        var dash = '-';
        if (number.length == 11) {
            number.splice(1, 0, dash);
            number.splice(5, 0, dash);
            number.splice(9, 0, dash);
        } else if (number.length == 10) {
            number.splice(3, 0, dash);
            number.splice(7, 0, dash);
        } else {
        	return null;
        }
        return number.join('');
    }

    function addDotsFunc(number) {
    	number = noSpacesFunc(number);
    	number = number.split('');
        var dot = '.';
        if (number.length == 11) {
            number.splice(1, 0, dot);
            number.splice(5, 0, dot);
            number.splice(9, 0, dot);
        } else if (number.length == 10) {
            number.splice(3, 0, dot);
            number.splice(7, 0, dot);
        } else {
        	return null;
        }
        return number.join('');
    }

    function addSlashesFunc(number) {
    	number = noSpacesFunc(number);
    	number = number.split('');
        var slash = '/';
        if (number.length == 11) {
            number.splice(1, 0, slash);
            number.splice(5, 0, slash);
            number.splice(9, 0, slash);
        } else if (number.length == 10) {
            number.splice(3, 0, slash);
            number.splice(7, 0, slash);
        } else {
        	return null;
        }
        return number.join('');
    }

    // This is for the 'countryCodeRemoved' object
    var removed = removeInitialNumberFunc(number);
    var removedParentheses = addParenthesesFunc(removed);
    var removedDashes = addDashesFunc(removed);
    var removedParenAndDashes = addParenthesesWithDashesFunc(removed);
    var removedDots = addDotsFunc(removed);
    var removedSlashes = addSlashesFunc(removed);
    // The object that will be returned
    var parsed = {
    	"original": number,
    	"removeInitialNumber": removeInitialNumberFunc(number),
    	"withPlus": '+' + number,
    	"countryCodeIntact": {
    		"addParentheses": addParenthesesFunc(number),
    		"addDashes": addDashesFunc(number),
    		"addParenthesesWithDashes": addParenthesesWithDashesFunc(number),
    		"addDots": addDotsFunc(number),
    		"addSlashes": addSlashesFunc(number)
    	},
    	"countryCodeRemoved": {
    		"addParentheses": removedParentheses,
    		"addDashes": removedDashes,
    		"addParenthesesWithDashes": removedParenAndDashes,
    		"addDots": removedDots,
    		"addSlashes": removedSlashes
    	}
    };
    // Validate it as JSON
    return JSON.parse(JSON.stringify(parsed));
}
module.exports = phoneParsing;