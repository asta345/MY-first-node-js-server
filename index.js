// creating port and the request/
const http =require('http');
const port= 10000;
// here were are declaring a const we need something that read and write 
const fs =require('fs');

function requestHandler(req,res){
	
	console.log(req.url);
//    / deafult request serving html and serving html/  
        res.writeHead(200,{'content-type':'text/html'});
	//to read file html// 
        // fs.readFile('./index.html',function(err,data){
	// 	if(err){
	// 		console.log('error',err);
			
	// 		return res.end('<h1>ERROR! </h1>')
	// 	}
        //           return res.end(data);
	// });
	//to open mutiple  of url//
	let filepath;
	switch(req.url){
		case '/index':
		filepath= './index.html'
		break;
		case '/profile':
		filepath='./profile.html'
		break;
		default:
	        filepath='./404.html'
	}
	fs.readFile(filepath,function(err,data){
		if(err){
			console.log('error',err);
			return res.end('<h1>404 ERROR</h1>');

		}
		return res.end(data);
	})


}
// create request handler/
const server =http.createServer(requestHandler);
server.listen(port,function(error){
	if(error){
	alert("server is not working");
	return;
}else{
        console.log("server is running good");
	return console.log("hi");
}
});