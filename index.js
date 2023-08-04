const fs = require('hexo-fs');
const path = require('path');

hexo.extend.tag.register('fold', (args, content) =>
`<div class='fold collapsed'>
    <div class='fold-title'>
        ${args.join(" ")}
    </div>
    <div class='fold-content'>
        ${
            hexo.render.renderSync({
                text: content,
                engine: "markdown"
            }) || "No content to show"
        }
    </div>
</div>`, {
    ends: true
});

hexo.extend.generator.register('fold_asset', () => [
    {
        path: 'css/folder.css',
        data: function () {
            return fs.createReadStream(path.resolve(path.resolve(__dirname, "./assets"), 'folder.css'));
        }
    },
    {
        path: 'js/folder.js',
        data: function () {
            return fs.createReadStream(path.resolve(path.resolve(__dirname, "./assets"), 'folder.js'));
        }
    }
]);

hexo.extend.filter.register('after_post_render', (data) => {
    let link_css = `<link rel="stylesheet" href="${hexo.config.root}css/folder.css" type="text/css">`;
    let link_js = `<script src="${hexo.config.root}js/folder.js" type="text/javascript" async></script>`;
    data.content += link_css + link_js;
    return data;
});
