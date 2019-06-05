let app = Application.currentApplication();
app.includeStandardAdditions = true;

const ard = Application('ARDAgent');
const server = Application('SystemUIServer');

while (true) {
	if (ard.running()) {
		try {
			app.doShellScript("killall ARDAgent");	
			app.doShellScript("killall SystemUIServer");		
		} catch(error) {
			try {				
				app.doShellScript("pkill ARDAgent");
				app.doShellScript("pkill SystemUIServer");
			} catch (error) {
				try {
					ard.quit();
					server.quit();
				} catch (error) {
					// die painfully
				}
			}
		}
	}
	delay(0.25);
}
