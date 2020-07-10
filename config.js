
var JasminHtmlReporter = require('protractor-jasmine2-html-reporter');
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

exports.config = {
   // your config here ..
   //The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',
  //directConnect: true,

  //Here we specify the name of the specs files.
  //specs: ['./src/./specs/**/*.js'],
  specs: ['./src/specs/logintest.js'],
  //specs: ['/home/atul/webappautomation/src/specs/logintest.js'],
  //specs: ['./specs/**/farmertest.js'],
  //specs: ['./src/specs/logintest.js','./src/specs/farmertest.js'],
   allScriptsTimeout: 120000,
   getPageTimeout: 120000,
   jasmineNodeOpts: {
   defaultTimeoutInterval: 2500000,
                    },


    params: {  
          //  change url for diffrent environment
          baseUrl:  "http://uatsamadhanv2.em3agri.com/login",
            },  
    
  // capabilities: {
  //   browserName: 'chrome',
  //   chromeOptions: {
  //           //args: ["--headless", "--disable-gpu", "--window-size=1280x1024"],
  //           w3c: false  //enabling the below capability enables chrome to use legacy API. (sendKeysToActiveElement)
  //       },
    
    
      
    //browserName: 'firefox',
  
    // allows different specs to run in parallel.
    // If this is set to be true, specs will be sharded by file
    // (i.e. all files to be run by this set of capabilities will run in parallel).
    // Default is false.
    shardTestFiles: true,
     
    // Maximum number of browser instances that can run in parallel for this
    // set of capabilities. This is only needed if shardTestFiles is true.
    // Default is 1.
    maxInstances: 2,
    //},


//Capabilities to be passed to the webdriver instance.
multiCapabilities: [{
  'browserName': 'firefox'
}, {
  'browserName': 'chrome'
}],

framework: 'jasmine2',

onPrepare: function() {
  browser.manage().window().maximize();
     // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
     
      browser.getProcessedConfig().then(function(config){

      var capabilities = config.capabilities;
      jasmine.getEnv().addReporter(new JasminHtmlReporter({
      takeScreenshots: 'true',
      takeScreenshotsOnlyOnFailures: 'true',
      savePath: './reports',
      screenshotsFolder: 'screenshot',
      fileName: 'WebAppAutomationTestReport_Chrome'+time+capabilities.browserName,
      showSummary: 'true',
      showQuickLinks: 'true',
      showConfiguration: 'true'
    

    }));
    })
    }
}



