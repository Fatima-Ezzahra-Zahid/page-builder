
// function allowDrop(ev) {
//   ev.preventDefault();
// }

// function drag(ev) {
//   ev.dataTransfer.setData("text", ev.target.id);
// }

// function drop(ev) {
//   ev.preventDefault();
//   var data = ev.dataTransfer.getData("text");
//   ev.target.appendChild(document.getElementById(data));
//   document.getElementById('drag1').innerHTML = '<div class="card border-primary mb-3" style="max-width: 18rem;">'+
//   '  <div class="card-header">Header</div>'+
//   '  <div class="card-body text-primary">'+
//   '  <h5 class="card-title">Primary card title</h5>'+
//   '    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>'+
//   '</div>'+'</div>'

// }



var leclone;
 
function dragStart(event)
{
 
	leclone=event.target.cloneNode(true)
 
	event.dataTransfer.setData("Text", 'ok');
	event.dataTransfer.effectAllowed = 'copy';
	event.dataTransfer.dropEffect = 'copy';
}
 
function dragOver(event)
{
	return false;
}
function drop(event)
{
  event.currentTarget.appendChild(leclone);
  document.getElementById('drag1').innerHTML = '<div class="card border-primary mb-3" style="max-width: 18rem;">'+
  '  <div class="card-header">Header</div>'+
  '  <div class="card-body text-primary">'+
  '  <h5 class="card-title">Primary card title</h5>'+
  '    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>'+
  '</div>'+'</div>'	
	event.stopPropagation();
	return false;
}




  

