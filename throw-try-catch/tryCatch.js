function sayMyName(name = '') {
    if(name === '') {
        throw new Error("O nome é obrigatório!")
    } else {
        console.log(name)
    }
}

try {
    sayMyName() // Se estiver vazio, retornará o erro
} catch(e) {
    console.log(e)
}