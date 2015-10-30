function signin(driver)
{
	if (driver.findElements(By.className("msame_Header_name")).size() > 0) {
		driver.findElement(By.className("msame_Header_name")).click();
	}
}	
