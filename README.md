# ATM{CTF} - Platforma Ta Supremă de CTF

Bine ai venit pe **ATM{CTF}**, platforma de top Capture The Flag (CTF) creată pentru studenți, pasionați de securitate cibernetică și minți curioase dornice să își testeze și să își dezvolte abilitățile într-un mediu dinamic, captivant și securizat. Fie că ești începător și pășești pentru prima dată în lumea securității cibernetice sau un profesionist experimentat în căutare de provocări, ATM{CTF} îți oferă o experiență captivantă care îți va aprinde pasiunea pentru rezolvarea problemelor și hacking. Această platformă a fost dezvoltată în întregime de mine, cu dedicare și entuziasm pentru a aduce o experiență unică comunității de securitate cibernetică.

## Ce este ATM{CTF}?

ATM{CTF} este o platformă CTF versatilă și bogată în funcționalități, concepută pentru a încuraja învățarea, colaborarea și competiția în domeniul securității cibernetice. Proiectată pentru competiții individuale și pe echipe, aceasta oferă un mediu robust și personalizabil pentru organizarea și participarea la evenimente CTF. De la crearea propriilor provocări la gestionarea echipelor și urmărirea scorurilor, ATM{CTF} le permite organizatorilor și participanților să exploreze în profunzime universul fascinant al securității cibernetice.

## Funcționalități Principale

### Creare și Gestionare Provocări
- **Provocări Personalizate**: Creează provocări unice cu fișiere, indicii, fragmente de cod și steaguri direct din panoul de administrare intuitiv.
- **Încărcare Fișiere**: Încarcă în siguranță fișierele asociate provocărilor pe server.
- **Provocări Docker**: Implementează provocări containerizate pentru medii izolate și scalabile.
- **Steaguri Dinamice**: Generează steaguri unice pentru fiecare echipă pentru a asigura jocul corect.
- **Scor Dinamic**: Implementează un sistem de punctaj cu o scădere de 15 pentru a recompensa rezolvările timpurii.
- **Protecție Împotriva Atacurilor Brute**: Protejează trimiterea steagurilor împotriva atacurilor automate.

### Moduri de Competiție
- **Joc Individual și pe Echipe**: Concurează solo sau formează echipe pentru a aborda provocările împreună.
- **Recompense First Blood**: Sărbătorește primii rezolvitori cu recunoaștere specială.
- **Docker pe Echipe**: Lansează instanțe Docker dedicate pentru fiecare echipă.

### Tablou de Scor și Statistici
- **Tablou de Scor în Timp Real**: Urmărește statistici globale, pe echipe și individuale cu rezolvare automată a egalităților.
- **Statistici Detaliate**: Vezi performanțele detaliate ale provocărilor, utilizatorilor și echipelor.

### Automatizare și Personalizare
- **Programare Automată**: Setează orele de început și de sfârșit ale competițiilor cu ușurință din panoul de administrare.
- **Personalizare Site**: Personalizează culorile site-ului, fundalul, regulile și pagina principală pentru a se potrivi cu atmosfera evenimentului.
- **Gestionare Echipe și Utilizatori**: Promovează, interzice sau gestionează participanții cu ușurință.

### Date și Securitate
- **Import/Export Tablouri de Scor**: Importă sau exportă datele CTF în format JSON fără probleme.
- **Verificare prin Email**: Asigură o înregistrare securizată cu verificarea prin email.
- **Backend Robust**: Susținut de Node.js, MongoDB și configurări opționale Docker pentru fiabilitate maximă.

### Opțiuni Flexibile de Configurare
- **Implementare Dockerizată**: Utilizează Docker Compose pentru configurări rapide și scalabile (doar pentru provocări non-Docker).
- **Configurare Manuală**: Configurează platforma fără Docker folosind Node.js și MongoDB pentru control complet.

## De ce ATM{CTF}?

ATM{CTF} este mai mult decât o platformă – este un spațiu creat cu pasiune pentru a sprijini comunitatea de securitate cibernetică. Cu ATM{CTF}, poți:
- **Învăța Practic**: Abordează provocări inspirate din lumea reală care testează abilitățile în rețelistică, criptografie, securitate web și multe altele.
- **Colabora**: Lucrează împreună cu colegii de echipă pentru a rezolva probleme complexe și a împărtăși cunoștințe.
- **Concura**: Urcă în clasament, câștigă recunoaștere și demonstrează-ți expertiza.
- **Crește**: Construiește încredere și competențe într-un mediu sigur, controlat, conceput pentru educație și distracție.

## Cum Începi

### Cerințe Prealabile
- **Tehnologii utilizate**: React, MongoDB, Docker.
- **Node.js**: Asigură-te că ai Node.js instalat.
- **MongoDB**: Configurează o bază de date MongoDB (descarcă de la [MongoDB Community](https://www.mongodb.com/try/download/community) pentru testare pe Windows).
- **Opțional**: Docker pentru implementări containerizate.

### Instrucțiuni de Configurare
1. **Clonează Repositoriul**:
   ```bash
   git clone https://github.com/RusuCalinPetru/ATM-CTF--Platform.git
   cd ATM-CTF--Platform
   ```
2. **Configurează Fișierele de Mediu**:
   - Completează detaliile necesare (de ex., URI MongoDB, chei API).
3. **Pornește MongoDB**:
   - Lansează instanța MongoDB.
4. **Instalează și Rulează**:
   - **Frontend**:
     ```bash
     cd frontend
     npm install
     npm start
     ```
   - **Backend**:
     ```bash
     cd backend
     npm install
     npm start
     ```
   - **Docker API** (dacă folosești provocări Docker):
     ```bash
     cd dockerAPI
     npm install
     npm start
     ```
5. **Alternativă: Docker Compose**:
   - Pentru provocări non-Dockerizate, rulează:
     ```bash
     docker-compose up
     ```

### Sfaturi pentru Dezvoltare
- Folosește `npm run start-react` în `/frontend/` pentru o experiență de dezvoltare mai fluidă.
- Pentru provocări Dockerizate, ia în considerare utilizarea PM2 în loc de Docker Compose.

## Cine Poate Folosi ATM{CTF}?

- **Studenți**: Perfect pentru evenimente CTF universitare, cluburi de securitate cibernetică sau învățare în clasă.
- **Pasionați**: Ideal pentru oricine este curios despre securitatea cibernetică, de la hobbyști la profesioniști.
- **Organizatori**: Găzduiește propriile evenimente CTF cu control total asupra provocărilor, punctajului și brandingului.

## Alătură-te Comunității ATM{CTF}

Ești pregătit să spargi coduri, să înveți și să concurezi? Intră în ATM{CTF} și experimentează securitatea cibernetică într-un mod unic. Fie că ești student la universitatea mea sau un pasionat de securitate cibernetică din întreaga lume, ATM{CTF} este terenul tău de joacă pentru a stăpâni arta hackingului.

📢 **Implică-te**:
- Contribuie la platformă pe [GitHub](https://github.com/RusuCalinPetru/ATM-CTF--Platform.git).
- Împărtășește feedback-ul sau ideile tale cu mine.
- Găzduiește propriul CTF și inspiră-i pe alții să se alăture provocării!

Hai să spargem coduri și să capturăm steaguri împreună! 🚩

---

*Creat cu ❤️ pentru comunitatea de securitate cibernetică de jim.*
