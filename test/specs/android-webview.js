describe('Web browser Access', () => {
    before(async ()={

    })
  
    it('Access external link and verify content in the browser', async () => {
        await $('//[@resource-id="com.socialnmobile.dictapps.content.color.note:id/icon_nav"]').click()
        await $('//*[@text="Like us on Facebook"]').click()
    
        //pega o contexto atual
        console.log(await driver.getContext())
        //pega a lista de contextos disponiveis
        await driver.switchContext('WEBVIEW_chrome')
        await driver.getContexts()
        const coverImg = $('.img.coverPhoto')
        await expect(coverImg).toBeDisabled()

        await driver.switchContext('NATIVE_APP')
        await driver.back()

        await $('//*[@text="Notes"]').click()
        const addNoteText = await $('//*[@text = "add note"]')
        await expect(addNoteText).toBeDisplayed()
    }) 
})