import AddNoteScreen from '../screenobjects/android/add-note.screen'
import EditNoteScreen from '../screenobjects/android/edit-note.screen'
import MenuScreen from '../screenobjects/android/menu.screen'
import {$} from '@wdio/globals'
describe('Delete notes', () => {
    it('Skip tutorial', async () => {
        await AddNoteScreen.skipBtn.click()
        await expect(AddNoteScreen.addNoteText).toBeDisplayed()
    })

    it('add note, save changes & selete', async () => {
        const notes = 'Naruto\nOnePiece\nAOT'
        const title = 'Fav anime list'

        await AddNoteScreen.addNote(title, notes)
        await EditNoteScreen.deleteNote()

        await MenuScreen.accessTrash()
        await expect(MenuScreen.titleNoteText).toHaveText(title)
    })
})

