﻿$(document).ready(function () {
  setAllImagesBlank();
  $('img').click(onImgClick);
  $('#randomizeButton').click(randomize);
  $('#reset').click(reset);
});

var imageIdNumberToImageFileNameArray = [1, 2, 3, 4, 5, 6];

var resolveImageFileName = function (imageIdNumber) {
  var imageIndex = parseInt(imageIdNumber) - 1;
  return imageIdNumberToImageFileNameArray[imageIndex];
}

var setAllImagesBlank = function () {
  $('#diceImg1').attr('src', 'images/blank.jpg');
  $('#diceImg2').attr('src', 'images/blank.jpg');
  $('#diceImg3').attr('src', 'images/blank.jpg');
  $('#diceImg4').attr('src', 'images/blank.jpg');
  $('#diceImg5').attr('src', 'images/blank.jpg');
  $('#diceImg6').attr('src', 'images/blank.jpg');
};


var onImgClick = function (e) {
  $target = $(e.currentTarget);
  var id = $target.attr('id');
  var imageIdNumber = id.substring(id.length - 1);
  var imageFileName = resolveImageFileName(imageIdNumber);

  //console.log('imageIdNumber = ', imageIdNumber);
  //console.log('imageFileName = ', imageFileName);

  $target.attr('src', 'images/' + imageFileName + '.jpg');
};

var randomize = function () {
  var index1, index2, temp, i;

  for (i = 0; i < 100; i++) {
    index1 = Math.floor(Math.random() * 6);
    index2 = Math.floor(Math.random() * 6);

    if (index1 !== index2) {
      temp = imageIdNumberToImageFileNameArray[index1];
      imageIdNumberToImageFileNameArray[index1] = imageIdNumberToImageFileNameArray[index2];
      imageIdNumberToImageFileNameArray[index2] = temp;
    }
  }

  //console.log('index1', index1);
  //console.log('index2', index2);
  //console.log('imageIdNumberToImageFileNameArray', imageIdNumberToImageFileNameArray);

  setAllImagesBlank();
}

var reset = function(){
  for(i=0; i < 6; i++){
    var imgId = i + 1;
    $('#diceImg'+imgId).attr('src', 'images/' +imgId + '.jpg');
  }
  /*$('#diceImg1').attr('src', 'images/1.jpg');
  $('#diceImg2').attr('src', 'images/2.jpg');
  $('#diceImg3').attr('src', 'images/3.jpg');
  $('#diceImg4').attr('src', 'images/4.jpg');
  $('#diceImg5').attr('src', 'images/5.jpg');
  $('#diceImg6').attr('src', 'images/6.jpg');*/
}
