    console.log(`Welcome To Functional Fishing`);

    console.log(`INSTRUCTIONS`);

    console.log(`In this game, You will catch, cook and eat a fish. You will also search for wood and bait. `)

    console.log('Instructions ')


    var baitCounter = 0
    var woodCounter = 0
    var hasFire = false
    var fishCounter = 0


    function fire () {

    if (woodCounter > 0) {

        if (hasFire === true){
            hasFire = false
            console.log(`You have stop the fire`)       
        }
        if (hasFire === false){
            hasFire = true;
            woodCounter = woodCounter -1;
            console.log(`You have started a fire`)
        }
    } else{
            console.log ('You Need Wood To Start The Fire')
        }
    }


    function fish () {
    if (baitCounter > 0 && hasFire === false){
    baitCounter = baitCounter -1
    fishCounter = fishCounter +1
        console.log(`you have caught 1 fish`)
    } else if (baitCounter === 0){
    console.log(`You have no bait`)
    } else {
        console.log(`You must put out the fire`)
    }
    }


    function bait () { 
    baitCounter = baitCounter + 1
        console.log(`You have found 1 piece of bait`)

        
        
    }

    function wood () {
        woodCounter = woodCounter + 1;
        console.log(`You have found 1 piece of wood`)
    }

    function eat () {
        if (hasFire === false){
            console.log(`You must start the fire`)
        }
        else if (hasFire === true && fishCounter > 0)
        console.log(`You have eaten 1 fish `)
        fishCounter = fishCounter - 1 
    }


    function inventory () {
    console.log(`You Have` + woodCounter + `pieces of wood`)
    console.log(`You Have` + baitCounter + `pieces of bait`)
    console.log(`You Have` + fishCounter + `pieces of fish`)
    if (hasFire === true){
        console.log(`the fire is burning`)
    }
    else{
        console.log(`the fire is out`)
    }
    }



    function help () {
        return (`Welcome to Functional Fishing.
    The text-based console fishing game.`)}
    