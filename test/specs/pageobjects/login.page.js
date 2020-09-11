import Page from './page';
import config, { password } from "../../../lib/config"

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () { return $('#UserName') }
    get inputPassword () { return $('#Password') }
    get btnSubmit () { return $('.//input[@type="submit"]') }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open();
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    login () {
        browser.setWindowSize(1350, 750)
        this.inputUsername.setValue(config.userName);
        this.inputPassword.setValue(config.password);
        this.btnSubmit.click(); 
    }


    verifyDashboard(){
        const element = $('//*[@class="dashboard"]/a')
        element.waitForExist()
        expect(element).toHaveText('Dashboard')
    }

    logout(){
        $('//*[@class="subMenuArea"]/a').click
    }

}

export default new LoginPage();
