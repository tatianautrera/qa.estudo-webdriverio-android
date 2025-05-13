class EditNoteScreen{

    get moreBtn(){
        return $('~More')
    }

    get deleteBtn(){
        return $('android=new UiSelector().text("Delete")')
    }

    async deleteNote(){
        await this.moreBtn.click()
        await this.deleteBtn.click()
        await driver.acceptAlert()
    }
}
export default new EditNoteScreen();