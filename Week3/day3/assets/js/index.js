/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */

       let h1 = (document.getElementsByTagName("h1"))[0]

    const changeTitle = function (e) {

      e.innerText = 'Esercizi day 3 settimana 3';
    }

    changeTitle(h1)

   
       /* ESERCIZIO 2
          Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
       */
   
          const addClassToTitle = function (e) {
            e.classList.add("myHeading");
          }
      
          addClassToTitle(h1)
   
   
       
   
       /* ESERCIZIO 3
          Scrivi una funzione per che cambi il testo dei p figli di un div
         */
   
          const changePcontent = function () {
            let div = document.querySelectorAll("div > p")
            for (e of div) {
              e.innerText = "Risultato esercizio 3"
            }
        }

        changePcontent()

       /* ESERCIZIO 4
          Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
         */
   
          const changeUrls = function () {
            let body = (document.querySelectorAll("body > div > a"))[0]
            body.href = "https://www.google.com"
          }
      
          changeUrls()
   
       /* ESERCIZIO 5
          Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
       */
   
          const addToTheSecond = function () {
            // richiamo la destinazione del nuovo elemento
            let listaDue = document.getElementById("secondList")
      
            // definisco l'elemento da creare
            let newElement = document.createElement("li")
            newElement.innerHTML = '4rt'
      
            // lo inserisco nel DOM
            listaDue.appendChild(newElement)
          }
      
          addToTheSecond()
   
       /* ESERCIZIO 6
          Scrivi una funzione che aggiunga un secondo paragrafo al primo div
       */
   
          const addParagraph = function () {
            let body = document.querySelector("body > div")
            let newP = document.createElement("p")
      
            newP.innerHTML = 'Nuovo paragrafo del primo div'
      
            body.appendChild(newP)
          }
      
          addParagraph()
   
       /* ESERCIZIO 7
          Scrivi una funzione che faccia scomparire la prima lista non ordinata
       */
   
          const hideFirstUl = function () {
            let listaUno = document.getElementById("firstList")
      
            listaUno.hidden = true
          }
   
       /* ESERCIZIO 8 
          Scrivi una funzione che renda verde il background di ogni lista non ordinata
         */
   
       const paintItGreen = function () {
      let liste = document.querySelectorAll("ul")
      for (let e of liste) {
        e.style.backgroundColor = "green"
      }
    }

    paintItGreen()
   
       /* ESERCIZIO 9
          Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
         */
   
       const makeItClickable = function () {
   
   
       }
   
       /* ESERCIZIO 10
          Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
         */
   
          const revealFooterLink = function () {
            let clickFooter = document.querySelector('footer')
            clickFooter.addEventListener('click', () => {
              let a = document.querySelector('footer a')
              alert(a.href)
            })
          }
      
          revealFooterLink()
   
       /* ESERCIZIO 11
          Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
          La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
       */
   
       const generateTable = function () {
   
   
       }
   
       /* ESERCIZIO 12
          Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
       */
   
       const addRow = function () {
   
   
       }
   
       /* ESERCIZIO 14
         Crea una funzione che nasconda le immagini della tabella quando eseguita
       */
   
       const hideAllImages = function () {
   
   
       }
   
       /* EXTRA ESERCIZIO 15
         Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
       */
   
       const changeColorWithRandom = function () {
   
   
       }
   
       /* EXTRA ESERCIZIO 16
         Crea una funzione che elimini le vocali da ogni elemento testuale della pagina (puoi aiutarti con i nuovi metodi degli array di ES6)
       */
   
       const deleteVowels = function () {
   
   
       }