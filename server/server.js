const express = require('express');
const app = express();
const jwt = require('express-jwt');
const cors = require('cors');

app.use(cors());

// Authentication middleware provided by express-jwt.
// This middleware will check incoming requests for a valid
// JWT on any routes that it is applied to.
const authCheck = jwt({
  secret: new Buffer('LWeppRrKGO5GaBcxXpAt6tL8zuJYFthQyeX7ExR31CzyqF905SXRF2Wa_nqmQSMV', 'base64'),
  audience: 'y99ir82bmXwslwCrdTyfKtfzdobOwkgb'
});

var contacts = [
  {
    id: 1,
    name: 'Alan',
    email: 'alan@brainsights.ca',
    image: 'http://brainsights.ca/wp-content/uploads/h_allan-200x200.jpg'
  },
  {
    id: 2,
    name: 'Kevin',
    email: 'Kevin@brainsights.ca',
    image: 'http://brainsights.ca/wp-content/uploads/1987d22-200x200.jpg'
  },
  {
    id: 3,
    name: 'Steven',
    email: 'steve@brainsights.ca',
    image: 'http://brainsights.ca/wp-content/uploads/h_steve-200x200.jpg'
  },
  {
    id: 4,
    name: 'Dan',
    email: 'dan@brainsights.ca',
    image: '//gravatar.com/avatar/5e074956ee8ba1fea26e30d28c190495?s=200'
  },
  {
    id: 5,
    name: 'Thom',
    email: 'thom@brainsights.ca',
    image: ''
  }
];

app.get('/api/contacts', (req, res) => {
  const allContacts = contacts.map(contact => {
    return { id: contact.id, name: contact.name}
  });
  res.json(allContacts);
});

app.get('/api/contacts/:id', authCheck, (req, res) => {
  res.json(contacts.filter(contact => contact.id === parseInt(req.params.id))[0]);
});

app.listen(3001);
console.log('Listening on http://localhost:3001');
