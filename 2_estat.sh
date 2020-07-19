#!/bin/bash

echo "(1) +++ estat del node"
ps -ef | grep Raspberry-Pi-Simple-Web-GPIO-GUI | grep   -v grep   

echo "(2) +++ ports"
sudo netstat -tulpn | grep LISTEN | grep Raspberry-Pi-Simple-Web-GPIO-GUI

exit 0
