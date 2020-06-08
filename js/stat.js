'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 30;
var FONT_GAP = 16;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var BAR_GAP = 50;
var BAR_X = CLOUD_X + GAP;
var BAR_Y = CLOUD_HEIGHT - BAR_HEIGHT - FONT_GAP;
var TEXT_COLOR = '#000';

var getRandomColor = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return ('hsl(240, ' + (Math.floor(Math.random() * (max - min)) + min) + '%,' + ' 50%)');
};


var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};


var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  var pickColor = function () {
    if (players[i] !== 'Вы') {
      return getRandomColor(5, 50);
    }
    return 'rgba(255, 0, 0, 1)';
  };
  renderCloud(ctx, 110, 20, 'rgba(0,0,0,0.7)');
  renderCloud(ctx, 100, 10, '#fff');

  ctx.fillStyle = TEXT_COLOR;
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', BAR_X, CLOUD_Y + FONT_GAP + GAP);
  ctx.fillText('список результатов', BAR_X, CLOUD_Y + GAP + FONT_GAP * 2);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {

    var yPosition = (BAR_HEIGHT - ((BAR_HEIGHT * times[i]) / maxTime)) + BAR_Y;
    var timeRounded = Math.round(times[i]);
    ctx.fillStyle = TEXT_COLOR;
    ctx.fillText(players[i], BAR_X + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT);
    ctx.fillText(timeRounded, BAR_X + (BAR_WIDTH + BAR_GAP) * i, yPosition - 10);

    ctx.fillStyle = pickColor();
    ctx.fillRect(BAR_X + (BAR_WIDTH + BAR_GAP) * i, yPosition, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
  }
};