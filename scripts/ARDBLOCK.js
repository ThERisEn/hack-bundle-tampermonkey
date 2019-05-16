let app = Application.currentApplication();
app.includeStandardAdditions = true;

let ard = Application('ARDAgent');

while (true) {
	if (ard.running()) {
		try {
			app.doShellScript("killall ARDAgent");			
		} catch(error) {
			try {				
				ard.doShellScript("pkill ARDAgent");
			} catch (error) {
				try {
					ard.quit();
				} catch (error) {
					// It's f***ing invincible
				}
			}
		}
	}
	delay(0.25);
}
