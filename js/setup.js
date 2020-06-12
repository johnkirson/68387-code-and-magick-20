'use strict';

var WIZARD_NAMES = ['Иван','Хуан Себастьян','Мария','Кристоф','Виктор','Юлия','Люпита','Вашингтон'];
var WIZARD_FAMILY = ['да Марья','Верон','Мирабелла','Вальц','Онопко','Топольницкая','Нионго','Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYE_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var randomArrayData = function(array) {
  var i = Math.floor(Math.random() * array.length);
  var randomObject = array[i];
  return randomObject;
};

var nameGenerator = function (names, families) {
  var name = randomArrayData(names);
  var family = randomArrayData(families);
  var nameRandom = name + ' ' + family;
  return nameRandom;
};

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');


var wizards = [];

var createWizardsArray = function() {
  for (var i = 0; i < 4; i++) {
    var randomCoat = randomArrayData(COAT_COLOR);
    var randomEyes = randomArrayData(EYE_COLOR);
    var generatedName = nameGenerator(WIZARD_NAMES,WIZARD_FAMILY);
    var wizadObject = {
      name: generatedName,
      coatColor: randomCoat,
      eyesColor: randomEyes
    };

    wizards[i] = wizadObject;
  }
};

createWizardsArray();

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.coatColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);
