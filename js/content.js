// Create a new CSS rule to style the "flag" label
let cssRule = document.createElement('style');
cssRule.type = 'text/css';
cssRule.innerHTML = `
  .link-label {
    position: absolute;
    background-color: yellow;
    color: black;
    padding: 2px;
    font-size: 10px;
  }
`;
document.head.appendChild(cssRule);

// Loop through all the links on the page and add a "flag" label
let links = document.getElementsByTagName("a");
for (let i = 0; i < links.length; i++) {
  let link = links[i];
  let label = document.createElement('div');
  label.className = 'link-label';
  label.innerText = 'no flags';
  link.parentNode.appendChild(label);
}


// Find all links to Youtube videos
const videoLinks = document.querySelectorAll("a[href^='https://www.youtube.com/watch']");

// Add the "video" text to each video link
videoLinks.forEach((link) => {
  const text = document.createTextNode(" video");
  link.appendChild(text);
});


