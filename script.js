const dataBaseProducts = [
  ["Miojo", 1.7],["Vassoura", 10],["Vinho Campestre", 5.5],["Vinho São Braz", 8],["Milho Verde", 3.6],
  ["Feijão Carioca", 9.2],["Feijão de Corda", 8.5],["Caldo Maggi(Knor)", 0.7],["SBP", 15.5],["Alho", 2],
  ["Maizena", 3.4],["Prendedor de Roupa", 2.5],["Goma", 7.9],["Carne de Lata", 7.2],["Sardinha", 5.5],
  ["Mortadela", 2.5],["Farinha Branca", 5.25],["Farinha Amarela", 5.25],["Farinha D'água", 6.9],["Macarrão", 4.5],
  ["Sabão em Barra", 16],["Sabão em pó", 5.9],["Absorvente", 4.3],["Papel Higiênico", 2.5],["Detergente", 2.6],
  ["Limpa Fácil", 2.6],["Água Sanitária(Kboa)", 2.5],["Havaianas", 22],["Caneta", 1],["Prestobarba", 2.9],
  ["Sabonete", 2],["Café", 9.5],["Arroz", 5.5],["Açúcar", 5],["Óleo Soya", 12.9],
  ["Leite Itambé", 8.5],["Leite em Caixa", 6.7],["Mucilon", 6.9],["Nescau Lata Pequena", 5.2],["Biscoito Wafer", 3.15],
  ["Biscoito Grande", 2.5],["Biscoito Pequeno", 1.5],["Bolacha Seca", 5.5],["Cream Cracker", 5.9],["Bolacha Maria", 6.5],
  ["Massa de Milho", 2.3],["Flocão", 2.6],["Creme de Leite", 3.6],["Leite Condensado", 6],["Xilito", 0.75],
  ["Pipoca", 0.7],["Primor Pequena", 4.3],["Farinha de Trigo com Fermento", 7.3],["Farinha de Trigo sem Fermento", 7.5],["Bombom", 0.1],
  ["Fumo", 3.2],["Nucita", 0.3],["Chiclete", 0.15]
  ["Pop", 0.4],["Pastilhas", 1],["Jujuba", 0.7],["Serenata de Amor", 1],["Confeito Pop Car", 3.5],
]

const ulElement = document.querySelector("#list")
const inputElement = document.querySelector("#search")


const products = (() => dataBaseProducts.sort() )()

const createProduct = (name, value) => {
  const li = document.createElement("li")
  const productName = document.createElement("p")
  const productValue = document.createElement("p")
    
  li.classList.add("product")
  productName.classList.add("title")
  productValue.classList.add("value")
  
  productName.textContent = name
  productValue.textContent = `R$ ${value.toFixed(2)}`
  console.log(value)

  li.appendChild(productName)
  li.appendChild(productValue)

  return li
}

const filterLis = (lis, inputValue, has) => lis
  .filter(
    li => {
      const hasInclusion = li.textContent.toLowerCase().includes(inputValue)
      
      return has ? hasInclusion : !hasInclusion
    }
  )

const hideLis = (lis, inputValue) => filterLis(lis, inputValue, false)
    .forEach( li => li.classList.add("hidden") )

const showLis = (lis, inputValue) => filterLis(lis, inputValue, true)
    .forEach( li => li.classList.remove("hidden") )

const createList = database => database
  .forEach(
    item => 
      {
        ulElement.appendChild(createProduct(...item))
        console.log (item)
      }
  )

const searchProduct = event => {
  const inputValue = event.target.value.trim().toLowerCase()
  const lis = Array.from(ulElement.children)

  hideLis(lis, inputValue)
  showLis(lis, inputValue)
}

inputElement.addEventListener("input", searchProduct)
createList( dataBaseProducts.sort() )