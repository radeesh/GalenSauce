# GalenSauce
Testing with galen framework and sauce

##Install Galen
Follow instructions at http://galenframework.com/

##Sauce Key
Add your Sauce user name and key in init.js
```javascript
createGridDriver("http://username:saucekey@ondemand.saucelabs.com/wd/hub"
```
##Run tests
```
galen test tests/ --htmlreport "report-folder-name"
```