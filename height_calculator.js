window.onload=function() {
	feetObj = document.getElementById('txtFeet');
	inchesObj = document.getElementById('txtInches');
	resultsObj = document.getElementById('txtResults');
	document.getElementById('btnReset').onclick = resetInputs;
	document.getElementById('btnCalc').onclick = calcResults;
		}
	function resetInputs() {
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
		 resultsObj.innerHTML = ((feet*12)+inches)*2.54 + 'cm';
	}
