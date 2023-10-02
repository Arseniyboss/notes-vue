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
  },
})

app.mount('#app')
