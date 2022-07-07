const registerServiceWorker = async () => {
	if ('serviceWorker' in navigator) {
		try {
			const registration = await navigator.serviceWorker.register('./serviceworker.js', { scope: '/'});

			registration.installing && console.log('Service worker installing');
			registration.waiting && console.log('Service worker installed');
			registration.active && console.log('Service worker active');
		} catch (error) {
			console.error(`Service worker registration failed with ${error}`);
		}
	}
};

registerServiceWorker();