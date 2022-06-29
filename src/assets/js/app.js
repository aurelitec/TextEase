// Copyright 2022 Aurelitec. All rights reserved.
// Use of this source code is governed by an MIT-style license that can be
// found in the LICENSE file.

const easeSectionLength = 4;

const textInput = document.getElementById("textInput");
const toolbar = document.getElementById("toolbar");
const textEase = document.getElementById("textEase");
const easeItemTemplate = document.getElementById("easeItemTemplate");

function renderTextease(text) {
  
  textEase.replaceChildren();

  const chars = text.split(/.*?/u);

  var easeSection;
  for (let index = 0; index < chars.length; index++) {
    if (index % easeSectionLength == 0) {
      easeSection = document.createElement('div');
      easeSection.className = 'group aur-ease-section';
      textEase.append(easeSection);
    }

    const easeItem = easeItemTemplate.content.cloneNode(true);
    easeItem.querySelector('b').textContent = chars[index];
    easeSection.appendChild(easeItem);
  }

  const fontSize =  Math.min(Math.max(125 / text.length, 5), 30);
  textEase.style.fontSize = fontSize + 'vw';
}

function onTextInput(event) {
  renderTextease(event.target.value);
}

function onClassButtonClick(event) {
  console.log(event.target.dataset);
  textEase.dataset.font = event.target.dataset.font; 
}

/**
 * Init the application.
 */
function initApp() {
  textInput.addEventListener('input', onTextInput, false);
  
  // Add dummy data on init for easier testing
  textInput.value = '3N8BhFnw1Hf21PNjfr';
  textInput.dispatchEvent(new Event('input', {bubbles:true}));

  // Init the click events of settings
  toolbar.querySelectorAll('[data-font]').forEach(button => {
    button.addEventListener('click', onClassButtonClick, false);
  });
}

/**
 * Init the application on window load event.
 */
window.addEventListener("load", () => {
  initApp();
});