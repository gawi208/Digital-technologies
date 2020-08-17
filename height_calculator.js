window.onload=function() {
	feetObj = document.getElementById('feet');
	inchesObj = document.getElementById('inches');
	resultsObj = document.getElementById('results');
	document.getElementById('clear').onclick = resetInputs;
	document.getElementById('convert').onclick = calcResults;
		}
	function clear() {
        feetObj.value = '';
		inchesObj.value = '';
		resultsObj.innerHTML = '';
    }
    function calcResults () {
		var feet = new Number(feetObj.value);
        var inches = new Number(inchesObj.value);
       resultsObj.innerHTML = '';
        if(isNaN(feet) || isNaN(inches)) {
			alert('Invalid feet or inch');
            return;
        }
		resultsObj.innerHTML = feet*Math.pow(inches,2)/800;
	}