var markdownpdf = require("markdown-pdf"),
    fs = require("fs");

var options = {
    paperFormat: 'A4',
    cssPath: 'C:\\nodeApps\\m2p\\swiss.css'
};

if (process.argv[2]) {
    var inputFile = process.argv[2];
    var outputFile = inputFile.replace('.md', '.pdf');
} else {
    throw new Error('please enter markdown file name');
}

markdownpdf(options).from(inputFile).to(outputFile, function () {
    console.log("Done");
});
