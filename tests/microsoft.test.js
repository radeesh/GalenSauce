load("pages/microsoft.js");
load("init.js");

test("Microsoft Header", function () {
    var driver = openDriver("https://microsoft.com");
    resize(driver, devices.desktop.size);		
	checkLayout(driver, "specs/home.gspec", ["desktop"]);
	signin(driver);
});