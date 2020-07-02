# Binario

**Binario** is a responsive card-based & code-light Hugo theme.

**[Demo (Fast update)](https://binario.netlify.com/)** | [Standart Demo](https://themes.gohugo.io/theme/binario/)

![Binario theme screenshot](https://github.com/vimux/binario/blob/master/images/tn.png)

**Features:**

* Responsive
* Card-based list layout
* Color themes
* Internal Hugo templates (Open Graph, Schema, Twitter Cards, Google Analytics, Disqus comments)
* Table of contents
* Related content
* MathJax

## Table of Contents

- [Installation](#installation)
  - [Option A. Git clone](#option-a-git-clone)
  - [Option B. Git submodule](#option-b-git-submodule)
  - [Option C. Download ZIP and manual install](#option-c-download-zip-and-manual-install)
- [Configuration](#configuration)
  - [Config.toml example](#configtoml-example)
  - [Front Matter example](#front-matter-example)
  - [Configuration options](#configuration-options)
    - [Columns](#columns)
    - [Custom CSS](#custom-css)
    - [Custom JS](#custom-js)
    - [Entry Meta](#entry-meta)
    - [Related Content](#related-content)
    - [Share Buttons](#share-buttons)
    - [Featured Image](#featured-image)
    - [Breadcrumb](#breadcrumb)
    - [Footer Social Icons](#footer-social-icons)
    - [Web App Manifest](#web-app-manifest)
- [Contributing](#contributing)
- [License](#license)

## Installation

*First of all, you will need to [install Hugo](https://gohugo.io/getting-started/quick-start/#step-1-install-hugo) and
[create a new site](https://gohugo.io/getting-started/quick-start/#step-2-create-a-new-site). Also, you have git
installed on your machine and you are familiar with basic git usage. After that, you ready to install **Binario**.*

There are three different ways you can install **Binario**. Choose one of the installation methods listed below and
follow the instructions.

- **A**. [Git clone](#option-a-git-clone)
- **B**. [Git submodule](#option-b-git-submodule)
- **C**. [Download ZIP and manual install](#option-c-download-zip-and-manual-install)

*For more information read the "[Install and Use Themes](https://gohugo.io/themes/installing-and-using-themes/)"*.

### Option A. Git clone

In your Hugo site directory, run:

```
git clone https://github.com/vimux/binario themes/binario
```

Next, edit your `config.toml` configuration file and add parameter:

```
theme = "binario"
```

### Option B. Git submodule

In your Hugo site directory, run:

```
git submodule add https://github.com/vimux/binario themes/binario
```

Next, edit your `config.toml` configuration file and add parameter:

```
theme = "binario"
```

*You can [read the GitHub documentation for submodules](https://github.com/blog/2104-working-with-submodules) or those
found on [Git's website](https://git-scm.com/book/en/v2/Git-Tools-Submodules) for more information*

### Option C. Download ZIP and manual install

**[Download ZIP](https://github.com/vimux/binario/archive/master.zip)** and extract to the `themes/binario` within your
Hugo website.

Next, edit your `config.toml` configuration file and add parameter:

```
theme = "binario"
```

***

You can run your site in Hugo server mode:

```
hugo server
```

Now you can go to [localhost:1313](http://localhost:1313) webpage and the Binario theme should be visible.

After you make sure that **Binario** works, you may start customizing the theme if it's needed. You can change
[number of columns](#columns), activate [footer social icons](#footer-social-icons), [share buttons](#share-buttons) and
[much more](#configuration-options).

## Configuration

Hugo uses the `config.toml`, `config.yaml`, or `config.json` (if found in the site root) as the default site config
file. Here is Binario configuration example in TOML with all available theme-specific config params:

### Config.toml example

```toml
baseurl = "/"
title = "Binario"
languageCode = "en-us"
paginate = "10" # Number of elements per page in pagination
theme = "binario"
disqusShortname = "" # Enable comments by entering your Disqus shortname
googleAnalytics = "" # Enable Google Analytics by entering your tracking id

[Author] # Used in authorbox
  name = "John Doe"
  bio = "John Doe's true identity is unknown. Maybe he is a successful blogger or writer."
  avatar = "img/avatar.png"

[Params]
  description = "Responsive card-based & code-light Hugo theme" # Site Description. Used in meta description
  copyright = "Binario" # Copyright holder, otherwise will use .Site.Title
  opengraph = true # Enable OpenGraph if true
  schema = true # Enable Schema
  twitter_cards = true # Enable Twitter Cards if true
  columns = 2 # Set the number of cards columns. Possible values: 1, 2, 3
  mainSections = ["post"] # Set main page sections
  dateFormat = "January 02, 2006" # Change the format of dates
  colorTheme = "" # dark-green, dark-blue, dark-red, dark-violet
  customCSS = ["css/custom.css"] # Include custom CSS files
  customJS = ["js/custom.js"] # Include custom JS files
  mainMenuAlignment = "right" # Align main menu (desktop version) to the right side
  authorbox = true # Show authorbox at bottom of single pages if true
  comments = true # Enable comments for all site pages
  related = true # Enable Related content for single pages
  relatedMax = 5 # Set the maximum number of elements that can be displayed in related block. Optional
  mathjax = true # Enable MathJax for all site pages
  mathjaxPath = "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.6/MathJax.js" # Specify MathJax path. Optional
  mathjaxConfig = "TeX-AMS-MML_HTMLorMML" # Specify MathJax config. Optional
  hideNoPostsWarning = false # Don't show no posts empty state warning in main page, if true

[Params.Entry]
  meta = ["date", "categories"] # Enable meta fields in given order
  toc = true # Enable Table of Contents
  tocOpen = true # Open Table of Contents block. Optional

[Params.Featured]
  previewOnly = false # Show only preview featured image

[Params.Breadcrumb]
  enable = true # Enable breadcrumb block globally
  homeText = "Binario" # Home node text

[Params.Social]
  email = "example@example.com"
  facebook = "username"
  twitter = "username"
  telegram = "username"
  instagram = "username"
  pinterest = "username"
  vk = "username"
  linkedin = "username"
  github = "username"
  gitlab = "username"
  stackoverflow = "numberid"
  mastodon = "https://some.instance/@username"
  medium = "username"

[Params.Share] # Entry Share block
  facebook = true
  twitter = true
  reddit = true
  telegram = true
  linkedin = true
  vk = true
  pocket = true
  pinterest = true

# Web App Manifest settings
# https://www.w3.org/TR/appmanifest/
# https://developers.google.com/web/fundamentals/web-app-manifest/
[Params.Manifest]
  name = "Binario"
  shortName = "Binario"
  display = "browser"
  startUrl = "/"
  backgroundColor = "#2a2a2a"
  themeColor = "#1b1b1b"
  description = "Responsive card-based & code-light Hugo theme"
  orientation = "portrait"
  scope = "/"

[outputFormats]
  [outputFormats.MANIFEST]
    mediaType = "application/json"
    baseName = "manifest"
    isPlainText = true
    notAlternative = true

[outputs]
  home = ["HTML", "RSS", "MANIFEST"]
```

For more information about Hugo configuration files and all common configuration settings, please read
"[Configure Hugo](https://gohugo.io/getting-started/configuration)" from Hugo official documentation.

### Front Matter example

Hugo supports three formats for front matter: `yaml`, `toml` and `json`. Here is Front Matter example in YAML:

```yaml
---
# Common-Defined params
title: "Example article title"
date: "2017-08-21"
lastmod: "2018-12-21"
description: "Example article description"
categories:
  - "Category 1"
  - "Category 2"
tags:
  - "Tag"
  - "Another tag"
menu: main # Add page to a menu. Options: main, footer

# Theme-Defined params
comments: true # Enable/disable Disqus comments for specific page
authorbox: true # Enable/disable Authorbox for specific page
toc: true # Enable/disable Table of Contents for specific page
tocOpen: true # Open Table of Contents block for specific page
mathjax: true # Enable/disable MathJax for specific page
related: true # Enable/disable Related content for specific page
meta:
  - date
  - categories
featured:
  url: image.jpg # relative path of the image
  alt: A scale model of the Eiffel tower # alternate text for the image
  caption: Eiffel tower model # image caption
  credit: Unknown author # image credit
  previewOnly: false # show only preview image (true/false)
---
```

For more information about front matter variables and formats read
"[Hugo Front Matter](https://gohugo.io/content-management/front-matter)" from Hugo official documentation.

### Configuration options

Binario includes some customizable configuration options that may be useful.

#### Columns

By default, Binario works with two columns card layout (if it possible by screen size) for list pages, but you can also
use one or three columns layout. Change `Params.columns`to preferable value (from 1 to 3). You can also change this
option for specific list pages in frontmatter params.

#### Custom CSS

If you want to include custom CSS files, you need to assign an array of references in site config file
(`config.toml` by default) like following:

```toml
[Params]
  customCSS = ["css/custom.css"]
```

Of course, you can reference as many CSS files as you want. Their paths need to be relative to the `static` folder of
your Hugo site:

```toml
[Params]
  customCSS = ["css/custom.css", "css/another.css"]
```

All custom CSS files will be added in the `head` section of a `baseof.html` right after the built-in CSS file.

#### Custom JS

You can add custom JavaScript files by assigning an array of references in site config file (`config.toml` by default)
like following:

```toml
[Params]
  customJS = ["js/custom.js"]
```

And of course, just like with custom CSS, you can reference as many JS files as you want. Their paths need to be
relative to the `static` folder of your Hugo site:

```toml
[Params]
  customJS = ["js/custom.js", "js/another.js"]
```

All custom JS files will be added before closing body tag of a `baseof.html` file.

#### Entry Meta

Entry metadata are relevant information about your entry such as published date, last modified date, category, etc. You
may activate meta fields with `meta` parameter under the `[Params.Entry]` config section:

```toml
[Params.Entry]
  meta = ["date", "categories"]
```

#### Related Content

Binario uses default Related Content Hugo feature to provide "See Also"-like section. You can activate "Related Content"
section with `.Site.Params.related` parameter.

More information available at [Hugo Related Content](https://gohugo.io/content-management/front-matter)

#### Share Buttons

To display share buttons, set up `[Params.Share]` specific parameters in your site config file.

Available share buttons: Facebook, Twitter, Reddit, Telegram, LinkedIn, VK, Pocket, Pinterest

#### Featured Image

There are two main different ways to add a featured image for a page.

**Option 1.** Put `featured.*` or `thumbnail.*` image file in the
[page bundle](https://gohugo.io/content-management/page-bundles/).

**Option 2.** Put any image in the page bundle & specify `featured` param in the page's front matter.

You may put any image in the page bundle and specify `featured` param in the page's front matter:

```yaml
featured: image.jpg
```

Or you can add some additional params like `alt`, `caption`, `credit` and `previewOnly`:

```yaml
featured:
  url: image.jpg
  alt: A scale model of the Eiffel tower standing on a map
  caption: Eiffel tower model
  credit: Unknown author
  previewOnly: false
```

**Note**: `caption` and `credit` appear only on single pages, not summaries.

#### Breadcrumb

Breadcrumb navigation is a hierarchical navigation menu presented as a trail of links. The main purpose of breadcrumb is
to help users navigate in the site hierarchy.

For enabling breadcrumb partial globally (for all single and list pages), use `enable` param under the
`[Params.Breadcrumb]` section of your config.toml file:

```toml
[Params.Breadcrumb]
  enable = true
```

The global `.Site.Params.Breadcrumb.enable` param can be overridden for specific pages with `breadcrumb` front matter
param:

```yaml
breadcrumb: false
```

#### Footer Social Icons

With Binario, you have the option to display social icons in the footer. To display them, set up `[Params.Social]`
specific parameters in your site config file.

Available social services: Email, Facebook, Twitter, Telegram, Instagram, Pinterest, VK, LinkedIn, GitHub, GitLab,
Stack Overflow, Mastodon, Medium

#### Web App Manifest

[Web App Manifest](https://developers.google.com/web/fundamentals/web-app-manifest/) is a simple json file with basic
site info like name, description, icons, etc. This file tells the browser about your web application and how it should
behave when "installed" (as PWA) on the users mobile device or desktop.

To activate Web App Manifest, define `MANIFEST` as custom output format and include this for `home` Kind attribute in
your site config file. Here's how to make it.

First of all, you should define `MANIFEST` custom output format [`config.toml`]:

```toml
[outputFormats]
  [outputFormats.MANIFEST]
    mediaType = "application/json"
    baseName = "manifest"
    isPlainText = true
    notAlternative = true
```

Then, include `MANIFEST` output format for `home` Kind attribute [`config.toml`]:

```toml
[outputs]
  home = ["HTML", "RSS", "MANIFEST"]
```

After that, Web App Manifest file will be generated. Still, it's better to specify `[Params.Manifest]` params to make
sure that everything works as expected.

| Web App Manifest Property | `.Site.Params.Manifest` Key | Default Value | Type        |
| ------------------------- | --------------------------- | ------------- | ----------- |
| name                      | name                        | `.Site.Title` | required    |
| short_name                | shortName                   | `.Site.Title` | required    |
| display                   | display                     | `browser`     | required    |
| start_url                 | startUrl                    | `/`           | required    |
| background_color          | backgroundColor             | `#2a2a2a`     | recommended |
| theme_color               | themeColor                  | `#1b1b1b`     | recommended |
| description               | description                 |               | recommended |
| orientation               | orientation                 |               | recommended |
| scope                     | scope                       |               | recommended |
| icons\*                   |                             |               | required    |

\* You can't customize manifest icons through config params, only replacing `icons/192.png` and `icons/512.png` files.

---

*To verify that your manifest file is configured properly and works well, run Hugo server and open
Chrome DevTools (Press F12 in Chrome) → Application → Manifest*

*If you use Apache as a web server, you may have difficulty accessing files in the icons folder within your root dir.
Check [Issue #4](https://github.com/Vimux/Binario/issues/4) for more information.*

## Contributing

Have a bug? [Please open a new issue](https://github.com/vimux/binario/issues/new).

Pull requests are very welcome too, but please make sure they match the existing
[contributing guide](https://github.com/vimux/binario/blob/master/CONTRIBUTING.md).

## License

Binario is licensed under the [MIT License](https://github.com/vimux/binario/blob/master/LICENSE).

* Social media icons based on [SuperTinyIcons](https://github.com/edent/SuperTinyIcons) [MIT]
* CSS Reset based on [Bootstrap Reboot](https://github.com/twbs/bootstrap/blob/v4-dev/dist/css/bootstrap-reboot.css)
[MIT]
