document.addEventListener('DOMContentLoaded', () => {
    const facts = [
        "Toothpaste: The oldest recipe for toothpaste is from ancient Egypt, and dates back to around 5000 BC. The Egyptians made a paste of abrasive substances like salt and sweet-smelling flowers to...",
        "The Nile River: The ancient Egyptians believed the Nile River was a god because it was so important to their everyday life. The Nile is the longest river on Earth, and its mud helped shape human history.",
        "Pyramids: The pyramids were built by paid laborers from far away, not slaves. It took over 100,000 people to build the pyramids.",
        "Afterlife: The ancient Egyptians believed that life on Earth was part of an eternal journey that ended in everlasting joy in the afterlife.",
        "Hieroglyphics: Hieroglyphics were one of the world's first written languages and were used to create one of the world's first comprehensive histories.",
        "Calendar: The ancient Egyptians built their calendar around the Nile River, with three seasons: flooding, growing, and harvesting.",
        "Board games: The ancient Egyptians enjoyed playing board games in their spare time, including Mehen and Senet.",
        "Cleopatra: Cleopatra was born in Egypt, but her family origins were in Macedonian Greece."
    ];

    const factDisplay = document.getElementById('fact-display');
    const generateFactButton = document.getElementById('generate-fact');

    generateFactButton.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * facts.length);
        const selectedFact = facts[randomIndex];
        const colonIndex = selectedFact.indexOf(':');
        const title = selectedFact.slice(0, colonIndex);
        const description = selectedFact.slice(colonIndex + 1).trim();
        
        // Animate the fact display
        factDisplay.classList.remove('updated');
        setTimeout(() => {
            factDisplay.innerHTML = `<strong>${title}</strong><br>${description}`;
            factDisplay.classList.add('updated');
        }, 100);
    });
});
