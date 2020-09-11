import { short, long } from '../lib/timeouts'
import { mobile, tablet, desktop } from '../lib/device'

describe('First Steps with WebdrverIO', () => {
    it('Load Example Website', () => {
        browser.url('http://www.example.com')
        browser.pause(short)
        expect(browser).toHaveUrl('http://www.example.com/')
        browser.setWindowSize(1350, 750)
        expect(browser).toHaveTitle('Example Domain')
    })
 
   
    it('H1 should be visible', () => {
        browser.pause(long)
        const h1 = $('h1')
        h1.waitForExist()
        expect(h1).toBeVisible()
    })
 
    it('P should be visible', () => {
        const p = $('p')
        p.waitForExist()
        expect(p).toBeVisible()
    })
 
    it('Check Link Value', () => {
        const link = $('a')
        expect(link).toHaveLink('https://www.iana.org/domains/example')
    })
 
    it('Get Element Text', () => {
        const text = $('h1').getText()
        const element = $('h1')
        element.waitForExist()
        expect(element).toHaveText('Example Domain')
    })
 
    it('Assert Attribute', () => {
        browser.url('https://devexpress.github.io/testcafe/example/')
        const button = $('#submit-button')
        button.waitForExist()
        expect(button).toHaveAttrContaining('type', 'submit')
    })
 
    it('Assert Value', () => {
        const button = $('#populate')
        button.waitForExist()
        expect(button).toHaveValue('Populate')
    })
 
    it('Save Screenshot', () => {
        browser.saveScreenshot('your-name.png')
    })
 
    it('Change Browser Viewport', () => {
       // browser.setWindowSize(800, 600)
        browser.pause(long)
    })
 
    it('Set Mobile View', () => {
        browser.setWindowSize(mobile[0], mobile[1])
        browser.pause(short)
    })
 
    it('Set Tablet View', () => {
        browser.setWindowSize(tablet[0], tablet[1])
        browser.pause(short)
    })
 
    it('Set Desktop View', () => {
        browser.setWindowSize(desktop[0], desktop[1])
        browser.pause(short)
    })
})
 
//import { short } from '../lib/timeouts'
// import device from '../lib/device'
 
describe('Browser Actions', () => {
	it('Inputs', () => {
		browser.url('https://devexpress.github.io/testcafe/example/')
        //const input = $('#developer-name')
        const input = $('.//*[@id="developer-name"]')
		input.waitForExist()
		input.setValue('Mike')
		browser.pause(short)
		input.clearValue()
		browser.pause(short)
		input.addValue('Mike')
		browser.pause(short)
	})
 
	it('Click', () => {
		const buttonPupulate = $('#populate')
		buttonPupulate.waitForExist()
		buttonPupulate.click()
	})
 
	it('Checkbox & Radio Button', () => {
		browser.url('https://devexpress.github.io/testcafe/example/')
		const radio = $('#linux')
		radio.waitForExist()
		radio.click()
		browser.pause(short)
 
		const checkbox = $('#remote-testing')
		checkbox.waitForExist()
		checkbox.click()
		browser.pause(short)
	})
 
	it('Select Box', () => {
		browser.url('https://devexpress.github.io/testcafe/example/')
		const select = $('#preferred-interface')
		select.waitForExist()
		select.selectByVisibleText('JavaScript API')
		browser.pause(short)
	})
})

