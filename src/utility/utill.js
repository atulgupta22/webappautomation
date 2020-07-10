 /**
 * Created By :- Atul Gupta
 * Date:- 20/08/2019
 */
var Utill = function() {

    // generating first name randomly
  this.autoGenerateName = function() {
          var autoGenerateName = "fn";
          var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
          for (var i = 0; i < 4; i++)
              autoGenerateName += possible.charAt(Math.floor(Math.random() * possible.length));
          return autoGenerateName;
      };
   
  // generating last name randomly
  this.autoGenerateFatherName = function() {
          var autoGenerateFatherName = "fatn";
          var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
          for (var i = 0; i < 4; i++)
              autoGenerateFatherName += possible.charAt(Math.floor(Math.random() * possible.length));
          return  autoGenerateFatherName;
      };
      
  //generating random phone number
  this.getNumber = function() {
          var getNumber = "99";
          var possible = "0123456789";
          for (var i = 0; i < 8; i++)
              getNumber += possible.charAt(Math.floor(Math.random() * possible.length));
          return  getNumber;
      };

  //generating random email id 
  this.getEmail = function() {
          var getEmail = "";
          var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
          for (var i = 0; i < 3; i++)
              getEmail += possible.charAt(Math.floor(Math.random() * possible.length));
          return  getEmail+ "@mymail.test";
      };

  // generating address randomly
  this.autoAddress = function() {
          var autoAddress = "";
          var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
          for (var i = 0; i < 9; i++)
              autoAddress += possible.charAt(Math.floor(Math.random() * possible.length));
          return  autoAddress;
      };

  //generating random education 
  this.getEdu = function() {
          var getEdu = "";
          var possible = "123456";
          for (var i = 0; i < 1; i++)
              getEdu += possible.charAt(Math.floor(Math.random() * possible.length));
          return  getEdu;
      };

  //generating random gender 
  this.getGen = function() {
          var getGen = "";
          var possible = "mf";
          for (var i = 0; i < 1; i++)
              getGen += possible.charAt(Math.floor(Math.random() * possible.length));
          return  getGen;
      };
  // generate random center
  this.autoGenerateCenterName = function() {
          var autoGenerateCenterName = "fn";
          var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
          for (var i = 0; i < 3; i++)
              autoGenerateCenterName += possible.charAt(Math.floor(Math.random() * possible.length));
          return  autoGenerateCenterName;
  };

// generating machine name randomly
  this.autoGenerateMachineName = function() {
          var autoGenerateMachineName = "";
          var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123";
          for (var i = 0; i < 8; i++)
              autoGenerateMachineName += possible.charAt(Math.floor(Math.random() * possible.length));
          return  autoGenerateMachineName;
      };

  this.autoGenerateMoMachineName = function() {
          var autoGenerateMachineName = "";
          var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123";
          for (var i = 0; i < 8; i++)
              autoGenerateMachineName += possible.charAt(Math.floor(Math.random() * possible.length));
          return  autoGenerateMoMachineName;
      };

  //generating random rate
  this.getRate = function() {
          var getRate = "1";
          var possible = "0";
          for (var i = 0; i < 2; i++)
              getRate += possible.charAt(Math.floor(Math.random() * possible.length));
          return  getRate;
  };

     // generating franchise name randomly
  this.autoGenerateFranchiseName = function() {
          var autoGenerateFranchiseName = "fn";
          var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
          for (var i = 0; i < 4; i++)
              autoGenerateFranchiseName += possible.charAt(Math.floor(Math.random() * possible.length));
          return  autoGenerateFranchiseName;
  };


};
module.exports = Utill;