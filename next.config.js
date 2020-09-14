const withTM = require('next-transpile-modules')(['gsap', 'gsap/ScrollTrigger']); // pass the modules you would like to see transpiled
 
module.exports = withTM();