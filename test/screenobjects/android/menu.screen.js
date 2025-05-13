class MenuScreen{

    get menuNav(){
        return $('android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/icon_nav")')
    }

    get TrashMenu(){
        return $('android=new UiSelector().text("Trash Can")')
    }

    get titleNoteText(){
        return $('android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/title")')
    }

    async accessTrash(){
        await this.menuNav.click()
        await this.TrashMenu.click()
    }
}
export default new MenuScreen();