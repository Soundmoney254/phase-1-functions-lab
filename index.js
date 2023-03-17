const aBlock = 264;
function distanceFromHqInBlocks(pickupBlock){
if (pickupBlock >= 42){
    return pickupBlock - 42;
}
else
return 42 - pickupBlock;
}

function distanceFromHqInFeet(pickupBlock){
    return distanceFromHqInBlocks(pickupBlock) * aBlock
}

function distanceTravelledInFeet(startBlock, endBlock){
   if(endBlock >= startBlock){
   return ((endBlock-startBlock)*aBlock);
}
else
return ((startBlock-endBlock)*aBlock);
}

function  calculatesFarePrice(start, destination){
    let fare = 0;
    const distance = distanceTravelledInFeet(start,destination);
    if(distance<401){
        return fare;
    }
    else if (distance > 400 && distance < 2001){
        return ((distance -400) * .02);
    }
    else if (distance > 2000 && distance < 2501){
        return (fare + 25);
    }
    else
    return 'cannot travel that far';
}