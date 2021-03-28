#### Zadatak: 
#### (WA-102) Implementirati backend jednostavne web aplikaciju koja definira nekoliko ruta:
- [x] /dodaj - dodaje nasumično odabrani broj između 0 i 100 u listu brojeva (može biti prazna u početku)
- [x] /dohvati - dohvaća listu i ispisuje ju kao HTTP odgovor u obliku gdje su brojevi odvojeni
razmakom, npr. 1 23 53 21 99 (ispis ide u browser, ne u konzolu)
- [x] Potrebno je da se callback funkcija za svaku rutu nalazi u zasebnom paketu
- [x] Na koji način moduli mogu dijeliti zajedničku listu brojeva? Naime, /dodaj mora dodati u istu
listu koju /dohvati vidi. Hint: možda novi paket? :)
