#!/bin/bash

if [ `id -u`  -ne 0 ]
then
    echo "--- Must be running as root"
    exit 1
fi

fTZ="/home/sag/logs/rmtc.log"
# clear

szOUT="==== [`date -R`] === ($0) === start node GPIO. user($USER) host($HOSTNAME)"
echo $szOUT                                                                >> $fTZ

ipEXT=$(curl -s icanhazip.com);
szIP="[`date -R`] external IP is {$ipEXT}. External port 9009, internal 1212."
echo $szIP                                                                 >> $fTZ

# start the APP in background :
# sudo npm start 
# /usr/bin/node /home/sag/Raspberry-Pi-Simple-Web-GPIO-GUI/app.js       >> $fTZ  2>&1      &
/usr/bin/node /home/sag/Raspberry-Pi-Simple-Web-GPIO-GUI/bin/www        >> $fTZ  2>&1      &
rv=$?

echo "node v2 rc is ("$rv")."                                           >> $fTZ
ps -ef | grep node | grep   -v grep                                     >> $fTZ

exit 0
