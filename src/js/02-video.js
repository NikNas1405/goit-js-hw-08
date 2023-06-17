import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const CURRENT_TIME_KEY = 'videoplayer-current-time';

const onPlay = function (data) {
  localStorage.setItem(CURRENT_TIME_KEY, data.seconds);
  // data is an object containing properties specific to that event
};

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(Number(localStorage.getItem(CURRENT_TIME_KEY)));
