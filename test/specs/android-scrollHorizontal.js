describe('Android Scroll Horizontal Tests', () => {
    beforeEach(async()=>{
        await driver.startActivity("io.appium.android.apis", ".view.Gallery1")
    })
  
    it('Vertical Scrolling - scrollToEnd', async () => {
        //scrolar para frente
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()')

        //scrolar pra tras
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()')
    }) 
})