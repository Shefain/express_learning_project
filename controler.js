const fs = require('fs');

exports.htmlHandaler = (req, res) => {
  
  fs.readFile('./pages/index.html', (error, data) => {
    if (error) {
      console.log(' error happned in /html handaler');
    }
    res.write(data);
    res.send();
  });
};

exports.contactHndaler = (req, res) => {
  fs.readFile('./pages/contact.html', (error, data) => {
    if (error) {
      console.log(' error happened in /contact handaler');
    }
    res.write(data);
    res.send();
  });
};

exports.aboutHandaler = (req, res) => {
  fs.readFile('./pages/about.html', (error, data) => {
    if (error) {
      console.log(' error happned in /about handaler');
    }
    res.write(data);
    res.send();
  });
};
exports.indexHndaler = (req, res) => {
  fs.readFile('./pages/index.html', (error, data) => {
    if (error) {
      console.log(' error happned in /about handaler');
    }
    res.write(data);
    res.send();
  });
};
