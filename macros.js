function macro(x,y,z){
	var z=z.replace(/\\e/g,"`").replace(/\\b/g,"\\")
	switch(y){
		case "d":return "`"
		case "age":return (new Date()-new Date(z.slice(4),z.slice(2,4)-1,z.slice(0,2)))/31556952000|0
		case "code":
			var ce=document.createElement("div")
			ce.innerHTML=z.replace(/&lt;/g,"<").replace(/&amp;/g,"&")
			return ce.outerHTML
		case "icode":
			var rc=z.replace(/&lt;/g,"<").replace(/&amp;/g,"&")
			return "<iframe srcdoc=\""+rc.replace(/"/g,"&quot;")+"\">hi</iframe>"
		case "mono":return "<pre>"+z+"</pre>"
		
	}
	
	return "(template: "+x+")"
}
