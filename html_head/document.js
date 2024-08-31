// Wait for the DOM content to fully load before executing the script
document.addEventListener('DOMContentLoaded', function() {
    // Select the music bar element from the DOM
    const musicBar = document.querySelector('.music-bar');
    
    // Array of lyrics to display in the music bar
    const lyrics = ['Hello world!', 'This is a test.', 'Scrolling music bar'];

    // Index to keep track of the current lyric being displayed
    let currentLyricIndex = 0;

    // Function to update the lyrics displayed in the music bar
    function updateLyrics() {
        // Select the span element inside the music bar where the lyrics are displayed
        const lyricSpan = musicBar.querySelector('span');
        
        // Set the text content of the span to the current lyric
        lyricSpan.textContent = lyrics[currentLyricIndex];
        
        // Move to the next lyric in the array, looping back to the start
        currentLyricIndex = (currentLyricIndex + 1) % lyrics.length;
    }

    // Call the updateLyrics function every 5 seconds to change the lyrics
    setInterval(updateLyrics, 5000); // 5000 milliseconds = 5 seconds

    // Add a click event listener to the music bar
    musicBar.addEventListener('click', () => {
        // Log a message to the console when the music bar is clicked
        console.log('Music bar clicked!');
        // TODO: Implement additional actions for the click event here
    });
});
