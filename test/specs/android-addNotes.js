import AddNoteScreen from '../screenobjects/android/add-note.screen'
describe('Add notes', () => {
    it('Skip tutorial', async () => {
        await AddNoteScreen.skipBtn.click()
        await expect(AddNoteScreen.addNoteText).toBeDisplayed()
    })

    it('add note, save changes & verify note',async ()=>{
        const notes = 'Naruto\nOnePiece\nAOT'
        const title = 'Fav anime list'

        await AddNoteScreen.addNote(title, notes)

        await expect(AddNoteScreen.titleEditInput).toBeDisplayed()
        await expect(AddNoteScreen.noteEditInput).toHaveText(notes)
    })
})

