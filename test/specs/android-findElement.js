describe('Android Elements Tests', () => {
    it('Find elements by accessibility id', async () => {
        const appOpetion = await $('~App')

        await appOpetion.click()

        const actionBar = await $('~Action Bar')
        await expect(actionBar).toBeExisting()
    })

    it('Find element by class name',async()=>{
        const className = $('android.widget.TextView')
        console.log(await className.getText())
        await expect(className).toHaveText('API Demos')
    })

    it('Find elementos by xpath',async()=>{

        await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click()
        await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click()
        await $('//android.widget.TextView[@text="Command two"]').click()

        const textAssersion = await $('//android.widget.TextView')

        await expect(textAssersion).toHave('You selected: 1 , Command two')
    })

    it('Find elements vy UiAutomator',async()=>{
        await $('android=new UiSelector().textContains("Alert")').click()
    })

    it('Find multiples elements',async()=>{
        const expectList = []
        const acrualList= []
        const textList = await $$('android.widget.TextView')

            for(const element of textList){
                acrualList.push(await element.getText())
            }

            expect(acrualList).toEqual(expectList)
    })
})