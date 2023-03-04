var formidable = require("formidable")
var fs=require("fs")
var http = require("http");

http.createServer(function(req,res){
    if(req.url == '/fileupload'){
        const form = new formidable.IncomingForm()
            form.parse(req,function(err,fields,files){
            const old_path = files.filetoupload.filepath;
            const new_path = "C:/Users/kasas/OneDrive/Desktop/Nodejs/Test/"+files.filetoupload.originalFilename;
            fs.rename(old_path,new_path,function(err){
                if (err) throw err;
                res.write("file uploaded successfully")
                res.end();
            })
        })
    }
    else
    {
        res.writeHead(200, {'content-type':'text/html'})
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>')
        res.write('<input type="submit">')
        res.write('</form>')
        return res.end()
    }
    

}).listen(3573)