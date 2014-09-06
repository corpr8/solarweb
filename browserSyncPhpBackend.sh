#!/bin/bash
# simple browser sync script 
# dont forget to chmod 755 browserSyncWatch.sh

cd /home/paul/solarweb
#browser-sync start --proxy localhost:3001  --files "stylesheets/*.css, *.html"
node server.js