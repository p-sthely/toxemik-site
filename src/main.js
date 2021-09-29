console.log('Message from src/main.js : hello!')

var md = window.markdownit();

function renderMarkdownFile(file) {
    var request = new XMLHttpRequest();
    request.open('GET', './src/content/' + file);
    request.responseType = 'text';
    
    request.onload = function() {
        let mdContent = request.response;
        mdContent = md.render(mdContent);
        document.getElementById('markdown').innerHTML = mdContent;
    };
    
    request.send();
}

