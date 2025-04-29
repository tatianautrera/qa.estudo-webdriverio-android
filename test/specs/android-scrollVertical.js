describe('Android Scroll Vertical Tests', () => {
  
    it('Vertical Scrolling - scrollToEnd', async () => {
        await $('~App').click()
        await $('~Activity').click()
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)')
        await $('~Secure Surfaces').click()

        await expect($('~Secure Dialog')).toExist()
    }) 

    it.only('Vertical Scrolling - scrollTextIntoView', async () => {
        await $('~App').click()
        await $('~Activity').click()
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click()
        await expect($('~Secure Dialog')).toExist()
    }) 
})