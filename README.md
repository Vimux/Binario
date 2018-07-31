# Binario [WIP]

**Binario** is a responsive card-based & code-light Hugo theme.

![Binario theme screenshot](https://github.com/vimux/binario/blob/master/images/tn.png)

**Features:**

* Responsive
* Card-based list layout
* Internal Hugo templates for Open Graph and Twitter Cards meta data, Google Analytics, and Disqus comments
* Table of contents
* Related content
* MathJax

## Installation

*First of all, you will need to [install Hugo](https://gohugo.io/getting-started/quick-start/#step-1-install-hugo) and [create new site](https://gohugo.io/getting-started/quick-start/#step-2-create-a-new-site).* After that, you ready to install **Binario**.

There are three different ways you can install **Binario**:

- **A**. [Git submodule (**Recommended**)](#step-1a-git-submodule-recommended)
- **B**. [Git clone](#step-1b-git-clone)
- **C**. [Download ZIP and manual install](#step-1c-download-zip-and-manual-install)

*For more information read the [Install and Use Themes](https://gohugo.io/themes/installing-and-using-themes/)*

### 1A. Git submodule (Recommended)

In your Hugo site directory, run:

```
$ git submodule add https://github.com/vimux/binario themes/binario
```

Next, edit your `config.toml` configuration file and add parameter:

```
theme = "binario"
```

*You can [read the GitHub documentation for submodules](https://github.com/blog/2104-working-with-submodules) or those found on [Git's website](https://git-scm.com/book/en/v2/Git-Tools-Submodules) for more information*

### 1B. Git clone

In your Hugo site directory, run:

```
$ git clone https://github.com/vimux/binario themes/binario
```

Next, edit your `config.toml` configuration file and add parameter:

```
theme = "binario"
```

### 1C. Download ZIP and manual install

[Download ZIP](https://github.com/vimux/binario/archive/master.zip) and extract to the `themes/binario`

Next, edit your `config.toml` configuration file and add parameter:

```
theme = "binario"
```

## Configuration

### Config.toml example

```toml
baseurl = "/"
title = "Binario"
languageCode = "en-us"
paginate = "10" # Number of posts per page
theme = "binario"
disqusShortname = "" # Enable comments by entering your Disqus shortname
googleAnalytics = "" # Enable Google Analytics by entering your tracking id

[Params]
  author = "John Doe" # Used in meta author. Optional
  description = "Responsive card-based & code-light Hugo theme" # Description of your site. Used in meta description
  opengraph = true # Enable OpenGraph if true
  twitter_cards = true # Enable Twitter Cards if true
  cardsPerRow = 2 # Possible values: 1, 2, 3
  mainSections = ["post"] # Set main page sections
  dateFormat = "January 02, 2006" # change the format of dates
  toc = true # Enable Table of Contents for all site pages
  tocOpen = true # Open Table of Contents block. Optional
  comments = true # Enable comments for all site pages
  mathjax = true # Enable MathJax for all site pages
  mathjaxPath = "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js" # Specify MathJax path. Optional
  mathjaxConfig = "TeX-AMS-MML_HTMLorMML" # Specify MathJax config. Optional

[Params.Social]
  email = "example@example.com"
  facebook = "username"
  twitter = "username"
  telegram = "username"
  googleplus = "profileid"
  instagram = "username"
  pinterest = "username"
  vk = "username"
  linkedin = "username"
  github = "username"
  gitlab = "username"
  stackoverflow = "numberid"
  mastodon = "username"
  medium = "username"

[Params.Share] # Post Share block
  facebook = true
  twitter = true
  reddit = true
  telegram = true
  linkedin = true
  googleplus = true
  vk = true
  pocket = true

# Web App Manifest settings
# https://www.w3.org/TR/appmanifest/
# https://developers.google.com/web/fundamentals/web-app-manifest/
[Params.Manifest]
  name = "Binario"
  shortName = "Binario"
  display = "browser"
  backgroundColor = "#2a2a2a"
  themeColor = "#1b1b1b"
  description = "Responsive card-based & code-light Hugo theme"
  orientation = "portrait"
  startUrl = "/"
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

## Contributing

Have a bug? [Please open a new issue](https://github.com/vimux/binario/issues/new).

Pull requests are very welcome too, but please make sure they match the existing [contributing guide](https://github.com/vimux/binario/wiki/contributing).

## License

Binario is licensed under the [MIT License](https://github.com/vimux/binario/blob/master/LICENSE).

* Social media icons based on [SuperTinyIcons](https://github.com/edent/SuperTinyIcons) [MIT]
