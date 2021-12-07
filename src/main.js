console.log('Message from src/main.js : hello!');

var md = window.markdownit({
    highlight: function ( str, lang ) {
        if ( lang && hljs.getLanguage( lang ) ) {
            try {
                return hljs.highlight( str, { language: lang } ).value;
            } catch ( __ ) { }
        }

        return ''; // use external default escaping
    }
});


function renderMarkdownFile( file ) {
    var request = new XMLHttpRequest();
    request.open( 'GET', './src/content/' + file );
    request.responseType = 'text';

    request.onload = function () {
        let mdContent = md.render( request.response );
        document.getElementById( 'markdown' ).innerHTML = mdContent;
    };

    request.send();
}

