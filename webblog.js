console.log("Web Blog")
tbs=document.getElementById("tabs")
for(i=0;i<10;i++){
	x=document.createElement("div")
	x.className="tabs"
	x.textContent="hi"+i
	x.style.backgroundColor="#0ff00f"
	tbs.appendChild(x)
}
