---
layout: post
title: Installing Voyage Linux 0.8 on Alix 2D2
date: 2012-01-12 14:57:17.000000000 +01:00
tags:
  - Alix
---
I had this <a href="http://www.pcengines.ch/alix2d2.htm" title="ALIX 2D2">ALIX 2D2</a> lying around for quite some time. The initial idea was to build a custom router/wlan-accespoint, but I never found the time. Now I at least installed a system and am now able to play around with it. Following are some insights on the process.

<h2>Prerequisites</h2>
<ul>
	<li>ALIX.2D2</li>
	<li>FlashCard Reader</li>
	<li>FlashCard (choose at least 2 GB, these things are cheap nowadays)</li>
	<li>USB to Serial adapter</li>
	<li>Serial cable</li>
</ul>


<h2>Voyage Linux</h2>
The Linux distribution of choice is <a href="http://linux.voyage.hk/" title="Voyage Linux">Voyage Linux</a> (Version 0.8 at the time of writing). Voyage is Debian-based, optimized for embedded systems and especially supports ALIX boards. Voyage Linux comes with a very complete <a href="http://linux.voyage.hk/content/getting-started-v08x" title="Voyage Linux installation instruction">installation instruction</a>. This post is about some smaller steps that are  missing from the instructions and some additional instructions on how to do certain things when on OS X.

<h2>Get a debian system</h2>
As mentioned before, voyage is debian based. So just to make sure you are on the safe side you should get a debian system and run the installer and everything from there. Since I am on OS X I just used a debian VirtualBox and will refer to it as VirtualBox later on.

<h2>Mounting the Flash Card for system installation</h2>
I wrote a separate <a href="http://zentralmaschine.net/index.php/2012/01/accessing-usb-devices-in-virtual-box/" title="Accessing USB Devices in Virtual Box">post on how to mount a Flash Card in VirtualBox</a>. Make sure the Flash Card Reader is configured correctly and boot up your VirtualBox.

<h2>Installing the system</h2>
Assuming that you are in your VirtualBox, from now on everything is pretty straight forward. Just follow <strong>step 2</strong> from <a href="http://linux.voyage.hk/content/getting-started-v08x" title="Voyage Linux installation instruction">installation instruction</a>. Configuration of the system is doen with a nifty installer script called <code>voyage.update</code>. But before you start, make sure you have rsync installed. The <code>voyage.update</code> script will try to rsync the files to the installation destination and fail if your VirtualBox does not have rsync installed. Also the installation instructions advise you to format the FlashCard which is not really necessary as this is also integrated into <code>voyage.update</code>.


<h2>Plugin the FlashCard into your Alix and connect via serial console</h2>
After running the <code>voyage.update</code> script you should have a shiny new voyage system on your FlashCard. You can now <code>chroot</code> into it from your VirtualBox and configure the system or install additional software. But let's do this on the real device.

First of all you should make sure that your USB-Serial adapter is working properly. I wrote another separate post on <a href="http://zentralmaschine.net/index.php/2012/01/installing-usb-to-serial-adapter/" title="Installing USB to Serial adapter">getting USB-Serial adapter to work under OS X Lion</a>.

Plug in the FlashCard into the appropriate slot of your Alix board and connect the serial cable. For monitoring the serial port we are using <code>screen</code>:

<pre>$ screen /dev/cu.PL2303-xxxxx 38400</pre>

Now switch on your Alix and start hacking away!
