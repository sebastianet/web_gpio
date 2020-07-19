var rpio = require('rpio');


/* GET ajax response. */
module.exports = function(req, res) {
    
    
    console.log('(+++ajax.js+++) Inici.');

    if (req.body.hasOwnProperty('action')) {
        console.log('(+++ajax.js+++) Action('+req.body.action+').');
        switch( req.body.action ) {
            case 'write':

                console.log('(+++ajax.js+++) WRITE.');
            
                /*gpio.setup(req.body.gpio, gpio.DIR_OUT, function() {
                    gpio.write(req.body.gpio, req.body.status, function(err) {
                        
                        res.contentType('json');
                        res.send({ gpio: req.body.gpio, status: req.body.status, error: err });
                        if (err) throw err;
                        console.log('(+++ajax.js+++) Written to pin');
                    });
                });*/

                rpio.init({mapping: 'gpio'});
                rpio.open(req.body.gpio, rpio.OUTPUT, + req.body.status);
                rpio.write(req.body.gpio, + req.body.status);
                res.contentType('json');
                res.send({ gpio: req.body.gpio, status: req.body.status });
            
            break;
        }
      
    }
    // res.contentType('json');
    // res.send({ some: req.body.action });

};
