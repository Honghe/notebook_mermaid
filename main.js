// file my_extension/main.js
define([
    'base/js/namespace',
    'nbextensions/notebook_mermaid/mermaid'
], function(
    Jupyter,
    mermaid
) {
    function loadScript() {
        mermaid.initialize({startOnLoad:true});   
        console.log("hello mermaid")
    }
    
    function load_ipython_extension() {
        console.log(
            'This is the current notebook application instance:',
            Jupyter.notebook
        );
        loadScript();
    }
    return {
        load_ipython_extension: load_ipython_extension
    };
});
