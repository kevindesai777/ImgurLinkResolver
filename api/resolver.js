
// The API that returns the in-email representation.
module.exports = function(req, res) {
  var url = req.query.url.trim();

  //Imgur image urls are in the format:
  //http://imgur.com/gallery/<alphanumeric id>
  var matches = url.match(/([a-zA-Z0-9]+)$/);
  if (!matches) {
    res.status(400).send('Invalid URL format');
    return;
  }

  var id = matches[1];
  console.log(id)
  var image = 'https://i.imgur.com/' + id + '.jpg';

  var html = '<img src="' + image + '" width="250px" height="auto"/>';
  res.json({
    body: html
  });
};
