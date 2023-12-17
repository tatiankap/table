function generateTable() {
    const table = document.createElement('table');
    const tbody = document.createElement('tbody')

    table.append(tbody)
    for(let i = 0; i < 10; i ++){
        const row = document.createElement('tr')
        for(let j = 0; j < 10; j++){
            const td = document.createElement('td')
            td.append(i * 10 + j + 1)
            row.append(td)
        }
        tbody.append(row)
    }
    document.body.append(table);
}

generateTable()