GH.operatorUtil = {};

GH.operatorUtil.EQUIVALENCE_OPERATOR = {
	wff: '<->',
	nat: '=',
	bind: '='
};

GH.operatorUtil.getOperatorTypes = function(operator) {
	if (operator == '-.') 	return ['wff', 'wff'];
	if (operator == '->') 	return ['wff', 'wff', 'wff'];
	if (operator == '<->') 	return ['wff', 'wff', 'wff'];
	if (operator == '\\/') 	return ['wff', 'wff', 'wff'];
	if (operator == '/\\') 	return ['wff', 'wff', 'wff'];
	if (operator == 'A.') 	return ['bind', 'wff', 'wff'];
	if (operator == 'E.') 	return ['bind', 'wff', 'wff'];
	if (operator == '=') 	return ['nat', 'nat', 'wff'];
	if (operator == '<=') 	return ['nat', 'nat', 'wff'];
	if (operator == '<') 	return ['nat', 'nat', 'wff'];
	if (operator == '|') 	return ['nat', 'nat', 'wff'];
	if (operator == 'prime') 	return ['nat', 'wff'];
	if (operator == 'S') 	return ['nat', 'nat'];
	if (operator == '+') 	return ['nat', 'nat', 'nat'];
	if (operator == '*') 	return ['nat', 'nat', 'nat'];
	return null;
};

GH.operatorUtil.getType = function(sexp) {
	var operator = sexp.operator;
	var operatorTypes = GH.operatorUtil.getOperatorTypes(operator);
	return operatorTypes && operatorTypes[operatorTypes.length - 1];
};

GH.operatorUtil.getRootType = function(sexp) {
	var root = sexp;
	while(root.parent) {
		root = root.parent;
	}
	return GH.operatorUtil.getType(root);
};

GH.operatorUtil.getName = function(operator) {
	       if (operator == '-.') {		return 'Not';
	} else if (operator == '->') {		return 'Imp';		
	} else if (operator == '<->') {		return 'Bi';
	} else if (operator == '\\/') {		return 'Or';
	} else if (operator == '/\\') {		return 'An';
	} else if (operator == 'A.') {		return 'Al';
	} else if (operator == 'E.') {		return 'Ex';
	} else if (operator == '=') {		return 'Eq';
	} else if (operator == '<=') {		return 'Le';
	} else if (operator == '<') {		return 'Lt';
	} else if (operator == '|') {		return 'Divs';
	} else if (operator == 'prime') {	return 'Prim';
	} else if (operator == 'S') {		return 'Suc';
	} else if (operator == '+') {		return 'Add';
	} else if (operator == '*') {		return 'Mul';
	} else {
		alert('Operator ' + operator + ' is not named.');
		return '';
	}
};

GH.operatorUtil.isEquivalenceOperator = function(operator) {
	var operatorTypes = GH.operatorUtil.getOperatorTypes(operator);
	return ((operatorTypes) && (operator == GH.operatorUtil.EQUIVALENCE_OPERATOR[operatorTypes[0]]));
};