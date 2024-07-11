chrome.webNavigation.onCommitted.addListener((details) => {
    try {
        // Ensure the frameId is 0 (main frame) and the URL contains "linkedin.com"
        if (details.frameId === 0 && details.url.includes("linkedin.com")) {
            chrome.scripting.executeScript({
                target: { tabId: details.tabId },
                files: ['linkedin.js']
            }, (result) => {
                // Check if there was an error executing the script
                if (chrome.runtime.lastError) {
                    console.error('Error injecting script: ', chrome.runtime.lastError.message);
                } else {
                    console.log('Script injected successfully: ', result);
                }
            });
        }
    } catch (error) {
        console.error('Error in webNavigation onCommitted listener: ', error);
    }
});
