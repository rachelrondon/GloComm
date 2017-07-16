document.addEventListender('DOMContentLoaded', () => {
  console.log('Main.js is linked!');
  console.log(moment().format('HH:mm'));

  const timeNode = document.querySelector('.time');
  const messageNode = document.querySelector('.message');
  const refreshNode = document.querySelector('.refresh');
  const backgroundNode = document.querySelector('.background');

  const updateTime = () => {
    timeNode.innerHTML = moment().format('HH:mm');
    setTimeout(updateTime,10000);
  }

  updateTime();

});
