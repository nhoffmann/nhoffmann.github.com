---
layout: post
title: Fixing Invalid Byte Sequence Once And For All
date: 2012-02-24 15:03:24.000000000 +01:00
---

This was driving me nuts. As everybody knows ruby 1.9+ supports files in different encodings. Unfortunately it defaults to US-ASCII (at least on my machine) and thus breaks with every UTF-8 file that has a character not in the US-ASCII range.

You know what I am talking about when you have seen one of these dreadful warnings:

    # bundle exec rake build
    rake aborted!
    invalid byte sequence in US-ASCII


##Here are possible solutions

Use magic comments and set the encoding in the top of each file like so

    # encoding: UTF-8
    umlaut_string = "mlaut strng"
    ...


or set the encoding at the application level with

    Encoding.default_external = Encoding::UTF_8 if RUBY_VERSION > "1.9"


or set the LOCALE to something UTF-8ish

    LC_CTYPE=en_US.UTF-8 LANG=en_US.UTF-8 my-ruby-command


or simply set the default encoding for ruby to UTF-8 with

    # /usr/bin/ruby -Ku


Actually, this is my preferred solution, because I want to have UTF-8 as the default and set it to any other encoding only when needed.

You can make this permanent by including an export statement in your .bashrc or .zshrc

    export RUBYOPT=-Ku

