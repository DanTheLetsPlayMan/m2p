var markdownpdf = require("markdown-pdf"),
    fs = require("fs");

if (process.argv[2]) {
    var inputFile = process.argv[2];
    var outputFile = inputFile.replace('.md', '.pdf');
} else {
    throw new Error('please enter markdown file name');
}

markdownpdf().from(inputFile).to(outputFile, function () {
    console.log("Done");
});
