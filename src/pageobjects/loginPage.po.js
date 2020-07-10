 /**
 * Created By :- Atul Gupta
 * Date:- 20/08/2019
 */
var LoginPage = function() {

  var Username = $('[placeholder="User Name"]');
  var Password = element(by.css('[placeholder="Password"]'));
  var Login = element(by.buttonText('Login'));
  var Notification = element(by.css('.notifier__notification-message.ng-star-inserted'));
  var Logout = element(by.css('.fa.fa-sign-out'));
  var Validation = element.all(by.css('.mat-error.ng-star-inserted'));
  var EC = protractor.ExpectedConditions;
  var Spinner = element(by.id("app-spinner"));
  var Dashboard = element(by.cssContainingText('.menu-title','Dashboard'));

	this.get = function() {
    	browser.get(browser.params.baseUrl);
      browser.wait(EC.invisibilityOf(Spinner), 50000 );
  	};
	this.setusername = function (name) {
    	Username.sendKeys(name);
  	};
	this.setpassword = function (name) {
    	Password.sendKeys(name);
  	};
	this.clicklogin = function(){
      browser.wait(EC.elementToBeClickable(Login), 5000);
    	Login.click();
      browser.driver.sleep(2000);
  	};
	this.notification_text = function(){
		return Notification.getText();
  	};
  this.logout = function(){
  		return Logout;
  	};
  this.username_validation = function(){
  		return Username.getAttribute('aria-invalid');
  	};
  this.password_validation = function(){
  		return Password.getAttribute('aria-invalid');
  	};
  this.username_validation_text = function(){
		return Validation.get(0).getText();
  	};
  this.password_validation_text = function(){
		return Validation.get(1).getText();
  	};
  this.dashboard = function(){
    return Dashboard;
  }




};
module.exports = LoginPage;