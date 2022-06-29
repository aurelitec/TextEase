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
      easeSection.className = 'group txte-ease-section';
      textEase.append(easeSection);
    }

    const easeItem = easeItemTemplate.content.cloneNode(true);
    easeItem.querySelector('b').textContent = chars[index];
    easeSection.appendChild(easeItem);
  }

  // const fontSize = Math.min(100 / text.length, 30);
  const fontSize =  Math.min(Math.max(100 / text.length, 5), 30);
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

  toolbar.querySelectorAll('[data-font]').forEach(button => {
    button.addEventListener('click', onClassButtonClick, false);
  });

  toolbar.querySelectorAll('[data-font-size]').forEach(button => {
    button.addEventListener(
      'click', 
      (event) => textEase.dataset.fontSize = event.target.dataset.fontSize,
      false);
  });
}

/**
 * Init the application on window load event.
 */
window.addEventListener("load", () => {
  initApp();
});