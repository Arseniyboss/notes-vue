const { createApp } = Vue

const app = createApp({
  data() {
    return {
      notes: [],
      title: '',
      note: '',
    }
  },
  methods: {
    addNote() {
      const { title, note } = this
      if (!title && !note) return
      this.notes.push({ id: crypto.randomUUID(), title, note })
      this.title = ''
      this.note = ''
      this.$refs.titleInput.focus()
    },
    deleteNote(id) {
      const filteredNotes = this.notes.filter((note) => note.id !== id)
      this.notes = filteredNotes
    },
  },
})

app.mount('#app')
