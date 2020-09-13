window.onload=function() {
    lengthObj = document.getElementById('txtLength');
    widthObj = document.getElementById('txtwidth');
	heightObj = document.getElementById('txtheight');
	costObj = document.getElementById('tdcost');
	document.getElementById('btnReset').onclick = resetInputs;
	document.getElementById('btnCalc').onclick = calccost;
}
function resetInputs() {
    lengthObj.value = '';
    widthObj.value = '';
	heightObj.value = '';
    costObj.innerHTML = '';
}
function calccost() {
    var length = new Number(lengthObj.value);
    var width = new Number(widthObj.value);
	var height = new Number(heightObj.value);
    costObj.innerHTML = '';
    if(isNaN(length) || isNaN(width) || isNaN(height)) {
        alert('Invalid length,width or height');
        return;
    }
	
	if (height >25) {
		costObj.innerHTML ='$' + (2*(length*height+width*height+length*width)*0.1+(height*4+length*2+width*2)*0.1+ 2*(length*height+width*height+length*width)*0.01)*1.1
	} else { 
		costObj.innerHTML = '$' + (2*(length*height+width*height+length*width)*0.06+(height*4+length*2+width*2)*0.1+ 2*(length*height+width*height+length*width)*0.01)*1.1
	}
}