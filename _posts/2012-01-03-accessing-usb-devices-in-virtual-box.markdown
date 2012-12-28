---
layout: post
title: Accessing USB Device in Virtual Box
date: 2012-01-03 20:57:41.000000000 +01:00
---
Turned out that accessing a FlashCard from a VirtualBox Debian running on OS X Lion is not so straight forward as first anticipated. Well, a little googling found the answers needed and here's a setup that worked for me:

Plug in the card reader (or any USB device) to your computer and let Finder mount it.

In VirtualBox select <code>Settings -> Ports -> USB</code>. That should you present with a dialog where you can add and edit Filters.
<a href="http://zentralmaschine.net/wp-content/uploads/2012/01/Screen-Shot-2012-01-03-at-8.27.51-PM1.png"><img src="http://zentralmaschine.net/wp-content/uploads/2012/01/Screen-Shot-2012-01-03-at-8.27.51-PM1.png" alt="Settings &#8594;v Ports &#8594; USB" title="Settings &#8594;v Ports &#8594; USB" width="766" height="630" class="size-full wp-image-23" /></a>




Click the green plus sign and in the then opening dialog delete everything except <em>Name</em>, <em>Vendor ID</em> and <em>Product ID</em>.


<a href="http://zentralmaschine.net/wp-content/uploads/2012/01/Screen-Shot-2012-01-03-at-8.49.11-PM.png"><img src="http://zentralmaschine.net/wp-content/uploads/2012/01/Screen-Shot-2012-01-03-at-8.49.11-PM.png" alt="Your Vendor and Product ID will probably differ" title="Your Vendor and Product ID will probably differ" width="355" height="464" class="size-full wp-image-25" /></a>

Now start your VirtualBox Debian and check <code>dmesg</code>. The reader should have been recognised as <code>/dev/sda</code>.
