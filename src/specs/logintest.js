 /**
 * Created By :- Atul Gupta
 * Date:- 20/08/2019
 */
var LoginPage = require('./../pageobjects/loginPage.po.js');
var loginpage = new LoginPage();

describe('Samadhan V2 Login Functionality Test', function() {

	beforeEach(function() {
		loginpage.get();
	  });
  
  it('Entering Blank Login Credential', function() {
	loginpage.setusername("");
	loginpage.setpassword("");
	loginpage.clicklogin();
	expect(loginpage.username_validation()).toEqual('true');
	expect(loginpage.username_validation()).toEqual('true');
	expect(loginpage.username_validation_text()).toEqual('User Name is required');
	expect(loginpage.password_validation_text()).toEqual('Password is required');
  });

  it('Entering Invalid Valid Login Credential', function() {
	loginpage.setusername("admin@agri.com");
	loginpage.setpassword("agri@12");
	expect(loginpage.username_validation()).toEqual('false');
	expect(loginpage.username_validation()).toEqual('false');
	loginpage.clicklogin();
	expect(loginpage.notification_text()).toEqual('Please Enter Correct Login Details');
  });

   it('Entering Valid Login Credential', function() {
	loginpage.setusername("admin@agri.com");
	loginpage.setpassword("Agri@123");
	expect(loginpage.username_validation()).toEqual('false');
	expect(loginpage.username_validation()).toEqual('false');
	loginpage.clicklogin();
	expect((loginpage.dashboard()).isPresent()).toBeTruthy();
  });

});







