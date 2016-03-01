const fs = require('fs')
const result = fs.readdirSync('_posts')
const path = require('path')
const exec = require('child_process').execSync

result.forEach(file => {
  const targetDir = path.join(
    __dirname,
    'pages',
    file.split('.markdown')[0]
  )
  console.log(targetDir)
  fs.mkdirSync(targetDir)

  exec(
    `cp _posts/${file} ${targetDir}/index.md`
  )
})
