/*global $*/
import {put} from 'axios';
import tuitsTemplate from '../views/partials/tuits.hbs';

$('#newTweet button[name=submit]').click(e => {
  e.preventDefault();
  const query = {
    user: $('#newTweet [name=user]').val(),
    body: $('#newTweet [name=body]').val()
  };

  put('/tuits', query)
    .then(res => {
      var newHtml = tuitsTemplate({tuits: res.data});
      $('#tuits').html(newHtml);
    });
});
