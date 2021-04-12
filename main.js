const str = `
010-1234-5678
the7632@gmail.com
http://www.omdbapi.com/?apikey=2181d79b&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

console.log(
  str.match(/(?<=@).{1,}/g)
)