var devices = {
    mobile: {
        deviceName: "mobile",
        size: "450x800",
        tags: ["mobile"]
    },
    tablet: {
        deviceName: "tablet",
        size: "600x800",
        tags: ["tablet"]
    },
    desktop: {
        deviceName: "desktop",
        size: "1920x1080",
        tags: ["desktop"]
    }
};

var TEST_USER = {
    username: "qaMe@gmail.com",
    password: "password1"
};

function openDriver(url) {
	var driver = createGridDriver("http://username:saucekey@ondemand.saucelabs.com/wd/hub", {
	  browser: "chrome",
	  desiredCapabilities: {
	    platform: "win8.1",
	    version: "46",
   	    name: "Layout Test",
        tunnelIdentifier: "galen"
	  }
	});
    session.put("driver", driver);

    if (url != null) {
        driver.get(url);
    }
    return driver;
}

/*
Tobe called after each test
*/
afterTest(function (test) {
    var driver = session.get("driver");
    if (driver != null) {
        if (test.isFailed()) {
            session.report().info("Screenshot").withAttachment("Screenshot", takeScreenshot(driver));
        }
        driver.quit();
    }
});

/*
    Exporting functions to all other tests that will use this script
*/
(function (export) {
    export.devices = devices;
    export.openDriver = openDriver;
    export.TEST_USER = TEST_USER;
})(this);