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
	 costObj.innerHTML = (0.06* (2*(height*length) + 2*(height*width) + (width*length)) + (0.10 * 4 * height + 0.10 * 2* length + 0.10 * 2* width) + (2*(height * length) + 2*(height * width) + (width * length) / 6000 * 60)) *1.1
}