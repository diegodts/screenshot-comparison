const { imgDiff } = require('img-diff-js');

//requiring path and fs modules
const path = require('path');
const fs = require('fs');
//joining path of directory 
const directoryPath = path.join(__dirname, 'images');
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
		//check if the file exists on 'old_images' folder
		if (fs.existsSync( 'old_images/' + file)) {
			imgDiff({
			actualFilename: 'images/' + file,
			expectedFilename: 'old_images/' + file,
			diffFilename: 'differences/' + file,
			generateOnlyDiffFile: true,
		}).then(result => console.log(result));
        console.log(file); 
		}
		
    });
});
