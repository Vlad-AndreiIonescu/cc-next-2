ACADEMIA DE STUDII ECONOMICE DIN BUCUREȘTI
CLOUD COMPUTING
 
Aplicație pentru gestiunea detaliilor echipelor de fotbal
 
IONESCU VLAD-ANDREI
GRUPA 1120	

Introducere:
 Proiectul "Details about Football Teams App" are ca scop să ofere utilizatorilor o platformă interactivă pentru a afișa detalii sumare despre diverse echipe de fotbal. Aplicația permite adăugarea și ștergerea de carduri care conțin informații precum numele echipei, antrenorul, țara de proveniență și numărul de campionate naționale câștigate. De asemenea, exista o pagina dedicata afișării echipelor din campionatul englez “Premier League”. 
Link-uri utile: 
● Git: Vlad-AndreiIonescu/cc-next-2 (github.com) 
● Vercel: https://cc-next-2-theta.vercel.app
● Youtube: https://youtu.be/xioudpTwfd4

Descriere problemă:
 În lumea fotbalului, există o mulțime de echipe cu o istorie bogată și cu rezultate remarcabile. Cu toate acestea, nu întotdeauna este ușor pentru pasionații de fotbal să găsească și să acceseze informații concise despre echipele preferate. Proiectul nostru își propune să rezolve această problemă prin crearea unei aplicații simple și intuitive, care furnizează detalii relevante despre echipele de fotbal. 

Descriere API:
API înseamnă Interfață de Programare a Aplicațiilor. Este un set de reguli și protocoale care permit aplicațiilor software să comunice între ele. API-ul stabilește modul în care diverse componente software pot interacționa și pot schimba date între ele.
 Pentru Details about Football Teams App s-au implementat API-uri pentru adăugare, ștergere, updatare și citire de documente din MongoDB.

Fig 1.  Conținutul fișierului apiMethods.js

De asemenea, pentru afisarea echipelor din Premier League s-a folosit un api extern, preluat de pe site-ul: API - TheSportsDB.co, care contine api-uri deste o multitudine de sporturi.

Fig 2. Corpul și apelul metodei fetchData din fișierul FootballDataApiPage.jsx

In figura de mai sus se poate observa modalitatea de extragere a datelor pentru  https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=English%20Premier%20League, fiind folosit pentru afisarea echipelor intr-o structura tabelara.

Flux de date: 
·   	Exemple de request / response

Fig 3. Exemplu de GET

Fig 4. Exemplu de POST

Fig 5. Exemplu de PUT

Fig 6. Exemplu de DELETE

Metode HTTP

	Fig 7. Metode HTTP


Capturi de ecran aplicație:

				Fig 8. Main Page

In Fig 8. este prezentata pagina principala a aplicatiei. Aceasta dispune de un titlu, apoi doua butoane, iar dedesubt este afisata lista de carduri. Pe fiecare card apare numele echipei, numele antrenorului, tara de provenienta si numarul de campionate castigate. De asemenea fiecare card are un buton prin intermediului caruia cardul se poate sterge. Revenind la cele doua butoane de deasupra listei, primul are rolul de a ne trimite catre un formular pt inserarea unui nou card, iar al doilea buton ne trimite catre tabelul cu echipele din Premier League.


				Fig 9. Insert Page
In figura anterioara ne este prezentat formularul care trebuie completat pentru a adauga un nou card. Utilizatorul trebuie sa completeze campurile necesare apoi sa apese butonul submit si o sa apara un toast message pentru confirmare. De asemenea, exista butonul Back to Main Page care duce utilizatorul la pagina principala.
                                    
				Fig 10. Toast Message

			Fig 11. Pagina in care sunt afisate echipele din Premier League

In figura 11 sunt afisate echipele din Premier league intr-o structura tabelara si in mod alfabetic. Coloanele de care dispune tabelul sunt: numele echipei, numele stadionului, anul de infiintare al echipei si abrevierea acesteia. Pentru a ne intoarce la pagina principala avem butonul Back to Main Page.

Pentru a faciliza stilizarea aplicatiei am folosit Chakra-ui, care reprezinta o librarie de componente.

Referințe: 
În cadrul dezvoltării proiectului, s-au consultat următoarele resurse și documentații: 
https://nextjs.org/docs JavaScript Documentation  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide CSS Documentation
https://developer.mozilla.org/en-US/docs/Web/CSS
API - TheSportsDB.com
https://chakra-ui.com
