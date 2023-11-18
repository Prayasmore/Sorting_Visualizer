
async function shellSort(barsArray) {

	// n -> total number of bars 
    const n = barsArray.length;


	for (let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2)) 
	{ 
		for (let i = 0; i < gap; i++) {
			for (let j = i + gap; j < n; j += gap) {
				let cur = j,
					pre = j - gap;

				// change color of the bar being process to blue  
				barsArray[cur].style.background = "#0072ff";
				barsArray[pre].style.background = "#0072ff";
				await new Promise(resolve => setTimeout(resolve, delay));

				while (pre >= 0 && parseInt(barsArray[pre].style.height) > parseInt(barsArray[cur].style.height)) {
					barsArray[cur].style.background = "#ffd000";
					barsArray[pre].style.background = "#ffd000";
					await new Promise(resolve => setTimeout(resolve, delay));

					await swap(barsArray[cur], barsArray[pre]);
					cur = pre;
					pre -= gap;
				}
			}
		}
	} 

	// barsArray is sorted, change bar's color to green
	for (let i = 0; i < n; i++) {
        barsArray[i].style.background = "#15fa00";
	}
	await new Promise(resolve => setTimeout(resolve, delay));
}