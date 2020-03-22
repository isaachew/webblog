console.log("Web Blog")
let tbs=document.getElementById("tabs")
let tbc=document.getElementById("tabc")
var lt=0
fetch("json.json").then((r)=>r.json()).then((js)=>{	
	for(i=0;i<js.tabs.length;i++){
		var swi=document.createElement("div")
		swi.className="tabs"
		swi.id="ts"+i
		swi.textContent=js.tabs[i].title
		swi.style.backgroundColor=js.tabs[i].bg
		swi.onclick=function(){
			document.getElementById("tb"+lt).style.display="none"
			document.getElementById("tb"+this.id.slice(2)).style.display="block"
			lt=this.id.slice(2)-0
		}
		tbs.appendChild(swi)
		var tab=document.createElement("div")
		tab.className="tab"
		tab.id="tb"+i
		
		cnt=js.tabs[i].content
		rp=cnt.replace(/-([^-]+)-([^-]*)-/g,(x,y,z)=>{
			switch(y){
				case "d":return "-"
				case "age":return (new Date()-new Date(z.slice(4),z.slice(2,4)-1,z.slice(0,2)))/31556952000|0
				case "mono":return "<pre>"+z+"</pre>"
				
			}
			
			return x+y+z
		})
		
		
		tab.innerHTML=rp
		tab.style.backgroundColor=js.tabs[i].bg
		tbc.appendChild(tab)
	}
	
	
	
	
})

