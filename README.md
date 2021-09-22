# Grafana Scraping project
This project is used to scrap a grafana instance and download all csv files from all charts in a specific pannel 

## Prerequisite
We need a functional instance of zabbix, connected with a grafana instance

## Install

First, you need to install node, and dependencies needed for this project  
-> https://nodejs.org/en/download/  
You’ll also need some packages that may or may not be available on your system. Just to be safe, try to install those:
```
sudo apt install -yq --no-install-recommends libasound2 libatk1.0-0 libc6
libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4
libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0
libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcursor1
libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1
libxtst6 libnss3
```
---

then, clone the project :   
``sudo git clone git@github.com:CinquinAndy/klee_pypetter_grafana_auto_download_csv.git``   

---

Run this command in your project root directory:  
``npm i puppeteer --save``

---
create a ``.env`` file  
then complete all these informations :  
```
LOGIN="<yourGrafanaLogin>"
PASSWORD="<yourPasswordLogin>"
URL="http://<grafanaInstanceURL>"
LINK_PANNEL="<URL_PannelThatYouWantToBeExported>"
```
example :  
```
LOGIN="admin"
PASSWORD="adminpass"
URL="http://192.168.172.131:3000"
LINK_PANNEL="/d/41ZYbC7mz/zabbix-full-server-status"
```

## How to use
Now you can just run the script with node
````
sudo node index.js
````
You will see all your downloaded files in `./csv` folder.
