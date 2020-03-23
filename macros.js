function macro(x,y,z){
	z=z.replace(/\\e/g,"`").replace(/\\b/g,"\\")
	switch(y){
		case "d":return "`"
		case "age":return (new Date()-new Date(z.slice(4),z.slice(2,4)-1,z.slice(0,2)))/31556952000|0
		case "code":return z.replace(/&lt;/g,"hui")
		case "mono":return "<pre>"+z+"</pre>"
		
	}
	
	return "(template: "+x+")"
}
