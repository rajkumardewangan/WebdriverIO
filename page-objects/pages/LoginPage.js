import Base from '../base'

class LoginPage extends Base {
    get loginForm(){
        return  $('#login_form')
    }

    get usernameInput(){
        return  $('#user_login')
    }

    get passwordInput() {
        $('#user_password')
    }

    get submitButton(){
        $('input[type="submit"]')
    }

    formIsVisible (){
        this.loginForm.waitForExist()
    }

    fillForm(username, password){
        this.usernameInput.setValue(username)
        this.passwordInput.setValue(password)
    }

    submitForm() {
        this.submitButton.click()
    }

    login (username, password){
        this.loginForm.waitForExist()
        this.usernameInput.setValue(username)
        this.passwordInput.setValue(password)
        this.submitButton.click()
    }
}


export default new LoginPage()