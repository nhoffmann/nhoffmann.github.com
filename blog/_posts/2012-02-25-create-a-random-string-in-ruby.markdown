---
layout: post
title: Create a Random String in Ruby
date: 2012-02-25 03:37:42.000000000 +01:00
tags:
  - Ruby
---
Not the hardest of tasks, but nevertheless a discussed one: Creating random strings in ruby. And that would be base62 encoded strings, so that they can be used in URLs.

So what to do? Using [this solution](http://stackoverflow.com/a/88341/310497)? Not random enough.

What about the solutions described in [this blog post](http://blog.logeek.fr/2009/7/2/creating-small-unique-tokens-in-ruby)? Promising. And I like the ActiveSupport::SecureRandom method best.

But since ruby1.9 we have SecureRandom natively and want to use that. Also simply removing the characters that do not fit in base62 will produce strings of differing length and we don't want that. What to do?

Mashup!

    SecureRandom.base64(6).gsub(/[$=+\/]/,65.+(rand(25)).chr)


ProTip: play around with the base64 parameter to change the length of the generated string.
