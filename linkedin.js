function removeAds() {

    // Get all 'span' elements on the page
    let spans = document.getElementsByTagName("span");

    for (let i = 0; i < spans.length; ++i) {
        // Check if they contain the text 'Promoted'
        if (spans[i].textContent.trim() == "Promoted") {
            // console.log("Hi i am add blocker");
            // Get the div that wraps around the entire ad
            let card = spans[i].closest(".feed-shared-update-v2");

            // If the class changed and we can't find it with closest(), get the 6th parent
            if (card === null) {
                // Could also be card.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode :D
                let j = 0;
                card = spans[i];
                while (j < 6) {
                    card = card.parentNode;
                    ++j;
                }
            }

            // Make the ad disappear!
            if (card) {
                card.style.display = "none";
                console.log('Ad removed:');
            }
        }
    }
}


removeAds();

// Ensures ads will be removed as the user scrolls
setInterval(removeAds, 100);