
async function quickSwap(barsArray, firstIndex, secondIndex) {
    await swap(barsArray[firstIndex], barsArray[secondIndex]);
}

async function pivot(barsArray, pivotIndex = 0, endIndex = barsArray.length - 1) {
    let swapIndex = pivotIndex;
    for( let i = pivotIndex + 1; i <= endIndex; i++) {
		// change color of the bar being process to blue 
		barsArray[i].style.background = "#0072ff";
        barsArray[pivotIndex].style.background = "#0072ff";
		await new Promise(resolve => setTimeout(resolve, delay));

        if(parseInt(barsArray[i].style.height) < parseInt(barsArray[pivotIndex].style.height)) {
            swapIndex++;
            await quickSwap(barsArray, swapIndex, i);
        }

		// change color back to normal 
		barsArray[i].style.background = "#ffd000";
        barsArray[pivotIndex].style.background = "#ffd000";
		await new Promise(resolve => setTimeout(resolve, delay));
    }
    await quickSwap(barsArray, pivotIndex, swapIndex);

	// change color of sorted element and pivot element to green
	barsArray[swapIndex].style.background = "#15fa00";
    await new Promise(resolve => setTimeout(resolve, delay));
	barsArray[pivotIndex].style.background = "#15fa00";
    await new Promise(resolve => setTimeout(resolve, delay));

	return swapIndex;

}

async function quickSort(barsArray, left, right) {
    if( left < right ) {
        let pivotIndex = await pivot(barsArray, left, right);
        quickSort(barsArray, left, pivotIndex - 1);
        quickSort(barsArray, pivotIndex + 1, right);
    }
    
}