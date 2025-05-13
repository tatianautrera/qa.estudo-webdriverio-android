class AddNoteScreen{

    get skipBtn(){
        return $('//*[@text="SKIP"]')
    }

    get addNoteText(){
        return $('//*[@text="Add note"]')
    }

    get textOption(){
        return $('//*[@text="Text"]')
    }

    get editingTxt(){
        return $('//*[@text="Editing"]')
    }

    get titleInput(){
        return $('android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/edit_title")')
    }

    get noteInput(){
        return $('android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/edit_note")')
    }

    get titleEditInput(){
        return $('android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/edit_btn")')
    }

    get noteEditInput(){
        return $('android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/view_note")')
    }

    async addNote(title, notes){
        await this.addNoteText.click()
        await this.textOption.click()
        await expect(this.editingTxt).toBeDisplayed()

        await this.titleInput.setValue(title)
        await this.noteInput.setValue(notes)

        await driver.back()
        await driver.back()
    }
}
export default new AddNoteScreen();