var showdown = require('showdown'),
    fse = require('fs-extra'),
    converter = new showdown.Converter(),
    fm = require('front-matter');

var folderName;

function getAllFilesFromFolder(folderName) {
    return fse.readdirSync(folderName);
};


exports.convertMdToVueAndSaveInFolder = function (folderPath, folderToSave, layout) {
    folderName = folderPath;
    // console.log("src exist",fs.existsSync("src"));
    // console.log("src layout exist",fs.existsSync("src/layouts"));
    // open tutorial layout
    var layoutContent = fse.readFileSync('code/layouts/' + layout + '.vueLayout', {
        encoding: 'utf8'
    });

    getAllFilesFromFolder(folderName).forEach(fileName => {
        var fMData = fm(getContentOfFile(fileName));
        var html = converter.makeHtml(fMData.body);
        var layout = addMetaTags(layoutContent, fMData.attributes);
        // console.log(layoutContent);
        fileName = fileName.split(".")[0].trim();
        var filePath = `${folderToSave}/${fileName}.vue`;
        fse.ensureDirSync(folderToSave);
        //recreate file if exist otherwise create
        fse.closeSync(fse.openSync(filePath, 'w'))
        var index = layout.indexOf('`');
        var firstString = layout.substring(0, index + 1);
        var lastString = layout.substring(index + 1);
        html = encodeURI(html);
        fse.writeFileSync(filePath, firstString + html + lastString, {
            encoding: 'utf8'
        });
        // console.log(html);
    });
}

function addMetaTags(layout, metaTags) {
    var addTag = function (stringConst, tagName) {
        // var stringConst = 'title=';
        // console.log('layout', layout);
        if (metaTags[tagName] != null) {
            var index = layout.indexOf(stringConst);
            index = index + stringConst.length;
            var firstString = layout.substring(0, index + 1);
            var lastString = layout.substring(index + 1);
            var firstString = layout.substring(0, index + 1);
            return firstString + metaTags[tagName] + lastString;
        }
        return layout;
    }

    layout = addTag('title=', 'Title');
    layout = addTag('keywords=', 'Keywords');
    layout = addTag('description=', 'Description');
    return layout;
}

function getContentOfFile(fileName) {
    return fse.readFileSync(`${folderName}/${fileName}`, {
        encoding: 'utf8'
    });
}