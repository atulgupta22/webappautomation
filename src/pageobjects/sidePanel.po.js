 /**
 * Created By :- Atul Gupta
 * Date:- 22/08/2019
 */
var SidePanel = function() {

var Master = element(by.cssContainingText('.menu-title','Master'));
var Machine =element(by.cssContainingText('.menu-title','Machine'));
var Farmer =element(by.cssContainingText('.menu-title','Farmer'));
//element under Master DropDown
var Organization =element(by.cssContainingText('.menu-title','Organisation'));
var Partner =element(by.cssContainingText('.menu-title','Partner(s)'));
var Service =element(by.cssContainingText('.menu-title','Service(s)'));
var Soil =element(by.cssContainingText('.menu-title','Soil'));
var Crop =element(by.cssContainingText('.menu-title','Crop'));
var Geography =element(by.cssContainingText('.menu-title','Geography'));
//elements under Machine DropDown
var Add =element(by.cssContainingText('.menu-title','Add'));
var MachineMaster =element(by.cssContainingText('.menu-title','Master(s)'));
var ServiceLink =element(by.cssContainingText('.menu-title','Service Link'));
var MachineSearch =element(by.cssContainingText('.menu-title','Machine Search'));
//element under Farmer DropDown
var SearchFarmer =element(by.cssContainingText('.menu-title','Search Farmer'));
var SearchHousehold =element(by.cssContainingText('.menu-title','Search Household'));
var Organization =element(by.cssContainingText('.menu-title','Organisation'));

	this.click_master = function(){
    	Master.click();
  	};
  	this.click_machine = function(){
    	Machine.click();
  	};
  	this.click_farmer = function(){
    	Farmer.click();
  	};
  	this.click_organization = function(){
    	Organization.click();
  	};
  	this.click_partner = function(){
    	Partner.click();
  	};
  	this.click_Service = function(){
    	Service.click();
  	};
  	this.click_soil = function(){
    	Soil.click();
  	};
  	this.click_crop = function(){
    	Crop.click();
  	};
  	this.click_geography = function(){
    	Geography.click();
  	};
  	this.click_Add = function(){
    	Add.click();
  	};
  	this.click_machinemaster = function(){
    	MachineMaster.click();
  	};
  	this.click_servicelink = function(){
    	ServiceLink.click();
  	};
  	this.click_machinesearch = function(){
    	MachineSearch.click();
  	};
  	this.click_searchfarmer = function(){
    	SearchFarmer.click();
  	};
  	this.click_searchhousehold = function(){
    	SearchHousehold.click();
  	};
  	this.click_rganization = function(){
    	Organization.click();
  	};
  	


}
module.exports = SidePanel;