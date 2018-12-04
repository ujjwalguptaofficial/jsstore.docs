var showdown = require('showdown'),
    fs = require('fs'),
    converter = new showdown.Converter(),
    fm = require('front-matter');

var folderName;

function getAllFilesFromFolder(folderName) {
    return fs.readdirSync(folderName);
};


exports.convertMdToVueAndSaveInFolder = function (folderPath, folderToSave, layout) {
    folderName = folderPath;
    // open tutorial layout
    var layoutContent = fs.readFileSync('src/layouts/' + layout + '.vueLayout', {
        encoding: 'utf8'
    });

    getAllFilesFromFolder(folderName).forEach(fileName => {
        var fMData = fm(getContentOfFile(fileName));
        var html = converter.makeHtml(fMData.body);
        var layout = addMetaTags(layoutContent, fMData.attributes);
        // console.log(layoutContent);
        fileName = fileName.split(".")[0].trim();
        var filePath = `${folderToSave}/${fileName}.vue`;
        //recreate file if exist otherwise create
        fs.closeSync(fs.openSync(filePath, 'w'));
        var index = layout.indexOf('`');
        var firstString = layout.substring(0, index + 1);
        var lastString = layout.substring(index + 1);
        html = encodeURI(html);
        fs.writeFileSync(filePath, firstString + html + lastString, {
            encoding: 'utf8'
        });
        // console.log(html);
    });
}

function addMetaTags(layout, metaTags) {
    var index = layout.indexOf('title=');
    index = index + 6;
    var firstString = layout.substring(0, index + 1);
    var lastString = layout.substring(index + 1);
    var firstString = layout.substring(0, index + 1);
    return firstString + metaTags.Title + lastString;
}

function getContentOfFile(fileName) {
    return fs.readFileSync(`${folderName}/${fileName}`, {
        encoding: 'utf8'
    });
}