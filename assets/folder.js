(function (document) {
    [].forEach.call(document.getElementsByClassName('fold'), function(panel) {
        panel.getElementsByClassName('fold-title')[0].onclick = function() {
            panel.classList.toggle("collapsed");
            panel.classList.toggle("expanded");
        }
    });
})(document);