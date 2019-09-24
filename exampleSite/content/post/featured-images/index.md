---
title: Featured Images
description: "In this page, we will explain what featured images are and show you some examples how to add a featured \
image for a page."
date: 2019-09-12
---

Featured image is the image that appears on summaries at the list pages and the top of content pages. Every content page
in this theme can have a featured image.

<!--more-->

## How to add a featured image

Content pages in Hugo can have their images or any other files stored under the same directory of the page itself.
In Hugo's terms, it's called **page bundle** and allows us to keep all assets together with a page content file.

This theme uses page bundles for featured images. There are two main different ways to add a featured image.

### Option 1. Put `featured.*` or `thumbnail.*` image in the page bundle

This theme considers `featured` or `thumbnail` image in any popular graphic format in the root of the page bundle as
a featured image.

Directory structure of this page:

```
content
└── post
    └── featured-images // single page folder (page bundle)
        ├── featured.png // featured image
        └── index.md // page content file
```

### Option 2. Put any image in the page bundle & specify `featured` param

You may put any image in the page bundle and specify `featured` param in the page's front matter:

```yaml
featured: image.jpg
```

- `featured` [`String`]: relative path of the image

Or you can add some additional params like `alt`, `caption`, `credit` and `previewOnly`:

```yaml
featured:
  url: image.jpg
  alt: A scale model of the Eiffel tower standing on a map
  caption: Eiffel tower model
  credit: Unknown author
  previewOnly: false
```

- `featured` [`Map`]:
  - `url` [`String`]: relative path of the image
  - `alt` [`String`]: alternate text for the image
  - `caption` [`String`]: image caption
  - `credit` [`String`]: image credit
  - `previewOnly` [`Boolean`]: show only preview image

## FAQ

**Q**: _What will happen if I specify `alt`, `caption`, `credit` params, but miss `url`? Featured image will be shown or
not?_\
**A**: In that case, featured image would appear only if the page bundle contains `featured.*` or `thumbnail.*` image.
Otherwise, you'll get nothing.

**Q**: _Is featured image path case sensitive or insensitive? Featured.png and featured.png are different image relative
paths for Hugo?_\
**A**: The image matching is case-insensitive. In that case, Featured.png and featured.png are identical for Hugo.
