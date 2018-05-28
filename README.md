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
#mainSections = ["post"] # Set main page sections
#dateFormat = "January 02, 2006" # change the format of dates
#toc: true # Enable Table of Contents for all site pages
#comments: true # Enable comments for all site pages
#mathjax: true # Enable MathJax for all site pages
#mathjaxPath: "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js" # Specify MathJax path. Optional
#mathjaxConfig: "TeX-AMS-MML_HTMLorMML" # Specify MathJax config. Optional

[Params.Social]
#facebook = "username"
#twitter = "username"
#telegram = "username"
#googleplus = "profileid"
#instagram = "username"
#pinterest = "username"
#vk = "username"
#linkedin = "username"
#github = "username"
#gitlab = "username"
#stackoverflow = "numberid"
#mastodon = "username"
#medium = "username"

[outputFormats]
  [outputFormats.MANIFEST]
    mediaType = "application/json"
    baseName = "manifest"
    isPlainText = true
    notAlternative = true

[outputs]
  home = ["HTML", "MANIFEST"]
```

## Contributing

Have a bug? [Please open a new issue](https://github.com/vimux/binario/issues/new).

Pull requests are very welcome too, but please make sure they match the existing [contributing guide](https://github.com/vimux/binario/wiki/contributing).

## License

Binario is licensed under the [MIT License](https://github.com/vimux/binario/blob/master/LICENSE).
