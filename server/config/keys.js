
if(process.env.NODE_ENV == 'production')
{
    // Production ENV
    module.exports = require('./prod');
}
else{
    // Local ENV
    module.exports = require('./dev');
}
