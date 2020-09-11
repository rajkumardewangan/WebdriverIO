import LoginPage from './pageobjects/login.page';
import loginPage from './pageobjects/login.page';


describe('My Login application', () => {
    it('Navigate to the Application', () => {
        LoginPage.open();
    });

    it('should login with valid credentials', () => {
        LoginPage.login();
    });
    
    it('validate dashboard', () => {
        loginPage.verifyDashboard();
    });
    
    it('user logout', () => {
        loginPage.logout();
    });

});


