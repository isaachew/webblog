console.log("Web Blog")
let tbs=document.getElementById("tabs")
let tbc=document.getElementById("tabc")
var lt=0
fetch("json.json").then((r)=>r.json()).then((js)=>{
	i=0
	for(tbn in js.tabs){
		ti=js.tabs[tbn]
		var swi=document.createElement("div")
		swi.className="tabs"
		swi.id="ts"+i
		swi.textContent=ti.title
		swi.style.backgroundColor=ti.bg
		swi.onclick=function(){
			document.getElementById("tb"+lt).style.display="none"
			document.getElementById("tb"+this.id.slice(2)).style.display="block"
			lt=this.id.slice(2)-0
		}
		tbs.appendChild(swi)
		var tab=document.createElement("div")
		tab.className="tab"
		tab.style.display=i?"none":"block"
		tab.id="tb"+i
		
		
		for(j of ti.content){
			cnt=j.replace(/&/g,"&amp;").replace(/</g,"&lt;")
			rp=cnt.replace(/`([^`]+)`([^`]*)`/g,macro)
			dv=document.createElement("div")
			dv.className="sect"
			dv.innerHTML=rp
			tab.appendChild(dv)
		}
		/*/
		cnt=js.tabs[i].content.replace(/</g,"&lt;")
		rp=cnt.replace(/`([^`]+)`([^`]*)`/g,macro)
		
		
		tab.innerHTML=rp
		/**/
		tab.style.backgroundColor=ti.bg
		tbc.appendChild(tab)
		i++
	}
	
	
	
	
})

