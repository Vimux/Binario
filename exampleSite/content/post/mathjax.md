---
title: MathJax
description: Simple MathJax example test article
date: 2019-09-23
mathjax: true
tags:
  - "MathJax"
---

MathJax JavaScript library allows you to include mathematics in your web pages for viewing in any modern browser.
<!--more-->

## How to enable MathJax

For enabling MathJax, add this to your content's frontmatter:

```yaml
mathjax: true
```

## MathJax example

**Input**:

```
When \\( a \ne 0 \\), there are two solutions to

$$ ax^2 + bx + c = 0 $$

and they are:

\\[ x = {-b \pm \sqrt{b^2-4ac} \over 2a} \\]
```

**Output**:

When \\( a \ne 0 \\), there are two solutions to

$$ ax^2 + bx + c = 0 $$

and they are:

\\[ x = {-b \pm \sqrt{b^2-4ac} \over 2a} \\]
