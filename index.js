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
            const bg_color = (hexo.config.fold && hexo.config.fold.bg_color) || (hexo.theme.config.fold && hexo.theme.config.fold.bg_color) || '#e5efe7';
            const board_color = (hexo.config.fold && hexo.config.fold.board_color) || (hexo.theme.config.fold && hexo.theme.config.fold.board_color) || '#e5efe7a1';
            const text_color = (hexo.config.fold && hexo.config.fold.text_color) || (hexo.theme.config.fold && hexo.theme.config.fold.text_color) || '#353535';
            const cssContent = `
                    .fold {
                        margin: 5px 0;
                        padding: 0 15px;
                        border: 0.5px solid ${board_color};
                        position: relative;
                        clear: both;
                        border-radius: 4px;
                    }
                    
                    .fold .fold-title {
                        background: ${bg_color};
                        margin: 0 -15px;
                        padding: 5px 15px;
                        color: ${text_color};
                        font-weight: bold;
                        font-size: 14px;
                        display: block;
                        cursor: pointer;
                        border-radius: 3px;
                    }

                    .fold .fold-title:before {
                        font-weight: bold;
                    }
                    
                    .fold.collapsed .fold-title:before {
                        content: "▶ ";
                    }
                    
                    .fold.expanded .fold-title:before {
                        content: "▼ ";
                    }
                    
                    .fold .fold-content {
                        padding-top: 0;
                        padding-bottom: 0;
                        margin-top: 0;
                        margin-bottom: 0;
                        -moz-transition-duration: 0.8s;
                        -webkit-transition-duration: 0.8s;
                        -o-transition-duration: 0.8s;
                        transition-duration: 0.8s;
                        -moz-transition-timing-function: ease-in-out;
                        -webkit-transition-timing-function: ease-in-out;
                        -o-transition-timing-function: ease-in-out;
                        transition-timing-function: ease-in-out;
                    }
                    
                    .fold.collapsed .fold-content {
                        overflow: hidden;
                        max-height: 0;
                    }
                    
                    .fold.expanded .fold-content {
                        max-height: 3000px;
                        overflow: auto;
                    }
                    
                    .fold .fold-content p:first-child {
                        margin-top: 0 !important;
                    }
            `;
            return cssContent;
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