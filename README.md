# ![](logo/discourse-64.png) Discourse HTML

A super simple [Browser Extension][] for redirecting [Discourse][] community
websites to their HTML versions, rather than their [js;dr][] defaults.

1. Automatically [append `?_escaped_fragment_`][] to any known Discourse URL.

2. Offer an options page for the user to configure Discourse URLs.

## Differences from spec

The extension was created with [the Browser Extensions specification][spec] in
mind. It turns out this is very hard to do while also supporting real
life browsers.

* This extension uses the [`options_ui` manifest key][] instead of the
  [`options_page` manifest key][] from the spec.
* This extension asks for the non-standard `storage` permission to use the [Web
  Storage API][].

Any other differences should be reported and either documented here or fixed
as bugs.

## Code Style

This extension follows the [JavaScript Standard Style][]. I apologise if you
love semicolons. Make sure to run it under the WebExtensions environment:

```
standard --env webextensions
```

## Licenses

* The official logo [`discourse.png`][] is “®, Civilized Discourse Construction 
  Kit, Inc.” and was used as a base for this extension’s logo.

* Everything else is released under the BSD Zero Clause License (0BSD).
  Please see the [`LICENSE`](LICENSE) file for more information.

[Browser Extension]: https://browserext.github.io/
[Discourse]: https://www.discourse.org/
[js;dr]: https://indieweb.org/js;dr
[append `?_escaped_fragment_`]: https://news.ycombinator.com/item?id=14247848
[pull requests]: https://help.github.com/articles/creating-a-pull-request/
[spec]: https://browserext.github.io/browserext/
[`options_ui` manifest key]: https://developer.mozilla.org/en-US/Add-ons/WebExtensions/manifest.json/options_ui
[`options_page` manifest key]: https://browserext.github.io/browserext/#list-of-keys
[Web Storage API]: https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/storage
[JavaScript Standard Style]: https://standardjs.com/
[`discourse.png`]: https://github.com/discourse/discourse/blob/96b46170941f9ef8f492a993b0fbcbf591a1e9ae/images/discourse.png
