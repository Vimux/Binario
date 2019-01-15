---
title: Hugo Syntax Highlighting
description: Syntax Highlighting example test article that shows how to creating and highlighting code blocks in Hugo-generated site
date: 2018-04-15
categories:
  - "Development"
tags:
  - "Chroma"
  - "Hugo"
  - "Syntax Highlighting"
  - "HTML"
  - "Markdown"
---

You can have code snippets highlighted so that they are easier to read on your site using Chroma, Hugo's default syntax highlighter. It is built in Go lang and is really, really fast – and for the most important parts compatible with Pygments. Chroma takes source code and other structured text and converts it into syntax highlighted HTML, ANSI-coloured text, etc.
<!--more-->

The example below shows a simple HTML code snippet highlighted with the Hugo [highlight](https://gohugo.io/content-management/shortcodes/#highlight) built-in shortcode:

{{< highlight html >}}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Example HTML5 Document</title>
</head>
<body>
  <p>Test</p>
</body>
</html>
{{< /highlight >}}

The following code snippet was used to achieve that result:

```
{{</* highlight html */>}}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Example HTML5 Document</title>
</head>
<body>
  <p>Test</p>
</body>
</html>
{{</* /highlight */>}}
```

For more information, see "[Hugo Syntax Highlighting](https://gohugo.io/content-management/syntax-highlighting)" from official Hugo docs.
