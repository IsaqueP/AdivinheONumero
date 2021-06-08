//Jogo de adivinhar um número

let randomNumber = Math.floor(Math.random() * (10 - 0 + 1)) + 0;

let btn = document.getElementById("btn")
let palpiteAnterior = document.getElementById("msgPalpiteAnterior");
let msgLowHigh = document.getElementById("msgLowHigh");
let msgFinalWin = document.querySelector(".msgFinal");

let contador = 0;


btn.addEventListener("click", function adivinharNumero(){
        let userNumber = Number(document.querySelector(".userNumber").value);
        let inputUserNumber = document.querySelector(".userNumber");
        
        function highLow(){
                if(userNumber < randomNumber){
                        msgLowHigh.textContent = "Seu palpite está muito baixo"
                }else if(userNumber > randomNumber){
                        msgLowHigh.textContent = "Seu palpite está muito alto"
                }
        }

        function resetGame(){
                randomNumber = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
                
                btn.disabled = true;
                inputUserNumber.disabled = true;

                let btnNewGame = document.createElement("button");
                btnNewGame.classList.add('btnStyle')
                btnNewGame.textContent = "Iniciar novo jogo"
                msgLowHigh.append(btnNewGame)
        
                contador = 0;

                btnNewGame.addEventListener("click", function(){
                        palpiteAnterior.textContent = ''
                        msgLowHigh.textContent = ''
                        msgFinalWin.textContent = ''

                        msgFinalWin.classList.remove('win')
                        msgFinalWin.classList.remove('lose')

                        btn.disabled = false;
                        inputUserNumber.disabled = false;
                })
        }


        if(userNumber === randomNumber){
                msgFinalWin.classList.remove('lose')
                msgFinalWin.classList.add('win')
                msgFinalWin.textContent = "Wins!!"

                palpiteAnterior.textContent = ''
                msgLowHigh.textContent = ''

                resetGame()
               
        }else if(contador === 0){
                palpiteAnterior.textContent += 'palpite anterior:' + ' ' + userNumber + ' ';
                contador++;

                msgFinalWin.classList.remove('win')
                msgFinalWin.classList.add('lose')
                msgFinalWin.textContent = "Errou"

                highLow()

        }else if(contador >= 1 && contador <= 4){
                palpiteAnterior.textContent += userNumber + ' ';               
                contador++;
                
                highLow()
                
        }

        if(contador == 5){
                inputUserNumber.value=''
                resetGame()
                msgFinalWin.textContent = "Fim de jogo"
        }
})

