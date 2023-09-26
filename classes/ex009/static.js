class ResourceProcessorStation {
    constructor(name, monthlyProcessing) {
        this.name = name
        this.monthlyProcessing = monthlyProcessing
    }
    
    static calculateProcessInHours(monthlyProcessing, hours) {
        return monthlyProcessing / 720 * hours
    }
}

let totalProcessing = ResourceProcessorStation.calculateProcessInHours(500, 6)
console.log(totalProcessing)

let processor = new ResourceProcessorStation("Gaia", 2000)
//processor.calculateProcessInHours(processor.monthlyProcessing, 10) ---> Não funciona pois não pode ser chamado direto do objeto instanciado.
let totalProcessed = ResourceProcessorStation.calculateProcessInHours(processor.monthlyProcessing, 10) // ----> Funciona pois está colocando o valor do método estático em uma variável e não puxando direto do objeto.
console.log(totalProcessed)