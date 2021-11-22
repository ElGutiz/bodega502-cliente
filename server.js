const express = require('express')
const app = express()
const port = 3001
const Odoo = require('odoo-xmlrpc')
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config()
app.use(cors({}));
app.use(bodyParser.json());
const odoo = new Odoo({
    url: process.env.REACT_APP_URL,
    db: process.env.REACT_APP_DB,
    username: process.env.REACT_APP_USERNAME,
    password: process.env.REACT_APP_PASSWORD,
    cors: 'True'
})

app.get('/', (req, res) => {
    
    odoo.connect(function (err) {

        if (err) { return err; }
        //console.log('Connected to Odoo server.');
        var inParams = [];
        inParams.push([['active', '=', false]]);
        inParams.push(['description'])
        var params = [];
        params.push(inParams);

        odoo.execute_kw('product.product', 'search_read', params, function (err, value) {
            if (err) { return (err); }
            
            res.send(value)
        });
    });
    //res.send('Hello World!')
})
app.get('/productos', (req, res) => {
    odoo.connect(function (err) {
        if (err) { return console.log(err); }
        //console.log('Connected to Odoo server.');
        var inParams = [];
        //inParams.push([['active', '=', false], ['display_name', '=', nombre], ['list_price', '=', precio], ['description': descripcion] ['qty_available', '=', cantidad], ]);
        inParams.push([])
        inParams.push(['display_name', 'list_price', 'description', 'qty_available','image_1920']);
        var params = [];
        params.push(inParams);
      
          odoo.execute_kw('product.product', 'search_read', params, function (err, value) {
            if (err) { return console.log(err); }
            res.send(value)
        });
      })
    //res.send('Hello World!')
})
app.post('/getProduct',(req,res)=>{
    let id = req.body.id;
    //console.log(req.body)
    odoo.connect(function (err) {
        if (err) { return console.log(err); }
        //console.log('getPr');
        var inParams = [];
        //inParams.push([['active', '=', false], ['display_name', '=', nombre], ['list_price', '=', precio], ['description': descripcion] ['qty_available', '=', cantidad], ]);
        inParams.push([['id', '=', id]])
        inParams.push(['display_name', 'list_price', 'description', 'qty_available']);
        var params = [];
        params.push(inParams);
      
          odoo.execute_kw('product.product', 'search_read', params, function (err, value) {
            if (err) { return console.log(err); }
            res.send(value)
            //res.send(id)
        });
      })
    //res.send({'id':'1'})
})


app.get('/img', (req, res) => {
    
    odoo.connect(function (err) {

        if (err) { return console.log(err); }
        //console.log('Connected to Odoo server.');
        var inParams = [];
        inParams.push([]);
        inParams.push(['description','display_name','image_512'])
        var params = [];
        params.push(inParams);

        odoo.execute_kw('product.product', 'search_read', params, function (err, value) {
            if (err) { return console.log(err); }
            //console.log('Result: ', value);
            res.send(value)
        });
    });
    //res.send('Hello World!')
})

app.post('/act',(req,res)=>{
    let id = req.body.id;
    let qty_available = req.body.qty_available
    let name = req.body.display_name
    let price = req.body.list_price
    let description = req.body.description
    
    odoo.connect(function (err) {
        if (err) { return console.log(err); }
        var inParams = [];
        inParams.push([id])
        inParams.push({'name': name, 'list_price': price, 'qty_available': qty_available, 'description': description});
        var params = [];
        params.push(inParams);      
        odoo.execute_kw('product.product', 'write', params, function (err, value) {
            if (err) { return console.log(err); }
            res.send(value)
        });
    })
})

app.post('/delete',(req,res)=>{
    let id = req.body.id;
    console.log(req.body)
    console.log(id)
    odoo.connect(function (err) {
        if (err) { return console.log(err); }
        var inParams = [];
        inParams.push([id])
        var params = [];
        params.push(inParams);
        odoo.execute_kw('product.product', 'unlink', params, function (err, value) {
            if (err) { return console.log(err); }
            res.send(value)
        });
    })
})

