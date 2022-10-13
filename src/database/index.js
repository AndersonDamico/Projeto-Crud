const mongoose = require('mongoose')

function connect() {
 //essas linhas nao sao mais necessarias por questao de atualizaçao do mongoose
    //mongoose.set('useNewUrlParser', true)
    //mongoose.set('useUnifiedTopology', true)
    
  mongoose.connect('mongodb://localhost:27017/projeto-crud?readPreference=primary&appname=MongoDB%20Compass&ssl=false')
  
  const db = mongoose.connection
  
  db.once('open', () => {
    console.log('Connected to database!')
  })
  
  db.on('error', console.error.bind(console, 'connection error: '))
}

module.exports = {
  connect
}
