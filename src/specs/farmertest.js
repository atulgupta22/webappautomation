 /**
 * Created By :- Atul Gupta
 * Date:- 07/10/2019
 */
var LoginPage = require('./../pageobjects/loginPage.po.js');
var SidePanel = require('./../pageobjects/sidePanel.po.js');
var FarmerPanel = require('./../pageobjects/farmerPanel.po.js');
var loginpage = new LoginPage();
var sidepanel = new SidePanel();
var farmerpanel = new FarmerPanel();

describe('Farmer Panel Functionality Test', function() {

	it('Check Validation in Create farmer Panel', function(){
	    loginpage.get();
    	loginpage.setusername("admin@agri.com");
		loginpage.setpassword("agri@123");
		loginpage.clicklogin();
		
        sidepanel.click_farmer();
		sidepanel.click_searchfarmer();
		farmerpanel.click_addnewfarmer();
		expect(farmerpanel.header_validation_text()).toEqual('Farmer');
		expect((farmerpanel.subheader_basicdetails()).isPresent()).toBeTruthy();
		expect((farmerpanel.subheader_geography()).isPresent()).toBeTruthy();
		// Check Validation When all the fields are Null
		farmerpanel.click_submitbutton();
		expect(farmerpanel.farmername_validation_text()).toEqual('Name is required');
		expect(farmerpanel.farmerfathername_validation_text()).toEqual('Father Name is required');
		expect(farmerpanel.farmermobile_validation_text()).toEqual('Mobile Number is required');
		expect(farmerpanel.gender_validation_text()).toEqual('    Gender is required');
		expect(farmerpanel.state_validation_text()).toEqual('State is required');
		expect(farmerpanel.district_validation_text()).toEqual('District is required');
		expect(farmerpanel.tehsil_validation_text()).toEqual('Tehsil is required');
		expect(farmerpanel.grampanchayat_validation_text()).toEqual('Gram Panchayat is required');
		expect(farmerpanel.village_validation_text()).toEqual('Village is required');
		//Check Mobile no. field validation : Invalid Mobile Number
		farmerpanel.add_invalid_mobileno();
		farmerpanel.click_submitbutton();
		expect(farmerpanel.farmermobile_validation_text()).toEqual('Mobile Number is not Valid');
		browser.sleep(4000);
	});
  
	it('Create Farmer and Edit Farmer Functionality', function() {
		
		sidepanel.click_searchfarmer();
		farmerpanel.click_addnewfarmer();
		farmerpanel.add_farmerdetails();
		farmerpanel.click_submitbutton();

	    //browser.sleep(8000);
		expect(farmerpanel.notifier_text()).toEqual("Farmer Successfully Created");
		expect((farmerpanel.back_cursor()).isPresent()).toBeTruthy();
		expect(farmerpanel.header_validation_text()).toEqual('Farmer Details');
		expect((farmerpanel.addnewfarmer()).isPresent()).toBeTruthy();

		expect((farmerpanel.searchfarmer_editfarmerpanel()).isPresent()).toBeTruthy();

		expect((farmerpanel.editfarmer()).isPresent()).toBeTruthy();
        expect((farmerpanel.createfarmerundersamehousehold()).isPresent()).toBeTruthy();
        expect((farmerpanel.addnewsr()).isPresent()).toBeTruthy();

		expect((farmerpanel.farmdetailstab()).isPresent()).toBeTruthy();
		expect((farmerpanel.machinedetailstab()).isPresent()).toBeTruthy();
        expect((farmerpanel.kycdetailstab()).isPresent()).toBeTruthy();
  	});

});