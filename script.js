const { createApp } = Vue

const app = createApp({
  data() {
    return {
      notes: [],
      title: '',
      note: '',
    }
  },
  created() {
    this.notes = this.getNotes()
  },
  methods: {
    getNotes() {
      const notes = localStorage.getItem('notes')
      return notes ? JSON.parse(notes) : []
    },
    saveNotes() {
      localStorage.setItem('notes', JSON.stringify(this.notes))
    },
    addNote() {
      const { title, note } = this
      if (!title && !note) return
      this.notes.push({ id: crypto.randomUUID(), title, note })
      this.saveNotes()
      this.title = ''
      this.note = ''
      this.$refs.titleInput.focus()
    },
    deleteNote(id) {
      const filteredNotes = this.notes.filter((note) => note.id !== id)
      this.notes = filteredNotes
      this.saveNotes()
    },
  },
})

app.mount('#app')
