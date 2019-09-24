---
title: Translation Support
description: With Hugo i18n possibilities, you can easily have a website in your language. This article explains how to translate and change language in Hugo's generated site.
date: 2019-09-22
tags:
  - "Translation"
  - "i18n"
  - "Hugo"
featured:
  alt: Translation support
  previewOnly: true
---

With Hugo i18n possibilities, you can easily have a website in your language. This Hugo theme is ready to be translated into other languages. You can create a special file that contains translated text to show the visitor instead of English.
<!--more-->

## Translating the Theme

1. Create a folder named `/i18n/` in your Hugo site's root
1. Create a file `<LANG-CODE>.yaml` inside `/i18n` folder. Language files `<LANG-CODE>.yaml` should be named according to RFC 5646 with names such as `en-US.yaml`, `fr.yaml`, `de.yaml`, etc.
1. Copy a reference template to your translation from `<THEME>/i18n/en.yaml` file
1. Translate all available `translation` strings into chosen language

For example, to create German translation, create a file `/i18n/de.yaml` in the folder of your Hugo site, copy reference template from `<THEME>/i18n/en.yaml` file and translate all available `translation` strings.

## Changing Site Language in Hugo

To use the translations, just set a correct value for `defaultContentLanguage` in site config file:

{{< highlight toml >}}
defaultContentLanguage = "en" # de / fr / other lang code...
{{< /highlight >}}

In other words, this field determines which i18n file to use.

## Contributing Translation

If you want to upload your translation in the theme master repository, feel free to create a pull request.

## More Information

* [Hugo Multilingual Mode](https://gohugo.io/content-management/multilingual/)
* [Hugo i18n function](https://gohugo.io/functions/i18n/)
