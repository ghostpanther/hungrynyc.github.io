console.log('LOADED: PROFILE JS');

$(function(){

  $('.toggle').click(showHideList);
  $('.toggle').click();

  function showHideList(){
    var toggleButton = $(this);
    var showMeDaGoodies = toggleButton.data('showMeDaGoodies') || false;
    var thisBtnsList = toggleButton.prev('ul.truncateList');

    showItems(thisBtnsList, showMeDaGoodies, thisBtnsList.data('listItems'));

    showMeDaGoodies ^= true;
    toggleButton.data('showMeDaGoodies', showMeDaGoodies);

    if (showMeDaGoodies){
      toggleButton.text('See all');
    } else {
      toggleButton.text('Truncate');
    }

  }

  function showItems(parentNode, showAll, numVisible){
    if (showAll){
      parentNode.find('> li').show();
    } else {
      parentNode.find('> li:lt(' + numVisible + ')').show();
      parentNode.find('> li:gt(' + (numVisible - 1) + ')').hide();
    }
  }

});