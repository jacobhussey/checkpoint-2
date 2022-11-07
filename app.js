let clickUpgrades = [
    {
        name: 'mouse',
        price: 25,
        quantity: 0,
        multiplier: 1
    },
    {
        name: 'catnip',
        price: 50,
        quantity: 0,
        multiplier: 2
    },
    {
        name: 'cardboard box',
        price: 200,
        quantity: 0,
        multiplier: 20
    }
];

let automaticUpgrades = [
    {
        name: 'canned tuna',
        price: 150,
        quantity: 0,
        multiplier: 15
    },
];

let totalBox = 0;
let totalTuna = 0;
let totalCatnip = 0;
let totalMice = 0;
let totalPets = 0;

let perclick = 1;
let perAuto = 0;

let mouseprice = 25
let catnipprice = 50
let tunaprice = 150
let boxprice = 200


update()

function mine() {
    totalPets++
    multiplier('mouse')
    multiplier('catnip')
    multiplier('cardboard box')
    update()
}

function update() {
    document.getElementById('pets').innerText = (totalPets)
    document.getElementById('mice').innerText = (totalMice)
    document.getElementById('catnips').innerText = (totalCatnip)
    document.getElementById('tuna').innerText = (totalTuna)
    document.getElementById('box').innerText = (totalBox)
    document.getElementById('mouse price').innerText = (mouseprice)
    document.getElementById('catnip price').innerText = (catnipprice)
    document.getElementById('tuna price').innerText = (tunaprice)
    document.getElementById('box price').innerText = (boxprice)
    document.getElementById('perclick').innerText = (perclick)
    document.getElementById('per auto').innerText = (perAuto)


}

function buyMouse(name) {
    let mouse = clickUpgrades.find(u => u.name == name)
    console.log(mouse);
    if (!mouse) {
        return
    }
    if (totalPets < mouse.price) {
        window.alert("Not enough Total Pets")
        return
    }
    totalPets -= mouse.price
    mouse.price += 50
    mouseprice = mouse.price
    mouse.quantity++
    totalMice++
    perclick++
    update()
}

function buyCatnip() {
    let catnip = clickUpgrades.find(u => u.name == 'catnip')
    console.log(catnip);
    if (!catnip) {
        return
    }
    if (totalPets < catnip.price) {
        window.alert("Not enough Total Pets")
        return
    }
    totalPets -= catnip.price
    catnip.price += 50
    catnipprice = catnip.price
    catnip.quantity++
    totalCatnip++
    perclick += 2
    update()
}

function buyTuna(name) {
    let tuna = automaticUpgrades.find(u => u.name == name)
    console.log(tuna);
    if (!tuna) {
        return
    }
    if (totalPets < tuna.price) {
        window.alert("Not enough Total Pets")
        return
    }
    totalPets -= tuna.price
    tuna.price += 50
    tunaprice = tuna.price
    tuna.quantity++
    totalTuna++
    perAuto += 15
    update()
}

function buyBox(name) {
    let box = clickUpgrades.find(u => u.name == name)
    console.log(box);
    if (!box) {
        return
    }
    if (totalPets < box.price) {
        window.alert("Not enough Total Pets")
        return
    }
    totalPets -= box.price
    box.price += 500
    boxprice = box.price
    box.quantity++
    totalBox++
    perclick += 20
    update()
}

function multiplier(name) {
    let upgrade = clickUpgrades.find(u => u.name == name)
    totalPets += upgrade.multiplier * upgrade.quantity;
}

function collectAutoUpgrades() {
    let passiveUpgrade = automaticUpgrades.find(p => p.multiplier)
    totalPets += passiveUpgrade.multiplier * passiveUpgrade.quantity;
    update()
}


setInterval(collectAutoUpgrades, 3000);