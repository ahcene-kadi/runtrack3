function showhide()

{	var test = document.querySelector("article");
	if(!test)
	{
	let article = document.createElement("article");
 	let texte = document.createTextNode("L'important n'est pas la chute, mais l'atterrissage.");
  	article.appendChild(texte);
  	document.body.appendChild(article);
  }
  else
  {
  	test.remove();
  }
}