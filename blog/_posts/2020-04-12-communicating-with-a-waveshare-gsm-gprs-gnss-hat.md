---
layout: post
title: Communicating with a Waveshare GSM/GPRS/GNSS hat
date: 2020-04-12 00:13:14.000000000 +01:00
---

As a reference for my future self, this is documentation on how to communicate with a [Waveshare GSM/GPRS/GNSS hat](https://www.waveshare.com/wiki/GSM/GPRS/GNSS_HAT) from OS X.

## 1. Install USB to UART bridge to get a Virtual COM Port

Download the driver for your platform from [https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers) and
follow the installation instructions.

On MacOS, you can verify the installation succeeded by checking your System Informations panel. In the USB section you should see the "CP2102 USB to UART Bridge Controller"

![Screenshot of System Information Ppnel](/assets/posts/CP2102USBtoUARTBridgeController.png)

You should now have a new tty in your devices called:

{% highlight shell %}
/dev/tty.SLAB_USBtoUART
{% endhighlight %}

## 2. Attach the modem/hat to your machine

Make sure the jumpers are in the "A USB - SIM868" position.

![picture of the jumpers](/assets/posts/gsm_hat_jumper.jpg)

Connect to the modem via USB. Only the PWR Led should be on.
Switch on the modem by pressing and holding the power button.
In addition to the PWR Led, the STA Led should be on. If you have a SIM card installed and it is working properly, the NET Led will blink fast (every second) indicating that the modem is trying to establish a connection to the carrier. Once that connection is established the NET Led will flash every 3 seconds.


![GSM hat leds](/assets/posts/gsm_hat_leds.jpg)


## 3. Talk to the modem via serial console

You can use screen, minicom or any other CLI or graphical terminal emulator to connect to the tty device and talk to the modem.
I used minicom, because it provides a configuration file, where you can save the modem device, baud rate and other stuff so you don't have to type that in every time. Please refer to installation and configuration instructions for minicom on how to set that up.


Check if you can communicate with the modem by typing

{% highlight shell %}
AT
{% endhighlight %}

Which should result in an

{% highlight shell %}
OK
{% endhighlight %}

response.

![minicom terminal connected to GSM hat](/assets/posts/minicom_screenshot.png)

Congrats, you are ready to talk with your modem using AT commands.
See [AT Command manual](https://www.waveshare.com/w/upload/2/20/SIM800_Series_AT_Command_Manual_V1.09.pdf) for a reference of available commands and functionality.

Happy hacking!


