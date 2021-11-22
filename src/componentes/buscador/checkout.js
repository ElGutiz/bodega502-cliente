import React, { useState } from 'react';
function C(){
    const [input,setInput] = useState('');
    const [text, setText] = useState('');
    const  Odoo = require('odoo-xmlrpc')

    const odoo = new Odoo({
    url: 'https://proyecto10.odoo.com',
    //port: 80, /* Defaults to 80 if not specified */
    db: 'proyecto10',
    username : 'cot19324@uvg.edu.gt', /* Optional Like Change Language */
    password: '150e58032507b0486e68395fd9ba6113eb623ad4'
    })
    console.log('funciona esto????')

    odoo.connect(function (err) {
        if (err) { return console.log(err); }
        console.log('Connected to Odoo server.');    
    });
    function Cambio(){
        
       

    }

    return (
        <div className="check">
        <h1>Adding Two Numbers</h1>
  
        <div className="input">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}

          />
        
        </div>
            <button onClick={Cambio}>Buscar</button>
            <h2>{text}</h2>
      </div>
    );


}

export default C