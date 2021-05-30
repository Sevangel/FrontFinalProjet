// Menu burger déroulant

document.querySelector( "body > header > nav > img" ).onclick = e => {
	e.target.parentNode.classList.toggle( "opened" );
}

