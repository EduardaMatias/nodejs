const args = process.argv.slice(2)

console.log("Dados:\n")

for (i = 0; i < args.length; i++) {
    let tipo = args[i].split('=')[0]
    let item = args[i].split('=')[1]
    console.log(`${tipo}: ${item}`)
}