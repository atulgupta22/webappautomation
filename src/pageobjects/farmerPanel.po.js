 /**
 * Created By :- Atul Gupta
 * Date:- 22/08/2019
 */

var Utill = require('./../utility/utill.js');
     var utill = new Utill();
     var NAME = utill.autoGenerateName();
     var FATHER_NAME = utill.autoGenerateFatherName();
     var ADDRESS = utill.autoAddress();
     var NUMBER = utill.getNumber();
     var EMAIL = utill.getEmail();
     var Educate = utill.getEdu();
     var Gend = utill.getGen();


var FarmerPanel = function() {

var EC = protractor.ExpectedConditions;
var Spinner = element(by.id("app-spinner"));
var AddNewFarmer = element(by.cssContainingText('.color-green','Add New Farmer'));
var Header = element(by.css('.p-1.heading'));
var SubHeader_BasicDetails = element(by.cssContainingText('.card-header.text-10','Basic Details'));
var SubHeader_Geography = element(by.cssContainingText('.card-header.text-10','Geography'));
 
var FarmerName = $('[placeholder="Name"]');
var MobileNo = $('[placeholder="Mobile Number"]');
var Male = element(by.cssContainingText('.mat-radio-label-content','Male'));
var Female = element(by.cssContainingText('.mat-radio-label-content','Female'));
var CLA = $('[placeholder="CLA (In Acres)"]');

var State = element(by.id("State"));
var District = element(by.id("District"));
var Tehsil = element(by.id("Tehsil"));
var GramPanchayat = element(by.id("Gram Panchayat"));
var Village = element(by.id("Village"));

var click_region = function(chooseregion){
  element(by.cssContainingText('.mat-option-text',chooseregion)).click();
};

var BackCursor = element(by.css(".cursor"));
var SubmitButton = element(by.cssContainingText('.mat-button-wrapper','Submit'));
var ValidationFarmerPanel = element.all(by.css(".mat-error.ng-star-inserted"));
var FarmerCreatedSuccesfullyNotifier = element(by.css('.notifier__notification-message.ng-star-inserted'));
// Edit farmer Panel Elements
var SearchFarmer_EditFarmerPanel = element(by.cssContainingText('.cursor.header-color-text.color-green.pl_2','Search Farmer'));
var EditFarmer = element(by.cssContainingText('.color-green.pl_2','Edit Farmer'));
var CreateFarmerUnderSameHouseHold = element(by.cssContainingText('.color-green.pl-1','Create Farmer under same House Hold'));
var AddNewSR = element(by.cssContainingText('.color-green.pl_2','Add New SR'));

var FarmDetailsTab = element(by.cssContainingText('.mt-2.headingTab','Farm Details'));
var MachineDetailsTab = element(by.cssContainingText('.mt-2.headingTab','Machine Details'));
var KYCDetailsTab = element(by.cssContainingText('.mt-2.headingTab','KYC Details'));
 

	this.click_addnewfarmer = function(){
    	AddNewFarmer.click();
  	};
  this.addnewfarmer = function(){
    return AddNewFarmer;
  }

  this.click_submitbutton = function(){
      browser.wait(EC.elementToBeClickable(SubmitButton), 10000);
      SubmitButton.click();
    }

  this.back_cursor = function(){
     return BackCursor;
  }

  this.add_farmerdetails = function(){
  		FarmerName.sendKeys(NAME);
      browser.actions().sendKeys(protractor.Key.TAB).perform();
      browser.driver.sleep(2000);
  		browser.actions().sendKeys(protractor.Key.TAB).perform();
  		browser.actions().sendKeys(FATHER_NAME).perform();
  		MobileNo.sendKeys(NUMBER);  
  		Male.click();
      CLA.sendKeys("2");
      State.click();
      click_region("Madhya-Pradesh");
      District.click();
      click_region("Budni");
      Tehsil.click();
      click_region("Budni")
      browser.sleep(2000);
      GramPanchayat.click();
      click_region("Budni");
      browser.sleep(2000);
      Village.click();
      click_region(" Bhaisaya ");
      browser.sleep(4000);
  	}

  this.add_invalid_mobileno = function(){
      MobileNo.sendKeys("7668657");
  }

  this.header_validation_text = function(){
    return Header.getText();
  }  

  this.subheader_basicdetails = function(){
      return SubHeader_BasicDetails;
  };

  this.subheader_geography = function(){
      return SubHeader_Geography;
  };


  this.farmername_validation_text = function(){
    return ValidationFarmerPanel.get(0).getText();
    };

  this.farmerfathername_validation_text = function(){
    return ValidationFarmerPanel.get(1).getText();
    };

  this.farmermobile_validation_text = function(){ 
    return ValidationFarmerPanel.get(2).getText();
    };

  this.gender_validation_text = function(){
    return ValidationFarmerPanel.get(3).getText();
    };

  this.cla_validation_text = function(){
    return ValidationFarmerPanel.get(4).getText();
    }; 

  this.state_validation_text = function(){
    return ValidationFarmerPanel.get(5).getText();
    };

  this.district_validation_text = function(){
    return ValidationFarmerPanel.get(6).getText();
    };

  this.tehsil_validation_text = function(){
    return ValidationFarmerPanel.get(7).getText();
    };

  this.grampanchayat_validation_text = function(){
    return ValidationFarmerPanel.get(8).getText();
    };

  this.village_validation_text = function(){
    return ValidationFarmerPanel.get(9).getText();
    };

  this.notifier_text = function(){
    browser.wait(EC.presenceOf(FarmerCreatedSuccesfullyNotifier), 5000, 'Element taking too long to appear in the DOM');
    return FarmerCreatedSuccesfullyNotifier.getText();
    };

  this.searchfarmer_editfarmerpanel = function(){
      return SearchFarmer_EditFarmerPanel;
  };

  this.editfarmer = function(){
      return EditFarmer;
  };

  this.createfarmerundersamehousehold = function(){
      return CreateFarmerUnderSameHouseHold;
  };   

  this.addnewsr = function(){
      return AddNewSR;
  };  

  this.farmdetailstab = function(){
    return FarmDetailsTab;
  }

  this.machinedetailstab = function(){
    return MachineDetailsTab;
  }

  this.kycdetailstab = function(){
    return KYCDetailsTab;
  }



}
module.exports = FarmerPanel;