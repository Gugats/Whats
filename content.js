

const interval = setInterval(() =>{
    const header = document.querySelector("._3auIg");
	
	let velocidades = [1, 1.5, 2, 4];
	const quantidadeVelocidades = velocidades.length;
	
    if (header) {
        clearInterval(interval)

        const button = document.createElement("button")
        button.innerHTML = velocidades[1] + 'x';	
        button.classList.add("twoTimesButton")

        button.addEventListener("click", () => {
            const audios = document.querySelectorAll("audio");
            audios.forEach((audio) => {
					let velocidadeAtual = audio.playbackRate;
					let index = velocidades.indexOf(velocidadeAtual);
					
					let proximaVelocidade = quantidadeVelocidades === index + 1 ? velocidades[0] : velocidades[index+1];
					
					audio.playbackRate = proximaVelocidade;
					
					let proximoIndex = velocidades.indexOf(proximaVelocidade);
					let proximaVelocidadeLabel = quantidadeVelocidades === proximoIndex + 1 ? velocidades[0] : velocidades[proximoIndex+1];
					button.innerHTML = proximaVelocidadeLabel + 'x';	
                })
            })
            
            
        header.appendChild(button)

    }
}, 1000)

