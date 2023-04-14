
const CueTimer = () => {

	let previous_cue;	

	const init = function(vidId, cuesArray) {
		
		document.getElementById(vidId).addEventListener('timeupdate', (e) => 
		{
			const video = e.target || window.srcElement;
			let now = Math.floor(video.currentTime);
	
			for (let i in cuesArray) 
			{
				const seconds = cuesArray[i].seconds;
				const mycallback = cuesArray[i].callback;
				

				if (seconds == now) 
				{
					if(previous_cue == now)
					{
						continue;
					} 
					else
					{
						mycallback(e);
						previous_cue = now;
						break;
					}
				}
			}
		});

		return this;
	}
	
	return {setup: init};
	
}

export let cueTimer = CueTimer();
