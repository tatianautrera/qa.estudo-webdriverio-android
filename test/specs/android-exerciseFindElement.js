describe('Android Elements Tests Exercise', () => {
    it('Fill field', async () => {
        await $('android= new UiSelector().text("Views")').click()
        await $('//*[@text="Auto Complete"]').click()
        await $('~2. Screen Bottom').click()
        const textFiel = await $('android= new UiSelector().resourceId("io.appium.android.apis:id/edit")')
        await textFiel.setValue('Brasil')
        await expect(textFiel).toHaveText('Brasil')
    }) 

})