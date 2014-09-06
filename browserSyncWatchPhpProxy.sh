#!/bin/bash
# simple browser sync script 
# dont forget to chmod 755 browserSyncWatch.sh

cd /home/paul/solarweb
commandline = $(browser-sync start --proxy "localhost:3001" --files "styles/*.css, *.html, *.php")
echo($commandline)