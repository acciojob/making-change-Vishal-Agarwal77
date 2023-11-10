const makeChange = (c) => {
  // your name here
	let ans={
		"q":0,
		"d":0,
		"n":0,
		"p":0
	};
	while(c>=25){
	    ans.q+=1;
	    c=c-25;
	}
	while(c>=10){
	    ans.d+=1;
	    c=c-10;
	}
	while(c>=5){
	    ans.n+=1;
	    c=c-5;
	}
	while(c>=1){
	    ans.p+=1;
	    c=c-1;
	}
	return ans;
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
