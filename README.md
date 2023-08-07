A plugin used to fold content block, modified from [hexo-sliding-spoiler](https://github.com/fletchto99/hexo-sliding-spoiler).

+ [x] Simple, efficient and beautiful
+ [x] Support text, images, code blocks, and more
+ [x] Adaptive, ultra-large capacity
+ [x] User-defined color

## Demo

![example.gif](img/example.gif)

## Install

```bash
npm install hexo-fold --save
```

If hexo can't detect this plugin automatically, you need to modify the `plugins` section of `/_config.yml` manually, like:

```yaml
plugins:
  - hexo-fold
```

If you want to customize the color, please add the following configuration.
This is optional, if not configured a default color will be used.

```yaml
fold:
  bg_color: "#f8b806"
  board_color: "#e5efe7"
  text_color: "#353535"
```

## Syntax

```plain
{% fold title %}
content
{% endfold %}
```

It will hide your text and place the title at the top with a dropdown/scroll up arrow.

## Example

### One word title

```plain
{% fold word %}
content
{% endfold %}
```

### Title containing spaces


```plain
{% fold "Several spaces in the title" %}
content
{% endfold %}
```