const Odoo = require('odoo-xmlrpc')
require('dotenv').config()

const odoo = new Odoo({
    url: process.env.REACT_APP_URL,
    db: process.env.REACT_APP_DB,
    username: process.env.REACT_APP_USERNAME,
    password: process.env.REACT_APP_PASSWORD,
    cors: 'True'
})

odoo.connect(function (err) {
  
  if (err) { return console.log(err); }
  console.log('Connected to Odoo server.');
  var inParams = [];
  inParams.push([['active', '=', false]]);
  inParams.push(['description'])
  var params = [];
  params.push(inParams);

    odoo.execute_kw('product.product', 'search_read', params, function (err, value) {
      if (err) { return console.log(err); }
      console.log('Result: ', value);
  });
});

/*
//CONSULTA PARA MODULO PRODUCTO
odoo.connect(function (err) {
  if (err) { return console.log(err); }
  console.log('Connected to Odoo server.');
  var inParams = [];
  inParams.push([['active', '=', false], ['display_name', '=', nombre], ['list_price', '=', precio], ['description': descripcion] ['qty_available', '=', cantidad], ]);
  inParams.push(['display_name', 'list_price', 'description', 'qty_available']);
  var params = [];
  params.push(inParams);

    odoo.execute_kw('product.product', 'search_read', params, function (err, value) {
      if (err) { return console.log(err); }
      console.log('Result: ', value);
  });
})
*/
