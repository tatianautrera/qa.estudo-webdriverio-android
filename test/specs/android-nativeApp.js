describe('Android Native Feature Tests', () => {
    beforeEach(async()=>{
        await driver.startActivity("io.appium.android.apis", ".app.AlertDialogSamples")
    })
    it('Access an Activity directly', async () => {
        
        await expect($('//*[@text="App/Alert Dialogs"]'))   
    }) 

    it('Working with Dialog boxes',async()=>{
        await $('android=new UiSelector().resourceId("io.appium.android.apis:id/two_buttons")').click()

        console.log('Alert Text:',await driver.getAlertText())

        await driver.acceptAlert()

        // await driver.dismissAlert()

        await expect($('android=new UiSelector().resourceId("android:id/alertTitle")')).not.toExist()
    })
})