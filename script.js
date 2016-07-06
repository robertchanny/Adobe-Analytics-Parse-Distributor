/*  ===============================================================
	Parses an Adobe Analytics field and distributes it as an object.
	A value's key is left as an empty string if it is undefined.
	eVars can be set accordingly.
    =============================================================== */ 

var sample = "CC | About | Lung | Learning | Lung Cancer Stage"

function prsDstr(pageName){

	var a = pageName.replace(/ \| /g, '|').split('|');

	var s={};

	for(var i=2; i<5; i++){
		if(!a[i] || typeof a[i] == 'undefined'){
			a[i] = "";
		}
	}

	s.eVar6 = s.channel = a[1];
	s.eVar7 = a[2];
	s.eVar8 = a[3];
	s.eVar9 = a[4];

	console.log(s);

}

prsDstr(sample);