function Buscar() {
    let franquia = document.getElementById('txtfranquia')
    let resposta = document.getElementById('res')


    switch(franquia.value) {
        case 'Pittsburgh Steelers':
        case 'New England Patriots':
            resposta.innerHTML = `<p>${franquia.value} possui <strong>6</strong> Super Bowls.</p>`
            franquia.value = ''
            franquia.focus()
            break
        case 'San Francisco 49ers':
        case 'Dallas Cowboys':
            resposta.innerHTML = `<p>${franquia.value} possui <strong>5</strong> Super Bowls.</p>`
            franquia.value = ''
            franquia.focus()
            break
        case 'Green Bay Packers':
        case 'New York Giants':
            resposta.innerHTML = `<p>${franquia.value} possui <strong>4</strong> Super Bowls.</p>`
            franquia.value = ''
            franquia.focus()
            break
        case 'Las Vegas Raiders':
        case 'Washington Football Team':
        case 'Denver Broncos':
        case 'Kansas City Chiefs':
            resposta.innerHTML = `<p>${franquia.value} possui <strong>3</strong> Super Bowls.</p>`
            franquia.value = ''
            franquia.focus()
            break
        case 'Miami Dolphins':
        case 'Indianapolis Colts':
        case 'Baltimore Ravens':
        case 'Tampa Bay Buccaneers':
        case 'Los Angeles Rams':
            resposta.innerHTML = `<p>${franquia.value} possui <strong>2</strong> Super Bowls.</p>`
            franquia.value = ''
            franquia.focus()
            break
        case 'New York Jets':
        case 'Chicago Bears':
        case 'New Orlean Saints':
        case 'Seattle Seahawks':
        case 'Philadelphia Eagles':
            resposta.innerHTML = `<p>${franquia.value} possui apenas <strong>1</strong> Super Bowl.</p>`
            franquia.value = ''
            franquia.focus()
            break
        case 'Tennesse Titans':
        case 'Atlanta Falcons':
        case 'Los Angeles Chargers':
        case 'Buffalo Bills':
        case 'Cincinnati Bengals':
        case 'Minnesota Vikings':
        case 'Arizona Cardinals':
        case 'Detroit Lions':
        case 'Cleveland Browns':
        case 'Jacksonville Jaguars':
        case 'Houston Texans':
        case 'Carolina Panthers':
            resposta.innerHTML = `<p>${franquia.value} <strong>nunca</strong> venceu o Super Bowl.</p>`
            franquia.value = ''
            franquia.focus()
            break
        default:
            alert('Digite corretamente o nome da franquia.')
            franquia.value = ''
            franquia.focus()
            
    }
}

//    num.value = '' //  apaga a barra do número
//    num.focus() // volta a seta para a barra