/**
app.post('/pedido',(req,res)=>{
    let id = req.body.id;
    let price = req.body.list_price
    
    odoo.connect(function (err) {
        if (err) { return console.log(err); }
        var inParams = [];
        inParams.push([{
            'pricelist_id': 1,
            'partner_id': 8,
            'session_id': 1,
            'amount_tax': 2 * price,
            'amount_total': 2 * price + 100,
            'amount_paid': 2 * price + 100,
            'amount_return': 0
                }])
        var params = []
        params.push(inParams);
        odoo.execute_kw('pos.order', 'create', params, function (err, value) {
            if (err) { return console.log(err); }
            
            let order_id = value[0]
            var inParams = [];
            inParams.push([{
                'product_id': id,
                'order_id': order_id,
                'price_subtotal': 2 * price,
                'price_subtotal_incl': 2 * price + 100,
                    }])
            var params = []
            params.push(inParams);
            odoo.execute_kw('pos.order.line', 'create', params, function (err, value) {
                if (err) { return console.log(err); }
            });
        });
    })
})
*/

app.post('/pedido',(req,res)=>{
    let product_id = req.body.id;
    let price = req.body.list_price
    let display_name = req.body.display_name
    let user_name = req.body.user_name
    let user_mobile = req.body.user_mobile
    let user_email = req.body.user_email
    let user_adress = req.body.user_adress
    
    let user_vals = {
        'email': user_email,
        'email_formatted': user_email,
        'email_normalized': user_email,
        'contact_address': user_adress,
        'street': user_adress,
        'name': user_name,
        'display_name': user_name,
        'mobile': user_mobile,
        'phone': user_mobile,
        'customer_rank': 1
    }
    
    odoo.connect(function (err) {
        if (err) { return console.log(err); }
        var inParams = [];
        inParams.push([['email', '=', user_email]])
        var params = [];
        params.push(inParams);
        odoo.execute_kw('res.partner', 'search', params, function (err, value_user) {
            if (err) { return console.log(err); }
            
            if (value_user.length === 0){
                var inParams = [];
                inParams.push(user_vals)
                var params = [];
                params.push(inParams);
                odoo.execute_kw('res.partner', 'create', params, function (err, value) {
                    if (err) { return console.log(err); }

                    var inParams = [];
                    inParams.push([['email', '=', user_email]])
                    var params = [];
                    params.push(inParams);
                    odoo.execute_kw('res.partner', 'search', params, function (err, value_0) {
                        if (err) { return console.log(err); }
                        
                        let id_user = value_0[0]
                        inParams = [];
                        inParams.push({
                            'pricelist_id': 1,
                            'session_id': 1,
                            'amount_tax': 2 * price,
                            'amount_total': 2 * price + 100,
                            'amount_paid': 2 * price + 100,
                            'amount_return': 0,
                            'partner_id': id_user
                        })
                        params = [];
                        params.push(inParams);
                        odoo.execute_kw('pos.order', 'create', params, function (err, value_1) {
                            if (err) { return console.log(err); }
                            
                            let order_id = value_1
                            var inParams = [];
                            inParams.push([{
                                'product_id': product_id,
                                'order_id': order_id,
                                'price_subtotal': 2 * price,
                                'price_subtotal_incl': 2 * price + 100,
                                'display_name': display_name,
                                'full_product_name': display_name 
                                    }])
                            var params = []
                            params.push(inParams);
                            odoo.execute_kw('pos.order.line', 'create', params, function (err, value_5) {
                                if (err) { return console.log(err); }
                            });
                        });
                    });
                });
            }else{
                let id_user = value_user[0]
                inParams = [];
                inParams.push({
                    'pricelist_id': 1,
                    'session_id': 1,
                    'amount_tax': 2 * price,
                    'amount_total': 2 * price + 100,
                    'amount_paid': 2 * price + 100,
                    'amount_return': 0,
                    'partner_id': id_user
                })
                params = [];
                params.push(inParams);
                odoo.execute_kw('pos.order', 'create', params, function (err, value_2) {
                    if (err) { return console.log(err); }
                    
                    let order_id = value_2
                    var inParams = [];
                    inParams.push([{
                        'product_id': product_id,
                        'order_id': order_id,
                        'price_subtotal': 2 * price,
                        'price_subtotal_incl': 2 * price + 100,
                        'display_name': display_name,
                        'full_product_name': display_name 
                            }])
                    var params = []
                    params.push(inParams);
                    odoo.execute_kw('pos.order.line', 'create', params, function (err, value_5) {
                        if (err) { return console.log(err); }
                    });
                });
            }
        });
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})