Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”

BONUS 1:
Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.

BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.
Ricordate: il primo push dovrà essere un file README.md contenente la risoluzione dell’esercizio in linguaggio naturale!
Buon lavoro e buon divertimento!

--- LOGICA DELLE CONDIZIONI ---
numero % 3 == 0 && numero % 5 == 0 --> se true stampo FizzBuzz
numero % 3 == 0 --> se true stampo Fizz
numero % 5 == 0 --> se true stampo Buzz

---

1 - prendo dall'html l'id della lista

2 - metto un ciclo for per generare li da 1 a 100 - creo la variabile li che crea gli li - append di li a ul - gli aggiungo la classe di style dei quadrati

3 - if (divisibile per 3 E per 5) stampo fizz buzz nelle li corrispondenti --> Prima bisogna mettere la casistica più complessa perchè se si mette alla fine
del ciclo non ci si entrerà mai.

- else if (divisibile per 3) stampo fizz nelle li corrispondenti
- else if (divisibile per 5) stampo buzz nelle li corrispondenti
- else per tutti i casi rimanenti

4 - aggiungo nei diversi casi le classi di style per i quadrati
