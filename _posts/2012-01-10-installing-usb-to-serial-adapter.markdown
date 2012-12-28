---
layout: post
title: Installing USB to Serial Adapter
date: 2012-01-10 00:48:17.000000000 +01:00
---
Need to access old hardware or hardware that only comes with a serial interface? Well, there is an adapter for that. Only problem: Getting mac drivers for OS X Lion.

Turned out that this is not such a big problem, at least not if your adapter is running on the <a href="http://www.prolific.com.tw/eng/Products.asp?ID=88" title="PL-2303HX USB to Serial Bridge Controller">Prolific Chipset</a>. 

Make sure your adapter is connected to a USB port and open up <code>System Information</code>. Select <code>Hardware -> USB</code> and look for a <code>USB Serial Controller</code>. When selecting it, you should get detailed information on that device. Does it look something like this?

<a href="http://zentralmaschine.net/wp-content/uploads/2012/01/Screen-Shot-2012-01-10-at-12.39.54-AM.png"><img src="http://zentralmaschine.net/wp-content/uploads/2012/01/Screen-Shot-2012-01-10-at-12.39.54-AM.png" alt="" title="USB-Serial Controller" width="429" height="162" class="aligncenter size-full wp-image-62" /></a>

If yes, you can consider yourself lucky. A guy called <a href="http://xbsd.nl/2011/07/pl2303-serial-usb-on-osx-lion.html" title="PL2303 serial usb on osx lion">./martijn wrote a driver that works under 10.7</a> and another guy called <a href="http://changux.co/osx-installer-to-pl2303-serial-usb-on-osx-lio" title="osx installer for pl2303 serial usb on osx lion">changux wrote a convenient installer for that same driver</a>.

Enjoy!
