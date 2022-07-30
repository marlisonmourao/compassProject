function configEmoticons(mood) {
  let emoticon;
  let title;
  let color;
  switch (mood) {
    case 'happy':
      emoticon = require('../../assets/humores/happy.png');
      title = 'Bem';
      color = 'red';
      break;
    case 'nervous':
      emoticon = require('../../assets/humores/nervous.png');
      title = 'Mal';
      color = 'blue';
      break;
    case 'sad':
      emoticon = require('../../assets/humores/sad.png');
      title = 'Triste';
      color = 'green';
      break;
    case 'confused':
      emoticon = require('../../assets/humores/confused.png');
      title = 'Confuso';
      color = 'orange';
      break;
    case 'sleeping':
      emoticon = require('../../assets/humores/sleeping.png');
      title = 'Sono';
      color = 'purple';
      break;
    default:
      emoticon = require('../../assets/humores/happy.png');
      title = 'Bem';
      color = 'red';
  }
  return {emoticon, title, color};
}

export default configEmoticons;
