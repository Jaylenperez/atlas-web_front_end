function changeMode(size, weight, transform, background, color) {
    return function() {
      document.documentElement.style.fontSize = `${size}px`;
      document.documentElement.style.fontWeight = weight;
      document.documentElement.style.textTransform = transform;
      document.documentElement.style.backgroundColor = background;
      document.documentElement.style.color = color;
    };
  }
  
  function main() {
    // Set variables for different modes
    const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    // Create wrapper for centered content
    const wrapper = document.createElement('div');
    wrapper.style.textAlign = 'center';

    // Create Header
    const header = document.createElement('h1');
    header.textContent = "You're browsing as A Guest";
    header.style.paddingTop = '30px';
    header.style.fontSize = '36px';
    wrapper.appendChild(header);

    // Create Body Text
    const bodyText = document.createElement('div');
    bodyText.innerHTML = 'Pages you view in this window won\'t appear in the browser history and they<br> won\'t leave other traces, like cookies, on the computer after you close all<br> open guest windows.Any files you download will be preserved, however.<br>';
    bodyText.style.fontSize = '20px';
    bodyText.style.paddingBottom = '30px';
    wrapper.appendChild(bodyText);

    // Create a link
    const link = document.createElement('a');
    link.textContent = "Learn More";
    link.href = "https://www.example.com"; // Replace with your desired URL
    link.style.textDecoration = 'none';
    link.style.fontSize = '18px';
    wrapper.appendChild(link);

    // Append wrapper to the body
    document.body.appendChild(wrapper);

    // Welcome Message
    const para = document.createElement('p');
    para.textContent = 'Welcome Atlas!';
    para.style.position = 'fixed';
    para.style.bottom = '20px';
    para.style.fontSize = '17px';
    document.body.appendChild(para);
  
    // Buttons
    const spookyButton = document.createElement('button');
    spookyButton.textContent = 'Spooky';
    spookyButton.onclick = spooky;
    spookyButton.style.position = 'fixed';  // Fix to the bottom
    spookyButton.style.bottom = '5px';     // Distance from the bottom
    spookyButton.style.left = '1%';        // Center horizontally
    spookyButton.style.transform = 'translateX(-1%)'; // Correct for ex
    document.body.appendChild(spookyButton);
  
    const darkButton = document.createElement('button');
    darkButton.textContent = 'Dark Mode';
    darkButton.onclick = darkMode;
    darkButton.style.position = 'fixed';  // Fix to the bottom
    darkButton.style.bottom = '5px';     // Distance from the bottom
    darkButton.style.left = '6.3%';        // Center horizontally
    darkButton.style.transform = 'translateX(-6.3%)'; // Correct for exact 
    document.body.appendChild(darkButton);
  
    const screamButton = document.createElement('button');
    screamButton.textContent = 'Scream Mode';
    screamButton.onclick = screamMode;
    screamButton.style.position = 'fixed';  // Fix to the bottom
    screamButton.style.bottom = '5px';     // Distance from the bottom
    screamButton.style.left = '13.5%';        // Center horizontally
    screamButton.style.transform = 'translateX(-13.5%)'; // 
    document.body.appendChild(screamButton);
  }
  
  // Call the main function
  main();
  