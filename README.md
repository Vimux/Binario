# Binario [WIP]

**Binario** is a responsive card-based & code-light Hugo theme.

![Binario theme screenshot](https://github.com/vimux/binario/blob/master/images/tn.png)

**Features:**

* Responsive
* Card-based list layout
* Internal Hugo templates for Open Graph and Twitter Cards meta data, google analytics, and Disqus comments

## Configuration

### Config.toml example

```toml
baseurl = "/"
title = "Your Site Title"
languageCode = "en-us"
paginate = "10" # Number of posts per page
theme = "binario"
disqusShortname = "" # Enable comments by entering your Disqus shortname
googleAnalytics = "" # Enable Google Analytics by entering your tracking id

[Params]
author = "John Doe" # Used in meta author. Optional
description = "John Doe's Personal blog about everything" # Description of your site. Used in meta description
opengraph = true # Enable OpenGraph if true
twitter_cards = true # Enable Twitter Cards if true
cardsPerRow = 2 # Possible values: 1, 2, 3
#dateFormat = "2006-01-02" # change the format of dates

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
