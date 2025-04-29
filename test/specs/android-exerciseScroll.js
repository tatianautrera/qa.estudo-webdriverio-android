describe('Android Scroll Exercise', () => {
    it('Change date', async () => {
        await $('android= new UiSelector().text("Views")').click()
        await $('~Date Widgets').click()
        await $('~1. Dialog').click()

        const time = await driver.getDeviceTime()
        console.log("Data e hora",time)

        const time2 = await $('android=new UiSelector().resourceId("io.appium.android.apis:id/dateDisplay")').getText()
        console.log("Data e hora",time2)

        await $('~change the date').click()
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()')
        await $('~30 May 2025').click()
        await driver.acceptAlert()
        driver.pause('5000')
        await expect($('android=new UiSelector().resourceId("io.appium.android.apis:id/dateDisplay")')).toHaveText('5-30-2025 01:02')
    }) 

})