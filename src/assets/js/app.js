// Copyright 2022 Aurelitec. All rights reserved.
// Use of this source code is governed by an MIT-style license that can be
// found in the LICENSE file.

const easeSectionLength = 4;

const textInput = document.getElementById("textInput");
const toolbar = document.getElementById("toolbar");
const textEase = document.getElementById("textEase");
const easeItemTemplate = document.getElementById("easeItemTemplate");

const fontFamilyButtons = document.getElementById("fontFamilyButtons");
const fontWeightButtons = document.getElementById("fontWeightButtons");

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
    easeItem.querySelector('span').textContent = chars[index];
    easeSection.appendChild(easeItem);
  }

  const fontSize =  Math.min(Math.max(125 / text.length, 5), 30);
  textEase.style.fontSize = fontSize + 'vw';
}

function onTextInput(event) {
  renderTextease(event.target.value);
}

function onFontFamilyButtonClick(event) {
  [...fontFamilyButtons.children].forEach(child => child.dataset.selected = false);
  const selectedButton = event.target;
  textEase.dataset.fontFamily = selectedButton.dataset.fontFamily;
  selectedButton.dataset.selected = true;
}

function onFontWeightButtonClick(event) {
  [...fontWeightButtons.children].forEach(child => child.dataset.selected = false);
  const selectedButton = event.target;
  textEase.dataset.fontWeight = selectedButton.dataset.fontWeight;
  selectedButton.dataset.selected = true;
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
  [...fontFamilyButtons.children].forEach(button => {
    button.addEventListener('click', onFontFamilyButtonClick, false);
  });
  [...fontWeightButtons.children].forEach(button => {
    button.addEventListener('click', onFontWeightButtonClick, false);
  });
}

/**
 * Init the application on window load event.
 */
window.addEventListener("load", () => {
  initApp();
});