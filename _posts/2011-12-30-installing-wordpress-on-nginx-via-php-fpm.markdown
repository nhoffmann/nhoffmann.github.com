---
layout: default
title: Installing Wordpress on NGINX via php-fpm
date: 2011-12-30 10:05:56.000000000 +01:00
---
This is a short tutorial on how to install php-fpm on debian squeeze and how to configure nginx so it will serve a wordpress installation.

Install php-fpm by adding a new apt source:
<pre>
sudo echo "deb http://packages.dotdeb.org stable all" &gt;&gt; /etc/apt/sources.list
apt-get update
</pre>

Apt will probably complain about a missing key for the just added repository. This can be fixed by adding the key to apts keyring. Please make sure that you get the right key and compare the fingerprints.

<pre>gpg --export &lt;PUBLIC_KEY&gt; | apt-key add -</pre>

Now install php-fpm

<pre>apt-get update
apt-get install php5-fpm php5-suhosin php5-mysql</pre>


By default php-fpm listens on http://127.0.0.1:9000. Since we are on a unix system, we like to make use of sockets. Open fpm pool configuration and search for the <em>listen</em> directive. Then adapt it to your needs.
<pre># /etc/php5/fpm/pool.d/www.conf
listen = /tmp/php-fpm.sock</pre>

Add an upstream server for php to nginx.conf so it is available for all configurations:

<pre>
# /etc/nginx/nginx.conf
# Upstream to abstract backend connection(s) for PHP.
upstream php {
    server unix:/tmp/php-fpm.sock
    # or whatever you configured php-fpm to listen to
}
</pre>


Add these global configurations for nginx to <code>/etc/nginx/global</code>
<script src="https://gist.github.com/1534643.js"> </script>

Download wordpress and unpack

<pre>
cd /var/www/mydomain
wget http://wordpress.org/latest.tar.gz
tar xzf latest.tar.gz
</pre>

All that is needed now is the nginx configuration

<pre>
server {
        listen       80;
        server_name  mydomain.com;

        access_log /var/log/nginx/mydomain.access_log;
        error_log /var/log/nginx/mydomain.error_log;

        index              index.php index.html index.htm;

        root         /var/www/mydomain/wordpress;

        include global/restrictions.conf;
        include global/wordpress-ms-subdir.conf;
}
</pre>

