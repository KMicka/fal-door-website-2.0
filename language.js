/* FAL DOORS multilingual text layer: Albanian, English, Italian. */
(() => {
  const storageKey = "fal-language";
  const fallback = "sq";
  const languages = ["sq", "en", "it"];

  const phraseMap = {
    "KRYEFAQJA": { en: "HOME", it: "HOME" },
    "RRETH NESH": { en: "ABOUT US", it: "CHI SIAMO" },
    "PRODUKTET": { en: "PRODUCTS", it: "PRODOTTI" },
    "PROJEKTET": { en: "PROJECTS", it: "PROGETTI" },
    "GALERIA": { en: "GALLERY", it: "GALLERIA" },
    "KRIJO HYRJEN": { en: "CREATE ENTRANCE", it: "CREA L'INGRESSO" },
    "KONTAKT": { en: "CONTACT", it: "CONTATTI" },
    "Kërkesë ofertë": { en: "Request a quote", it: "Richiedi un preventivo" },
    "Kërko ofertë": { en: "Request a quote", it: "Richiedi un preventivo" },
    "KOMPANIA": { en: "COMPANY", it: "AZIENDA" },
    "NA NDIQNI": { en: "FOLLOW US", it: "SEGUICI" },
    "Kthehu në krye": { en: "Back to top", it: "Torna in alto" },
    "Hap menunë": { en: "Open menu", it: "Apri menu" },
    "Mbyll menunë": { en: "Close menu", it: "Chiudi menu" },
    "Navigimi kryesor": { en: "Main navigation", it: "Navigazione principale" },
    "Zgjedhja e gjuhës": { en: "Language selector", it: "Selettore lingua" },
    "Linqe të shpejta sociale": { en: "Quick social links", it: "Link social rapidi" },

    "FAL DOORS - Dyer me porosi": { en: "FAL DOORS - Custom doors", it: "FAL DOORS - Porte su misura" },
    "Rreth FAL DOORS": { en: "About FAL DOORS", it: "Chi siamo - FAL DOORS" },
    "Produktet - FAL DOORS": { en: "Products - FAL DOORS", it: "Prodotti - FAL DOORS" },
    "Projektet - FAL DOORS": { en: "Projects - FAL DOORS", it: "Progetti - FAL DOORS" },
    "Galeria - FAL DOORS": { en: "Gallery - FAL DOORS", it: "Galleria - FAL DOORS" },
    "Krijo hyrjen - FAL DOORS": { en: "Create entrance - FAL DOORS", it: "Crea l'ingresso - FAL DOORS" },
    "Kontakt - FAL DOORS": { en: "Contact - FAL DOORS", it: "Contatti - FAL DOORS" },
    "Kërkesë ofertë - FAL DOORS": { en: "Request a quote - FAL DOORS", it: "Richiesta preventivo - FAL DOORS" },
    "Faleminderit - FAL DOORS": { en: "Thank you - FAL DOORS", it: "Grazie - FAL DOORS" },

    "HYRJE ME IDENTITET": { en: "ENTRANCES WITH IDENTITY", it: "INGRESSI CON IDENTITA" },
    "Kalo": { en: "Skip", it: "Salta" },
    "Zëri": { en: "Sound", it: "Audio" },
    "Film prezantues": { en: "Presentation film", it: "Video di presentazione" },
    "FAL DOORS / HYRJE ME POROSI": { en: "FAL DOORS / CUSTOM ENTRANCES", it: "FAL DOORS / INGRESSI SU MISURA" },
    "Dyer që i japin": { en: "Doors that give", it: "Porte che danno" },
    "identitet": { en: "identity", it: "identita" },
    "hapësirës.": { en: "to the space.", it: "allo spazio." },
    "Projektim, prodhim dhe montim i dyerve të krijuara për arkitekturën tuaj.": {
      en: "Design, production and installation of doors created for your architecture.",
      it: "Progettazione, produzione e installazione di porte create per la tua architettura."
    },
    "Shiko produktet": { en: "View products", it: "Vedi prodotti" },
    "Krijo hyrjen": { en: "Create entrance", it: "Crea l'ingresso" },
    "Përvojë": { en: "Experience", it: "Esperienza" },
    "Me porosi": { en: "Custom made", it: "Su misura" },
    "Nga ideja të montimi": { en: "From idea to installation", it: "Dall'idea al montaggio" },
    "Siguri maksimale": { en: "Maximum security", it: "Massima sicurezza" },
    "Sisteme të avancuara për qetësi dhe mbrojtje.": { en: "Advanced systems for comfort and protection.", it: "Sistemi avanzati per tranquillita e protezione." },
    "Dizajn me porosi": { en: "Custom design", it: "Design su misura" },
    "I përshtatur me stilin dhe projektin tend.": { en: "Tailored to your style and project.", it: "Adattato al tuo stile e al tuo progetto." },
    "Materiale premium": { en: "Premium materials", it: "Materiali premium" },
    "Rezistencë": { en: "Resistance", it: "Resistenza" },
    "Pse FAL DOORS": { en: "Why FAL DOORS", it: "Perche FAL DOORS" },
    "Avantazhe": { en: "Advantages", it: "Vantaggi" },
    "që ndihen": { en: "you can feel", it: "che si sentono" },
    "Materiale të zgjedhura": { en: "Selected materials", it: "Materiali selezionati" },
    "Përshtatje me hapësirën": { en: "Adapted to the space", it: "Adattamento allo spazio" },
    "Kontroll në çdo fazë": { en: "Control at every stage", it: "Controllo in ogni fase" },
    "Siguri dhe jetëgjatësi": { en: "Security and durability", it: "Sicurezza e durata" },
    "Këshillim i qartë": { en: "Clear consultation", it: "Consulenza chiara" },
    "Flisni me ekipin": { en: "Talk to the team", it: "Parla con il team" },
    "Kërko Konsultim Falas": { en: "Request a free consultation", it: "Richiedi una consulenza gratuita" },
    "Kërko Konsultim": { en: "Request consultation", it: "Richiedi consulenza" },
    "Na kontaktoni sot": { en: "Contact us today", it: "Contattaci oggi" },
    "Projektet e realizuara": { en: "Completed projects", it: "Progetti realizzati" },
    "Hapësira me": { en: "Spaces with", it: "Spazi con" },
    "Eksploro projektet": { en: "Explore projects", it: "Esplora i progetti" },
    "Arkitekturë që fillon të hyrja.": { en: "Architecture that starts at the entrance.", it: "Architettura che inizia dall'ingresso." },
    "Projekt i realizuar": { en: "Completed project", it: "Progetto realizzato" },
    "Vendndodhja": { en: "Location", it: "Posizione" },
    "Tipologjia": { en: "Typology", it: "Tipologia" },
    "Realizimi": { en: "Delivery", it: "Realizzazione" },
    "Shiko projektin": { en: "View project", it: "Vedi progetto" },
    "Projekti tjetër": { en: "Next project", it: "Progetto successivo" },
    "Ndërto derën tënde": { en: "Build your door", it: "Crea la tua porta" },
    "Krijo hyrjen që i shkon ambientit.": { en: "Create an entrance that suits the space.", it: "Crea un ingresso adatto all'ambiente." },
    "Zgjidh stilin, finiturat dhe detajet që i përshtaten projektit.": { en: "Choose the style, finishes and details that fit the project.", it: "Scegli stile, finiture e dettagli adatti al progetto." },
    "Fillo Kërkesën": { en: "Start request", it: "Inizia richiesta" },
    "Procesi": { en: "Process", it: "Processo" },
    "Konsultim": { en: "Consultation", it: "Consulenza" },
    "Prodhim": { en: "Production", it: "Produzione" },
    "Finiturë": { en: "Finish", it: "Finitura" },
    "Montim": { en: "Installation", it: "Montaggio" },
    "Klientë": { en: "Clients", it: "Clienti" },
    "Punonjës": { en: "Employees", it: "Dipendenti" },
    "Modele dyersh": { en: "Door models", it: "Modelli di porte" },
    "Gati për një hyrje me karakter?": { en: "Ready for an entrance with character?", it: "Pronto per un ingresso con carattere?" },

    "Historia jonë": { en: "Our story", it: "La nostra storia" },
    "Rreth Nesh": { en: "About us", it: "Chi siamo" },
    "Kryefaqja": { en: "Home", it: "Home" },
    "Hyrja si identitet.": { en: "The entrance as identity.", it: "L'ingresso come identita." },
    "Dizajn me qëllim": { en: "Purposeful design", it: "Design con uno scopo" },
    "Prodhim me kontroll": { en: "Controlled production", it: "Produzione controllata" },
    "Montim me precision": { en: "Precise installation", it: "Montaggio preciso" },
    "Partnerët tanë": { en: "Our partners", it: "I nostri partner" },
    "Matje të sakta": { en: "Accurate measurements", it: "Misure precise" },
    "Punë me porosi": { en: "Custom work", it: "Lavoro su misura" },
    "Nga ideja të hyrja.": { en: "From the idea to the entrance.", it: "Dall'idea all'ingresso." },
    "Matje & konsultim": { en: "Measurement & consultation", it: "Misure e consulenza" },
    "Projektim": { en: "Design", it: "Progettazione" },
    "Montim & suport": { en: "Installation & support", it: "Montaggio e supporto" },
    "Shiko punën tonë": { en: "View our work", it: "Guarda il nostro lavoro" },

    "Produktet": { en: "Products", it: "Prodotti" },
    "Modele dhe finitura": { en: "Models and finishes", it: "Modelli e finiture" },
    "Të gjitha": { en: "All", it: "Tutti" },
    "Hyrje": { en: "Entrance", it: "Ingresso" },
    "Brendshme": { en: "Interior", it: "Interne" },
    "Sigurie": { en: "Security", it: "Sicurezza" },
    "Hyrje moderne": { en: "Modern entrance", it: "Ingresso moderno" },
    "Hyrje dopio": { en: "Double entrance", it: "Ingresso doppio" },
    "Hyrje klasike": { en: "Classic entrance", it: "Ingresso classico" },
    "Materiale & finitura": { en: "Materials & finishes", it: "Materiali e finiture" },
    "Matje dhe konsultim": { en: "Measurement and consultation", it: "Misure e consulenza" },
    "Zgjedhje materiali": { en: "Material selection", it: "Scelta dei materiali" },
    "Prodhim me porosi": { en: "Custom production", it: "Produzione su misura" },
    "Montim dhe suport": { en: "Installation and support", it: "Montaggio e supporto" },
    "Nuk e gjeni modelin tuaj?": { en: "Can't find your model?", it: "Non trovi il tuo modello?" },
    "Le ta projektojmë bashkë.": { en: "Let's design it together.", it: "Progettiamolo insieme." },

    "Puna jonë": { en: "Our work", it: "Il nostro lavoro" },
    "Projektet tona.": { en: "Our projects.", it: "I nostri progetti." },
    "Gjurmë që mbeten.": { en: "A lasting mark.", it: "Un segno che resta." },
    "Shiko projektet": { en: "View projects", it: "Vedi progetti" },
    "Diskuto projektin tënd": { en: "Discuss your project", it: "Parla del tuo progetto" },
    "Jo vetëm një katalog": { en: "Not just a catalogue", it: "Non solo un catalogo" },
    "Çdo projekt nis nga një hapësirë ndryshe.": { en: "Every project starts from a different space.", it: "Ogni progetto nasce da uno spazio diverso." },
    "Diskuto projektin": { en: "Discuss the project", it: "Parla del progetto" },

    "Galeria FAL": { en: "FAL Gallery", it: "Galleria FAL" },
    "Galeria FAL.": { en: "FAL Gallery.", it: "Galleria FAL." },
    "Modele, projekte dhe proces.": { en: "Models, projects and process.", it: "Modelli, progetti e processo." },
    "foto në arkiv": { en: "photos in archive", it: "foto in archivio" },
    "aktive tani": { en: "active now", it: "attive ora" },
    "Përmbledhje galerie": { en: "Gallery summary", it: "Riepilogo galleria" },
    "Arkivi vizual": { en: "Visual archive", it: "Archivio visivo" },
    "Mbyll galerinë": { en: "Close gallery", it: "Chiudi galleria" },
    "Navigimi i galerisë": { en: "Gallery navigation", it: "Navigazione galleria" },
    "I mëparshmi": { en: "Previous", it: "Precedente" },
    "Tjetri": { en: "Next", it: "Successivo" },
    "Filtro galerinë": { en: "Filter gallery", it: "Filtra galleria" },
    "Të gjitha": { en: "All", it: "Tutti" },
    "Komercial": { en: "Commercial", it: "Commerciale" },
    "Xham": { en: "Glass", it: "Vetro" },
    "Garazh": { en: "Garage", it: "Garage" },

    "Kontakt": { en: "Contact", it: "Contatti" },
    "Na shkruani për pyetje, takim ose asistencë.": { en: "Write to us for questions, appointments or support.", it: "Scrivici per domande, appuntamenti o assistenza." },
    "Adresa": { en: "Address", it: "Indirizzo" },
    "Telefon": { en: "Phone", it: "Telefono" },
    "Orari": { en: "Hours", it: "Orario" },
    "E hënë - E premte: 08:00 - 17:00": { en: "Monday - Friday: 08:00 - 17:00", it: "Lunedi - Venerdi: 08:00 - 17:00" },
    "E shtunë: 09:00 - 13:00": { en: "Saturday: 09:00 - 13:00", it: "Sabato: 09:00 - 13:00" },
    "Rezervo vizitën": { en: "Book a visit", it: "Prenota una visita" },
    "Dërgo një": { en: "Send a", it: "Invia un" },
    "mesazh.": { en: "message.", it: "messaggio." },
    "Subjekti": { en: "Subject", it: "Oggetto" },
    "Informacion i përgjithshëm": { en: "General information", it: "Informazioni generali" },
    "Takim në showroom": { en: "Showroom appointment", it: "Appuntamento in showroom" },
    "Pyetje për produkte": { en: "Product question", it: "Domanda sui prodotti" },
    "Asistencë pas shitjes": { en: "After-sales support", it: "Assistenza post-vendita" },
    "Dërgo Mesazh": { en: "Send message", it: "Invia messaggio" },
    "Hap në Google Maps": { en: "Open in Google Maps", it: "Apri in Google Maps" },

    "Krijo hyrjen tënde": { en: "Create your entrance", it: "Crea il tuo ingresso" },
    "Zgjidh stilin, finiturat dhe detajet.": { en: "Choose the style, finishes and details.", it: "Scegli stile, finiture e dettagli." },
    "Vazhdo të oferta": { en: "Continue to quote", it: "Vai al preventivo" },
    "Pamje paraprake": { en: "Preview", it: "Anteprima" },
    "Modeli": { en: "Model", it: "Modello" },
    "E brendshme": { en: "Interior", it: "Interna" },
    "Me xham": { en: "With glass", it: "Con vetro" },
    "Finitura": { en: "Finish", it: "Finitura" },
    "Doreza": { en: "Handle", it: "Maniglia" },
    "Matjet": { en: "Measurements", it: "Misure" },
    "Plotëso kërkesën": { en: "Complete request", it: "Completa la richiesta" },
    "Frymëzim": { en: "Inspiration", it: "Ispirazione" },
    "Gati për hapin tjetër?": { en: "Ready for the next step?", it: "Pronto per il prossimo passo?" },

    "Ofertë": { en: "Quote", it: "Preventivo" },
    "Na dërgoni detajet e projektit.": { en: "Send us the project details.", it: "Inviaci i dettagli del progetto." },
    "Emri i plotë": { en: "Full name", it: "Nome completo" },
    "Telefoni": { en: "Phone", it: "Telefono" },
    "Lloji i derës": { en: "Door type", it: "Tipo di porta" },
    "Zgjidhni": { en: "Choose", it: "Scegli" },
    "Derë e brendshme": { en: "Interior door", it: "Porta interna" },
    "Derë e jashtme": { en: "Exterior door", it: "Porta esterna" },
    "Projekt me porosi": { en: "Custom project", it: "Progetto su misura" },
    "Set për objekt": { en: "Set for building", it: "Set per edificio" },
    "Dimensionet": { en: "Dimensions", it: "Dimensioni" },
    "Sasia": { en: "Quantity", it: "Quantita" },
    "Finitura e preferuar": { en: "Preferred finish", it: "Finitura preferita" },
    "Nuk jam i sigurt": { en: "Not sure", it: "Non sono sicuro" },
    "Dru i errët": { en: "Dark wood", it: "Legno scuro" },
    "Dru i hapur": { en: "Light wood", it: "Legno chiaro" },
    "E zezë / antracit": { en: "Black / anthracite", it: "Nero / antracite" },
    "E bardhë / neutrale": { en: "White / neutral", it: "Bianco / neutro" },
    "Mesazhi": { en: "Message", it: "Messaggio" },
    "Ngarko plan, matje ose foto": { en: "Upload plan, measurements or photo", it: "Carica planimetria, misure o foto" },
    "Dërgo Kërkesën": { en: "Send request", it: "Invia richiesta" },
    "Para se ta dërgoni": { en: "Before sending", it: "Prima di inviare" },
    "Matjet": { en: "Measurements", it: "Misure" },
    "Foto": { en: "Photo", it: "Foto" },
    "Afati": { en: "Timeline", it: "Tempistiche" },

    "Faleminderit": { en: "Thank you", it: "Grazie" },
    "Kërkesa u dërgua": { en: "Request sent", it: "Richiesta inviata" },
    "Mesazhi juaj u regjistrua. Ekipi i FAL DOORS do t'ju kontaktojë sa më shpejt për hapat e ardhshëm.": {
      en: "Your message was registered. The FAL DOORS team will contact you shortly for the next steps.",
      it: "Il tuo messaggio e stato registrato. Il team FAL DOORS ti contattera a breve per i prossimi passi."
    },
    "Kërkesa juaj për ofertë u regjistrua. Ekipi i FAL DOORS do t'ju kontaktojë për detajet, matjet dhe opsionet e projektit.": {
      en: "Your quote request was registered. The FAL DOORS team will contact you about the details, measurements and project options.",
      it: "La tua richiesta di preventivo e stata registrata. Il team FAL DOORS ti contattera per dettagli, misure e opzioni del progetto."
    },
    "Referenca": { en: "Reference", it: "Riferimento" },
    "Rikthim automatik në kryefaqe pas": { en: "Automatic return to the homepage in", it: "Ritorno automatico alla home tra" },
    "Kthehu tani": { en: "Return now", it: "Torna ora" },
    "Dyer me porosi, detaje të ngrohta druri dhe zgjidhje elegante për çdo hapësirë.": {
      en: "Custom doors, warm wood details and elegant solutions for every space.",
      it: "Porte su misura, dettagli caldi in legno e soluzioni eleganti per ogni spazio."
    },
    "Historia Jonë": { en: "Our Story", it: "La nostra storia" },
    "Dyer të brendshme": { en: "Interior doors", it: "Porte interne" },
    "Dyer hyrjeje": { en: "Entrance doors", it: "Porte d'ingresso" },
    "Projektet": { en: "Projects", it: "Progetti" },
    "Frymëzime": { en: "Inspiration", it: "Ispirazioni" },
    "Katalogu": { en: "Catalogue", it: "Catalogo" },
    "© 2026 FAL DOORS. Të gjitha të drejtat e rezervuara.": {
      en: "© 2026 FAL DOORS. All rights reserved.",
      it: "© 2026 FAL DOORS. Tutti i diritti riservati."
    }
  };

  Object.assign(phraseMap, {
    "Projektim, prodhim dhe montim i dyerve të krijuara për arkitekturën tuaj.": {
      en: "Design, production and installation of doors created for your architecture.",
      it: "Progettazione, produzione e installazione di porte create per la tua architettura."
    },
    "Zgjidhje të forta dhe të qëndrueshme.": {
      en: "Strong, durable solutions.",
      it: "Soluzioni solide e durevoli."
    },
    "E menduar për përdorim të përditshëm dhe kushte të ndryshme.": {
      en: "Designed for daily use and different conditions.",
      it: "Pensata per l'uso quotidiano e per condizioni diverse."
    },
    "Hap dyert drejt cilësisë dhe elegancës": {
      en: "Open the doors to quality and elegance",
      it: "Apri le porte alla qualità e all'eleganza"
    },
    "Një hyrje nuk është vetëm kalim. Është kontakti i parë me hapësirën.": {
      en: "An entrance is not just a passage. It is the first contact with the space.",
      it: "Un ingresso non è solo un passaggio. È il primo contatto con lo spazio."
    },
    "Çdo shtëpi ka një karakter. Ne e përkthejmë atë në ngjyrë, formë, material dhe detaje që përshtaten me arkitekturën tuaj.": {
      en: "Every home has its own character. We translate it into color, form, material and details that suit your architecture.",
      it: "Ogni casa ha il proprio carattere. Lo traduciamo in colore, forma, materiale e dettagli adatti alla tua architettura."
    },
    "Me një ekip të specializuar në dizajn dhe prodhim, ju ndihmojmë të kombinoni modelin, finiturat dhe aksesorët në një hyrje unike.": {
      en: "With a team specialized in design and production, we help you combine the model, finishes and accessories into a unique entrance.",
      it: "Con un team specializzato in design e produzione, ti aiutiamo a combinare modello, finiture e accessori in un ingresso unico."
    },
    "Krijo stilin tënd": {
      en: "Create your style",
      it: "Crea il tuo stile"
    },
    "Para procesit të plotë, këto janë arsyet pse dyert tona mbajnë të njëjtin standard nga projekti i parë deri te montimi final.": {
      en: "Before the full process, these are the reasons our doors keep the same standard from the first design to final installation.",
      it: "Prima del processo completo, questi sono i motivi per cui le nostre porte mantengono lo stesso standard dal primo progetto al montaggio finale."
    },
    "Finitura, profile dhe struktura të përzgjedhura për përdorim të gjatë, siguri dhe pamje të qëndrueshme.": {
      en: "Finishes, profiles and structures selected for long use, security and lasting appearance.",
      it: "Finiture, profili e strutture selezionati per uso duraturo, sicurezza e aspetto stabile nel tempo."
    },
    "Çdo derë lidhet me dimensionet, stilin dhe ritmin e ambientit, jo thjesht me një model standard katalogu.": {
      en: "Every door is tied to the dimensions, style and rhythm of the space, not just to a standard catalogue model.",
      it: "Ogni porta è legata alle dimensioni, allo stile e al ritmo dell'ambiente, non solo a un modello standard da catalogo."
    },
    "Nga matjet dhe prodhimi deri te dorëzimi, procesi mbahet i qartë, i matur dhe i kontrolluar nga i njëjti ekip.": {
      en: "From measurement and production to delivery, the process stays clear, measured and controlled by the same team.",
      it: "Dalle misure e dalla produzione alla consegna, il processo resta chiaro, misurato e controllato dallo stesso team."
    },
    "Shiko procesin": {
      en: "View the process",
      it: "Vedi il processo"
    },
    "Zgjidhje të ndërtuara për përdorim të përditshëm, kushte të ndryshme dhe performancë të qëndrueshme në kohë.": {
      en: "Solutions built for daily use, different conditions and performance that lasts over time.",
      it: "Soluzioni realizzate per l'uso quotidiano, condizioni diverse e prestazioni durevoli nel tempo."
    },
    "Një hyrje që duket bukur, mbyllet saktë dhe zgjat.": {
      en: "An entrance that looks beautiful, closes precisely and lasts.",
      it: "Un ingresso bello da vedere, preciso nella chiusura e fatto per durare."
    },
    "Ju ndihmojmë të zgjidhni modelin, finiturën dhe detajet pa e komplikuar projektin me zgjedhje të panevojshme.": {
      en: "We help you choose the model, finish and details without complicating the project with unnecessary options.",
      it: "Ti aiutiamo a scegliere modello, finitura e dettagli senza complicare il progetto con opzioni inutili."
    },
    "Përzgjedhje e kujdesshme për çdo projekt": {
      en: "Careful selection for every project",
      it: "Selezione accurata per ogni progetto"
    },
    "Siguri dhe besim afatgjatë": {
      en: "Long-term security and trust",
      it: "Sicurezza e fiducia nel tempo"
    },
    "Siguri dhe besim afatgjatë.": {
      en: "Long-term security and trust.",
      it: "Sicurezza e fiducia nel tempo."
    },
    "Ekipi ynë i specializuar i dizajnit krijon vepra unike, duke përdorur teknologji moderne dhe zgjidhje elegante të përshtatura sipas stilit dhe nevojës tuaj.": {
      en: "Our specialized design team creates unique work using modern technology and elegant solutions tailored to your style and needs.",
      it: "Il nostro team di design specializzato crea opere uniche usando tecnologia moderna e soluzioni eleganti su misura per il tuo stile e le tue esigenze."
    },
    "Ekspertë të përkushtuar për çdo projekt.": {
      en: "Dedicated experts for every project.",
      it: "Esperti dedicati per ogni progetto."
    },
    "Zgjidh stilin, finiturat dhe detajet që i përshtaten projektit.": {
      en: "Choose the style, finishes and details that fit the project.",
      it: "Scegli stile, finiture e dettagli adatti al progetto."
    },
    "Hyrje që lënë": {
      en: "Entrances that leave",
      it: "Ingressi che lasciano"
    },
    "Një bashkëpunim i saktë, profesional dhe i qartë. Dera u integrua bukur me arkitekturën dhe cilësia duket në përdorim.": {
      en: "A precise, professional and clear collaboration. The door integrated beautifully with the architecture and the quality shows in use.",
      it: "Una collaborazione precisa, professionale e chiara. La porta si è integrata bene con l'architettura e la qualità si vede nell'uso."
    },
    "Dyer me porosi, detaje të ngrohta druri dhe zgjidhje elegante për çdo hapësirë.": {
      en: "Custom doors, warm wood details and elegant solutions for every space.",
      it: "Porte su misura, dettagli caldi in legno e soluzioni eleganti per ogni spazio."
    },
    "“Fal Doors është një kompani e specializuar në prodhimin dhe shitjen e dyerve me një fokus të qartë në cilësinë, dizajnin dhe shërbimin ndaj klientëve. Çfarë na dallon është pasioni ynë për inovacionin dhe përdorimin e teknologjisë së fundit në prodhimin e dyerve.": {
      en: "“Fal Doors is a company specialized in the production and sale of doors, with a clear focus on quality, design and customer service. What sets us apart is our passion for innovation and the use of the latest technology in door production.",
      it: "“Fal Doors è un'azienda specializzata nella produzione e vendita di porte, con una chiara attenzione a qualità, design e servizio al cliente. Ci distingue la passione per l'innovazione e l'uso delle tecnologie più recenti nella produzione di porte."
    },
    "Ne ofrojmë një gamë të gjerë të dyerve të personalizuara për shtëpinë tuaj ose projektin tuaj të ndërtimit, duke përdorur materialet më të mira dhe metodat më të avancuara.": {
      en: "We offer a wide range of customized doors for your home or construction project, using the best materials and the most advanced methods.",
      it: "Offriamo un'ampia gamma di porte personalizzate per la tua casa o il tuo progetto edilizio, usando i migliori materiali e i metodi più avanzati."
    },
    "Ekipi ynë i përkushtuar punon vazhdimisht për të siguruar që secili produkt të jetë i përshtatur me kujdes për të përmbushur nevojat dhe pritjet e klientëve tanë. Ne kemi ndërtuar marrëdhënien me klientin mbi besimin dhe përkushtimin ndaj shërbimit të shkëlqyeshëm.”": {
      en: "Our dedicated team works continuously to ensure that every product is carefully tailored to meet our clients' needs and expectations. We have built our client relationships on trust and commitment to excellent service.”",
      it: "Il nostro team dedicato lavora costantemente per garantire che ogni prodotto sia adattato con cura alle esigenze e aspettative dei clienti. Abbiamo costruito il rapporto con il cliente su fiducia e impegno verso un servizio eccellente.”"
    },
    "Nga pajisjet industriale, te prodhimi i dyerve dhe ekonomia qarkulluese—grupi bashkon ekspertizë, infrastrukturë dhe vizion për të krijuar zgjidhje që zgjasin.": {
      en: "From industrial equipment to door production and the circular economy, the group brings together expertise, infrastructure and vision to create solutions that last.",
      it: "Dalle attrezzature industriali alla produzione di porte e all'economia circolare, il gruppo unisce competenza, infrastruttura e visione per creare soluzioni durature."
    },
    "Pajisje, arredim industrial dhe zgjidhje teknike për ambiente profesionale.": {
      en: "Equipment, industrial furnishing and technical solutions for professional spaces.",
      it: "Attrezzature, arredo industriale e soluzioni tecniche per ambienti professionali."
    },
    "Dyer me porosi ku arkitektura, siguria dhe mjeshtëria takohen në një hyrje të vetme.": {
      en: "Custom doors where architecture, security and craftsmanship meet in one entrance.",
      it: "Porte su misura dove architettura, sicurezza e artigianalità si incontrano in un unico ingresso."
    },
    "Menaxhim materialesh dhe rikthim në vlerë me një qasje më të përgjegjshme ndaj burimeve.": {
      en: "Material management and value recovery with a more responsible approach to resources.",
      it: "Gestione dei materiali e recupero di valore con un approccio più responsabile alle risorse."
    },
    "Prodhim dhe ekspertizë lokale": {
      en: "Local production and expertise",
      it: "Produzione ed esperienza locale"
    },
    "Një rrjet që lëviz me të njëjtin standard.": {
      en: "A network moving with the same standard.",
      it: "Una rete che si muove con lo stesso standard."
    },
    "Çdo projekt fillon me dimensione të qarta dhe kuptim të hapësirës.": {
      en: "Every project starts with clear dimensions and an understanding of the space.",
      it: "Ogni progetto inizia con dimensioni chiare e comprensione dello spazio."
    },
    "Finitura druri, profile moderne dhe detaje që rezistojnë në përdorim.": {
      en: "Wood finishes, modern profiles and details that stand up to use.",
      it: "Finiture in legno, profili moderni e dettagli resistenti nell'uso."
    },
    "Zgjidhje për banesa, vila, zyra dhe ambiente komerciale.": {
      en: "Solutions for homes, villas, offices and commercial spaces.",
      it: "Soluzioni per abitazioni, ville, uffici e ambienti commerciali."
    },
    "Projekti, materiali, prodhimi dhe montimi trajtohen si një proces i vetëm. Kështu ruajmë kontrollin mbi çdo detaj.": {
      en: "The design, material, production and installation are treated as one process. This is how we keep control over every detail.",
      it: "Progetto, materiale, produzione e montaggio sono trattati come un unico processo. Così manteniamo il controllo su ogni dettaglio."
    },
    "Dimensione, funksion, stil dhe kërkesat e përdorimit.": {
      en: "Dimensions, function, style and usage requirements.",
      it: "Dimensioni, funzione, stile ed esigenze d'uso."
    },
    "Modeli, finitura, doreza, profili dhe detajet e sigurisë.": {
      en: "Model, finish, handle, profile and security details.",
      it: "Modello, finitura, maniglia, profilo e dettagli di sicurezza."
    },
    "Punë e kontrolluar në punishte dhe përfundim i pastër.": {
      en: "Controlled workshop work and a clean finish.",
      it: "Lavoro controllato in officina e finitura pulita."
    },
    "Dorëzim, rregullim dhe kujdes pas instalimit.": {
      en: "Delivery, adjustment and care after installation.",
      it: "Consegna, regolazione e assistenza dopo l'installazione."
    },
    "Dyer të punuara për çdo hapësirë.": {
      en: "Doors crafted for every space.",
      it: "Porte realizzate per ogni spazio."
    },
    "Nga hyrjet kryesore tek ambientet e brendshme, çdo model bashkon siguri, finiturë dhe përmasa të personalizuara për projektin tuaj.": {
      en: "From main entrances to interior spaces, every model combines security, finish and customized dimensions for your project.",
      it: "Dagli ingressi principali agli ambienti interni, ogni modello unisce sicurezza, finitura e dimensioni personalizzate per il tuo progetto."
    },
    "Kërko ofertë": {
      en: "Request a quote",
      it: "Richiedi un preventivo"
    },
    "Hyrje · Brendshme · Sigurie · Me porosi": {
      en: "Entrance · Interior · Security · Custom",
      it: "Ingresso · Interne · Sicurezza · Su misura"
    },
    "Profil i pastër, finiturë druri dhe siguri e lartë për hyrjen kryesore.": {
      en: "Clean profile, wood finish and high security for the main entrance.",
      it: "Profilo pulito, finitura in legno e alta sicurezza per l'ingresso principale."
    },
    "Dy kanate me finiturë tradicionale — elegancë dhe hapje bujare.": {
      en: "Two leaves with traditional finish: elegance and generous opening.",
      it: "Due ante con finitura tradizionale: eleganza e apertura ampia."
    },
    "Linja të qeta dhe finiturë neutrale për çdo arkitekturë.": {
      en: "Calm lines and a neutral finish for any architecture.",
      it: "Linee sobrie e finitura neutra per ogni architettura."
    },
    "Hyrje arrar": { en: "Walnut entrance", it: "Ingresso noce" },
    "Brendshme e bardhë": { en: "White interior", it: "Interna bianca" },
    "Brendshme dru i hapur": { en: "Light wood interior", it: "Interna in legno chiaro" },
    "Brendshme gri": { en: "Grey interior", it: "Interna grigia" },
    "Gamë brendshme": { en: "Interior range", it: "Gamma interna" },
    "Sigurie pivot": { en: "Pivot security", it: "Sicurezza pivot" },
    "Sigurie arrar / antracit": { en: "Walnut / anthracite security", it: "Sicurezza noce / antracite" },
    "Sigurie neutrale": { en: "Neutral security", it: "Sicurezza neutra" },
    "Dimensione, ngjyra, doreza dhe profile sipas arkitekturës dhe kërkesës tuaj.": {
      en: "Dimensions, colors, handles and profiles according to your architecture and request.",
      it: "Dimensioni, colori, maniglie e profili secondo la tua architettura e richiesta."
    },
    "Prekje, tone dhe kombinime që ndryshojnë ambientin.": {
      en: "Textures, tones and combinations that transform the space.",
      it: "Texture, tonalità e combinazioni che trasformano l'ambiente."
    },
    "Përzgjedhja e derës nuk mbaron te modeli. Sipërfaqja, profili dhe doreza i japin projektit identitetin final.": {
      en: "Choosing the door does not end with the model. The surface, profile and handle give the project its final identity.",
      it: "La scelta della porta non finisce con il modello. Superficie, profilo e maniglia danno al progetto la sua identità finale."
    },
    "Nga komplekset rezidenciale tek ambientet komerciale, çdo projekt lidhet me një standard të qartë: dizajn i menduar, prodhim i kontrolluar dhe montim që respekton arkitekturën.": {
      en: "From residential complexes to commercial spaces, every project is tied to a clear standard: thoughtful design, controlled production and installation that respects the architecture.",
      it: "Dai complessi residenziali agli ambienti commerciali, ogni progetto segue uno standard chiaro: design studiato, produzione controllata e montaggio rispettoso dell'architettura."
    },
    "Kjo faqe është për klientin që do të krijojë derën sipas shijes së vet. Zgjidh profilin, ngjyrën, dorezën dhe detajet kryesore para se të kërkosh ofertë.": {
      en: "This page is for clients who want to create a door according to their own taste. Choose the profile, color, handle and main details before requesting a quote.",
      it: "Questa pagina è per chi vuole creare una porta secondo il proprio gusto. Scegli profilo, colore, maniglia e dettagli principali prima di richiedere un preventivo."
    },
    "Kjo faqe shërben për mesazhe të përgjithshme. Për konfigurim derë dhe kërkesë çmimi, përdorni faqen Krijo hyrjen ose Kërkesë ofertë.": {
      en: "This page is for general messages. For door configuration and price requests, use the Create Entrance page or Request a Quote.",
      it: "Questa pagina serve per messaggi generali. Per configurare una porta e richiedere un prezzo, usa la pagina Crea l'ingresso o Richiedi un preventivo."
    },
    "Plotësoni informacionin kryesor për derën, hapësirën dhe materialin. Ekipi mund të përgatisë një përgjigje më të saktë kur dimensionet dhe preferencat janë të qarta.": {
      en: "Complete the key information about the door, space and material. The team can prepare a more accurate response when dimensions and preferences are clear.",
      it: "Compila le informazioni principali su porta, spazio e materiale. Il team può preparare una risposta più precisa quando dimensioni e preferenze sono chiare."
    }
  });

  Object.assign(phraseMap, {
    "I përshtatur me stilin dhe projektin tënd.": { en: "Tailored to your style and project.", it: "Adattato al tuo stile e al tuo progetto." },
    "Zgjidhje të forta dhe të qëndrueshme.": { en: "Strong, durable solutions.", it: "Soluzioni solide e durevoli." },
    "Ndërtime me vizion për një të ardhme më të mirë": { en: "Developments with vision for a better future", it: "Costruzioni con visione per un futuro migliore" },
    "Hyrje që lënë": { en: "Entrances that leave", it: "Ingressi che lasciano" },
    "Ngjyrë e ngrohtë druri me dorezë vertikale dhe detaje metalike.": { en: "Warm wood tone with vertical handle and metal details.", it: "Tonalità calda del legno con maniglia verticale e dettagli metallici." },
    "Linja minimaliste — perfekte për ambiente të ndritshme dhe moderne.": { en: "Minimalist lines, perfect for bright and modern spaces.", it: "Linee minimaliste, perfette per ambienti luminosi e moderni." },
    "Ngjyrë natyrale druri, e lehtë dhe e ngrohtë për ambiente rezidenciale.": { en: "Natural wood color, light and warm for residential spaces.", it: "Colore naturale del legno, leggero e caldo per ambienti residenziali." },
    "Koleksion i plotë me variante finiturë dhe dimensionesh standarde ose me porosi.": { en: "Complete collection with finish variants and standard or custom dimensions.", it: "Collezione completa con varianti di finitura e dimensioni standard o su misura." },
    "Sistem pivot me strukturë çeliku dhe finiturë druri — hyrje me karakter maksimal.": { en: "Pivot system with steel structure and wood finish: an entrance with maximum character.", it: "Sistema pivot con struttura in acciaio e finitura in legno: un ingresso di forte carattere." },
    "Nuancë natyrale për ambiente rezidenciale.": { en: "Natural shades for residential spaces.", it: "Tonalità naturali per ambienti residenziali." },
    "Profil i fortë dhe pamje arkitekturore.": { en: "Strong profile and architectural look.", it: "Profilo deciso e aspetto architettonico." },
    "prodhim dhe montim": { en: "production and installation", it: "produzione e montaggio" },
    "Montim për ambiente rezidenciale dhe tregtare": { en: "Installation for residential and commercial spaces", it: "Montaggio per ambienti residenziali e commerciali" },
    "Koordinim materiali, ngjyrë dhe aksesorë": { en: "Coordination of material, color and accessories", it: "Coordinamento di materiale, colore e accessori" },
    "Dyer rezidenciale për volum të lartë": { en: "Residential doors for high volume", it: "Porte residenziali per grandi volumi" },
    "Standarde të qarta për montim në kantier": { en: "Clear standards for on-site installation", it: "Standard chiari per il montaggio in cantiere" },
    "Planifiko zgjidhjen tënde": { en: "Plan your solution", it: "Pianifica la tua soluzione" },
    "Dyer moderne për vila dhe komplekse": { en: "Modern doors for villas and complexes", it: "Porte moderne per ville e complessi" },
    "Materiale premium për përdorim afatgjatë": { en: "Premium materials for long-term use", it: "Materiali premium per uso duraturo" },
    "Detaje që lidhen me pamjen dhe stilin e hapësirës": { en: "Details connected to the look and style of the space", it: "Dettagli legati all'aspetto e allo stile dello spazio" },
    "Prodhim dhe instalim në shkallë projekti": { en: "Project-scale production and installation", it: "Produzione e installazione su scala di progetto" },
    "Zgjidhje për dyer të jashtme dhe të brendshme": { en: "Solutions for exterior and interior doors", it: "Soluzioni per porte esterne e interne" },
    "Nis projektin tënd": { en: "Start your project", it: "Avvia il tuo progetto" },
    "Dyer për apartamente dhe ambiente tregtare": { en: "Doors for apartments and commercial spaces", it: "Porte per appartamenti e ambienti commerciali" },
    "Montim i kontrolluar për çdo kat dhe hyrje": { en: "Controlled installation for every floor and entrance", it: "Montaggio controllato per ogni piano e ingresso" },
    "Dyer të jashtme dhe të brendshme për rezidencë të re": { en: "Exterior and interior doors for a new residence", it: "Porte esterne e interne per una nuova residenza" },
    "Balancim midis stilit, sigurisë dhe përdorimit ditor": { en: "Balance between style, security and daily use", it: "Equilibrio tra stile, sicurezza e uso quotidiano" },
    "Krijo standardin tënd": { en: "Create your standard", it: "Crea il tuo standard" },
    "Derë e brendshme, derë hyrjeje, sistem me xham ose projekt komplet me porosi.": { en: "Interior door, entrance door, glass system or complete custom project.", it: "Porta interna, porta d'ingresso, sistema con vetro o progetto completo su misura." },
    "Shëno dimensionet dhe sasinë në faqen e ofertës për të marrë përgjigje më të saktë.": { en: "Enter dimensions and quantity on the quote page to receive a more accurate response.", it: "Inserisci dimensioni e quantità nella pagina del preventivo per ricevere una risposta più precisa." },
    "Tre drejtime. Një hyrje vetëm për ju.": { en: "Three directions. One entrance made just for you.", it: "Tre direzioni. Un ingresso solo per te." },
    "Gjerësia dhe lartësia e hapësirës, edhe nëse janë paraprake.": { en: "The width and height of the opening, even if preliminary.", it: "Larghezza e altezza dello spazio, anche se provvisorie." },
    "Një pamje e ambientit dhe e murit ku do të vendoset dera.": { en: "A view of the space and the wall where the door will be installed.", it: "Una vista dell'ambiente e della parete dove verrà installata la porta." }
  });

  Object.assign(phraseMap, {
    "Linqë të shpejta sociale": { en: "Quick social links", it: "Link social rapidi" },
    "Film në transmetim · kontrollet mbeten aktive": { en: "Film playing · controls remain active", it: "Video in riproduzione · i controlli restano attivi" },
    "Pikat kryesore të produkteve": { en: "Product highlights", it: "Punti principali dei prodotti" },
    "Arkitekturë moderne me hyrje të kuruar": { en: "Modern architecture with a refined entrance", it: "Architettura moderna con ingresso curato" },
    "Modele dyersh FAL me kombinime druri dhe metali": { en: "FAL door models with wood and metal combinations", it: "Modelli di porte FAL con combinazioni di legno e metallo" },
    "Interior modern me derë FAL DOORS dhe materiale premium": { en: "Modern interior with a FAL DOORS door and premium materials", it: "Interno moderno con porta FAL DOORS e materiali premium" },
    "Derë modernë FAL DOORS ne ambient interior premium": { en: "Modern FAL DOORS door in a premium interior", it: "Porta moderna FAL DOORS in un interno premium" },
    "Proces dizajnimi për dyer me plan teknik": { en: "Door design process with a technical plan", it: "Processo di progettazione porte con disegno tecnico" },
    "Linja e prodhimit të dyerve ne fabrike": { en: "Door production line in the factory", it: "Linea di produzione delle porte in fabbrica" },
    "Montim profesional i derës ne objekt": { en: "Professional door installation on site", it: "Montaggio professionale della porta in cantiere" },
    "Dyer të paketuara gati për transport dhe eksport": { en: "Packaged doors ready for transport and export", it: "Porte imballate pronte per trasporto ed esportazione" },
    "Avantazhet e shërbimit profesional": { en: "Advantages of the professional service", it: "Vantaggi del servizio professionale" },
    "Derë moderne prej druri në një ambient të ndriçuar natyralisht": { en: "Modern wooden door in a naturally lit space", it: "Porta moderna in legno in un ambiente con luce naturale" },
    "Fasade xhami në projektin Pajtoni Center": { en: "Glass facade in the Pajtoni Center project", it: "Facciata in vetro nel progetto Pajtoni Center" },
    "Derë hyrjeje moderne në projektin Pepa Group": { en: "Modern entrance door in the Pepa Group project", it: "Porta d'ingresso moderna nel progetto Pepa Group" },
    "Dorezë": { en: "Handle", it: "Maniglia" },
    "FAL në shifra": { en: "FAL in numbers", it: "FAL in numeri" },
    "Eksperiencë që matët. Detaje që ndihen.": { en: "Measurable experience. Details you can feel.", it: "Esperienza misurabile. Dettagli che si sentono." },
    "Eksperiencë që matët.": { en: "Measurable experience.", it: "Esperienza misurabile." },
    "Detaje që ndihen.": { en: "Details you can feel.", it: "Dettagli che si sentono." },
    "Zëri i klientëve": { en: "Clients' voices", it: "La voce dei clienti" },
    "Foto klienti për t'u vendosur": { en: "Client photo placeholder", it: "Foto cliente da inserire" },
    "Klienti tjetër": { en: "Next client", it: "Cliente successivo" },
    "Le të ndërtojme diçka të veçantë": { en: "Let's build something special", it: "Costruiamo qualcosa di speciale" },
    "Shkodër, Shqipëri": { en: "Shkoder, Albania", it: "Scutari, Albania" },
    "Arkitekturë moderne me elemente xhami dhe druri": { en: "Modern architecture with glass and wood elements", it: "Architettura moderna con elementi in vetro e legno" },
    "Derë premium FAL DOORS me ndricim arkitekturor": { en: "Premium FAL DOORS door with architectural lighting", it: "Porta premium FAL DOORS con illuminazione architettonica" },
    "Innovation • Quality • Reliability": { en: "Innovation • Quality • Reliability", it: "Innovazione • Qualita • Affidabilita" },
    "Building solutions, creating futures": { en: "Building solutions, creating futures", it: "Soluzioni edilizie, futuri da costruire" },
    "Arredo FAB Group në shifra": { en: "Arredo FAB Group in numbers", it: "Arredo FAB Group in numeri" },
    "Marka të specializuara": { en: "Specialized brands", it: "Marchi specializzati" },
    "Logot e partnerëve": { en: "Partner logos", it: "Loghi dei partner" },
    "Procesi FAL / 01—04": { en: "FAL process / 01-04", it: "Processo FAL / 01-04" },
    "Një vijë e qartë.": { en: "A clear line.", it: "Una linea chiara." },
    "Formojmë idenë": { en: "We shape the idea", it: "Diamo forma all'idea" },
    "E bëjmë reale": { en: "We make it real", it: "La rendiamo reale" },
    "E vendosim saktë": { en: "We install it precisely", it: "La installiamo con precisione" },
    "Proces pune në punishte": { en: "Workshop work process", it: "Processo di lavoro in officina" },
    "Materiale druri për prodhim": { en: "Wood materials for production", it: "Materiali in legno per la produzione" },
    "Montimi profesional i derës": { en: "Professional door installation", it: "Montaggio professionale della porta" },
    "Derë moderne druri me kornize të zeze": { en: "Modern wooden door with a black frame", it: "Porta moderna in legno con cornice nera" },
    "Derë sigurie gri me detaje ari": { en: "Grey security door with gold details", it: "Porta blindata grigia con dettagli oro" },
    "Derë e brendshme e bardhë": { en: "White interior door", it: "Porta interna bianca" },
    "Derë hyrjeje moderne me dru": { en: "Modern wooden entrance door", it: "Porta d'ingresso moderna in legno" },
    "Derë hyrjeje klasike e bardhë": { en: "Classic white entrance door", it: "Porta d'ingresso classica bianca" },
    "Derë hyrjeje me arrar": { en: "Walnut entrance door", it: "Porta d'ingresso noce" },
    "Derë e brendshme me dru të hapur": { en: "Light wood interior door", it: "Porta interna in legno chiaro" },
    "Derë e brendshme gri": { en: "Grey interior door", it: "Porta interna grigia" },
    "Gamë dyersh të brendshme": { en: "Interior door range", it: "Gamma di porte interne" },
    "Derë sigurie pivot": { en: "Pivot security door", it: "Porta blindata pivot" },
    "Derë sigurie arrar dhe e zezë": { en: "Walnut and black security door", it: "Porta blindata noce e nera" },
    "Derë sigurie e bardhë": { en: "White security door", it: "Porta blindata bianca" },
    "Kombinim premium i drurit të errët me profil metalik antracit.": { en: "Premium combination of dark wood with an anthracite metal profile.", it: "Combinazione premium di legno scuro con profilo metallico antracite." },
    "Finiturë e bardhë me panel çeliku — siguri pa lëshuar estetikë.": { en: "White finish with steel panel: security without sacrificing aesthetics.", it: "Finitura bianca con pannello in acciaio: sicurezza senza rinunciare all'estetica." },
    "Finiturë druri": { en: "Wood finish", it: "Finitura legno" },
    "Dru i ngrohtë": { en: "Warm wood", it: "Legno caldo" },
    "Finiturë antracit": { en: "Anthracite finish", it: "Finitura antracite" },
    "Dyer të bardha": { en: "White doors", it: "Porte bianche" },
    "Linja të pastra që integrohen lehtë.": { en: "Clean lines that integrate easily.", it: "Linee pulite che si integrano facilmente." },
    "Hyrje dopio rustike": { en: "Rustic double entrance", it: "Ingresso doppio rustico" },
    "partnerë të zgjedhur": { en: "selected partners", it: "partner selezionati" },
    "01 / Kombinat, Vore, Qyteti Studenti": { en: "01 / Kombinat, Vore, Student City", it: "01 / Kombinat, Vore, Citta Studenti" },
    "02 / Kompleksi i Asitrit, Xhamllik, Liqeni i Thatë": { en: "02 / Astir Complex, Xhamllik, Dry Lake", it: "02 / Complesso Astir, Xhamllik, Lago Secco" },
    "03 / Univers City, QTU, Palase": { en: "03 / Univers City, QTU, Palase", it: "03 / Univers City, QTU, Palase" },
    "06 / Spring Residence, Vasil Shanto": { en: "06 / Spring Residence, Vasil Shanto", it: "06 / Spring Residence, Vasil Shanto" },
    "Kalo të projekti": { en: "Skip to project", it: "Vai al progetto" },
    "Hap Carpentry Workshop Alternatë": { en: "Open carpentry workshop alternate", it: "Apri variante laboratorio falegnameria" },
    "Carpentry Workshop Alternatë": { en: "Carpentry workshop alternate", it: "Variante laboratorio falegnameria" },
    "Diskuto një projekt të ngjashëm": { en: "Discuss a similar project", it: "Parla di un progetto simile" },
    "Lagje rezidenciale për Orion Construction": { en: "Residential neighborhood for Orion Construction", it: "Quartiere residenziale per Orion Construction" },
    "Finicione të koordinuara me arkitekturën": { en: "Finishes coordinated with the architecture", it: "Finiture coordinate con l'architettura" },
    "Interior panoramik për ALES Construction": { en: "Panoramic interior for ALES Construction", it: "Interno panoramico per ALES Construction" },
    "Kërko konsulencë teknike": { en: "Request technical consultation", it: "Richiedi consulenza tecnica" },
    "Përputhje me atmosferën urbane të kompleksit": { en: "Aligned with the complex's urban atmosphere", it: "Coerente con l'atmosfera urbana del complesso" },
    "Ambient me fasade xhami për Pajtoni Center": { en: "Glass-facade space for Pajtoni Center", it: "Ambiente con facciata in vetro per Pajtoni Center" },
    "Finicione të koordinuara me arkitekturën e ndërtesës": { en: "Finishes coordinated with the building architecture", it: "Finiture coordinate con l'architettura dell'edificio" },
    "Rezervo një konsultim": { en: "Book a consultation", it: "Prenota una consulenza" },
    "Derë moderne për Pepa Group": { en: "Modern door for Pepa Group", it: "Porta moderna per Pepa Group" },
    "Opsionet për krijimin e derës": { en: "Door creation options", it: "Opzioni per creare la porta" },
    "Dorezë vertikale": { en: "Vertical handle", it: "Maniglia verticale" },
    "Dorezë minimaliste": { en: "Minimalist handle", it: "Maniglia minimalista" },
    "Dorezë klasike": { en: "Classic handle", it: "Maniglia classica" },
    "Derë minimaliste e errët": { en: "Dark minimalist door", it: "Porta minimalista scura" },
    "Derë me dru të ngrohtë": { en: "Door with warm wood", it: "Porta con legno caldo" },
    "Derë dopio moderne": { en: "Modern double door", it: "Porta doppia moderna" },
    "Statëment": { en: "Statement", it: "Statement" },
    "Nëse keni foto, plan ose matje, përmendini në mesazh. Ekipi ynë do t'ju udhëzojë menjëherë si t'i dërgoni për vlerësimin e projektit.": {
      en: "If you have photos, plans or measurements, mention them in the message. Our team will immediately explain how to send them for project review.",
      it: "Se hai foto, planimetrie o misure, menzionale nel messaggio. Il nostro team ti spieghera subito come inviarle per la valutazione del progetto."
    },
    "Planet dhe fotot dërgohen pas kontaktit me ekipin": {
      en: "Plans and photos are sent after contacting the team",
      it: "Planimetrie e foto vengono inviate dopo il contatto con il team"
    },
    "Shkruani detajet e projektit, afatin dhe çdo kërkesë të veçantë.": {
      en: "Write the project details, timeline and any special request.",
      it: "Scrivi i dettagli del progetto, le tempistiche e qualsiasi richiesta speciale."
    },
    "Tri gjëra që na ndihmojnë t'ju përgjigjemi me saktë.": {
      en: "Three things that help us answer you more accurately.",
      it: "Tre cose che ci aiutano a risponderti con maggiore precisione."
    },
    "Krijoni stilin tuaj": { en: "Create your style", it: "Crea il tuo stile" },
    "Zgjidhni derën": { en: "Choose the door", it: "Scegli la porta" },
    "që tregon historinë": { en: "that tells the story", it: "che racconta la storia" },
    "e ambientit.": { en: "of the space.", it: "dell'ambiente." },
    "Inovacion": { en: "Innovation", it: "Innovazione" },
    "Elegancë": { en: "Elegance", it: "Eleganza" },
    "Cilësi": { en: "Quality", it: "Qualita" },
    "Dizajn. Cilësi. Besim.": { en: "Design. Quality. Trust.", it: "Design. Qualita. Fiducia." },
    "Cilësi. Precizion. Përkushtim.": { en: "Quality. Precision. Dedication.", it: "Qualita. Precisione. Dedizione." },
    "Shërbime Profesionale": { en: "Professional Services", it: "Servizi professionali" },
    "Pa Kompromis": { en: "Without Compromise", it: "Senza compromessi" },
    "Dizajnimi i Dyerve": { en: "Door Design", it: "Progettazione porte" },
    "Prodhimi i Dyerve": { en: "Door Production", it: "Produzione porte" },
    "Montimi i Dyerve": { en: "Door Installation", it: "Montaggio porte" },
    "Eksporti i Dyerve": { en: "Door Export", it: "Esportazione porte" },
    "Mëso më shumë": { en: "Learn more", it: "Scopri di piu" },
    "Materiale Premium": { en: "Premium Materials", it: "Materiali premium" },
    "Punim Artizanal": { en: "Craftsmanship", it: "Lavorazione artigianale" },
    "Garanci 5 Vjet": { en: "5-Year Warranty", it: "Garanzia 5 anni" },
    "Ekip Profesional": { en: "Professional Team", it: "Team professionale" },
    "Precizion & Cilësi": { en: "Precision & Quality", it: "Precisione e qualita" },
    "Përdorim materiale të zgjedhura me kujdes.": { en: "We use carefully selected materials.", it: "Usiamo materiali selezionati con cura." },
    "Siguri dhe besim afatgjatë.": { en: "Long-term security and trust.", it: "Sicurezza e fiducia a lungo termine." },
    "Ekspertë të përkushtuar për çdo projekt.": { en: "Dedicated experts for every project.", it: "Esperti dedicati per ogni progetto." },
    "Çdo detaj ka rëndësi, çdo herë.": { en: "Every detail matters, every time.", it: "Ogni dettaglio conta, ogni volta." },
    "Rruga e projektit / Paneli i projektit": { en: "Project path / Project console", it: "Percorso progetto / Console progetto" },
    "FAL / SELECTED WORK": { en: "FAL / SELECTED WORK", it: "FAL / PROGETTI SELEZIONATI" },
    "Rezidenciale · Komerciale · Me porosi": { en: "Residential · Commercial · Custom", it: "Residenziale · Commerciale · Su misura" },
    "identitet.": { en: "identity.", it: "identita." },
    "Ndërtojmë besimin": { en: "We build trust", it: "Costruiamo fiducia" },
    "Ndërtime që bashkojnë komunitete": { en: "Developments that bring communities together", it: "Costruzioni che uniscono comunita" },
    "Hapësira që frymëzojnë jetën": { en: "Spaces that inspire life", it: "Spazi che ispirano la vita" },
    "Arkitekturë që lidh njerëzit me hapësirat": { en: "Architecture that connects people with spaces", it: "Architettura che collega le persone agli spazi" },
    "Cilësi në çdo detaj, besim në çdo hap": { en: "Quality in every detail, trust at every step", it: "Qualita in ogni dettaglio, fiducia in ogni passo" },
    "Detaje të kontrolluara në prodhim": { en: "Controlled details in production", it: "Dettagli controllati in produzione" },
    "Nga këshillimi deri te dorëzimi": { en: "From consultation to delivery", it: "Dalla consulenza alla consegna" },
    "Ne FAL Doors ofrojmë shërbime të specializuara në çdo hap te projektit tuaj, nga dizajni deri te eksporti. Çdo detaj, nje standard i lartë.": {
      en: "At FAL Doors, we offer specialized services at every step of your project, from design to export. Every detail follows a high standard.",
      it: "In FAL Doors offriamo servizi specializzati in ogni fase del tuo progetto, dal design all'esportazione. Ogni dettaglio segue uno standard elevato."
    },
    "Me një angazhim të pakompromis për cilësinë, FAL Doors shtron themelet e prodhimit të dyerve të çdo ambienti.": {
      en: "With an uncompromising commitment to quality, FAL Doors lays the foundation for producing doors for every space.",
      it: "Con un impegno senza compromessi per la qualita, FAL Doors pone le basi per produrre porte per ogni ambiente."
    },
    "Montimi i dyerve në FAL Doors është një përkushtim i precizionit dhe kujdesit maksimal për çdo ambient.": {
      en: "Door installation at FAL Doors is a commitment to precision and maximum care for every space.",
      it: "Il montaggio delle porte in FAL Doors e un impegno di precisione e massima cura per ogni ambiente."
    },
    "Eksporti i dyerve është shërbimi ynë i specializuar ne tregjet nderkombetare, me standarde të sigurta dhe cilësi FAL Doors.": {
      en: "Door export is our specialized service for international markets, with reliable standards and FAL Doors quality.",
      it: "L'esportazione delle porte e il nostro servizio specializzato per i mercati internazionali, con standard sicuri e qualita FAL Doors."
    },
    "Nga banesat privatë të projektet e mëdha, çdo realizim bashkon dizajnin, precizionin dhe cilësinë FAL DOORS.": {
      en: "From private homes to large projects, every completed work brings together design, precision and FAL DOORS quality.",
      it: "Dalle abitazioni private ai grandi progetti, ogni realizzazione unisce design, precisione e qualita FAL DOORS."
    },
    "Saktësi në çdo hap.": { en: "Accuracy at every step.", it: "Precisione in ogni fase." },
    "Histori reale nga njerez dhe profesioniste që i kane besuar FAL DOORS projektin e tyre.": {
      en: "Real stories from people and professionals who trusted FAL DOORS with their projects.",
      it: "Storie reali di persone e professionisti che hanno affidato i loro progetti a FAL DOORS."
    },
    "Që nga konsultimi i parë deri te montimi, çdo detaj u trajtua me kujdes. Rezultati i dha shtëpisë tonë karakterin që kërkonim.": {
      en: "From the first consultation to installation, every detail was handled with care. The result gave our home the character we wanted.",
      it: "Dalla prima consulenza al montaggio, ogni dettaglio e stato curato con attenzione. Il risultato ha dato alla nostra casa il carattere che cercavamo."
    },
    "FAL Doors është një zgjedhje e shkëlqyeshme për dyer të cilësisë se lartë dhe dizajne të bukura. Dyert e tyre janë të mrekullueshme dhe cilësia është e padiskutueshme. Ekipi i tyre është i kujdesshëm dhe profesionist. Dyert e tyre kane ndryshuar plotësisht pamjen e shtëpisë sime.": {
      en: "FAL Doors is an excellent choice for high-quality doors and beautiful designs. Their doors are wonderful and the quality is unquestionable. Their team is careful and professional. Their doors completely changed the look of my home.",
      it: "FAL Doors e una scelta eccellente per porte di alta qualita e design belli. Le loro porte sono splendide e la qualita e indiscutibile. Il team e attento e professionale. Le loro porte hanno cambiato completamente l'aspetto della mia casa."
    },
    "FAL Doors na ofroi një zgjedhje të mrekullueshme të dyerve për projektin tonë të ndërtimit. Dyert e tyre janë të personalizuara me kujdes dhe janë një kombinim i shkelqyeshem i funksionalitetit dhe dizajnit. Ekipi i tyre është i përkushtuar për të ofruar cilësi të jashtëzakonshme dhe në jemi të kënaqur me rezultatin përfundimtar.": {
      en: "FAL Doors offered us a wonderful selection of doors for our construction project. Their doors are carefully customized and are an excellent combination of functionality and design. Their team is committed to exceptional quality, and we are pleased with the final result.",
      it: "FAL Doors ci ha offerto una splendida scelta di porte per il nostro progetto edilizio. Le loro porte sono personalizzate con cura e combinano in modo eccellente funzionalita e design. Il team si impegna per una qualita eccezionale e siamo soddisfatti del risultato finale."
    },
    "Montim me precizion": { en: "Precision installation", it: "Montaggio di precisione" },
    "02 / Design & prodhim": { en: "02 / Design & production", it: "02 / Design e produzione" },
    "Nga materiali të zgjidhja": { en: "From material to solution", it: "Dal materiale alla soluzione" },
    "Lexojmë ambientin": { en: "We read the space", it: "Leggiamo l'ambiente" },
    "Prodhim real": { en: "Real production", it: "Produzione reale" },
    "Një derë e mirë fillon shumë përpara montimit.": {
      en: "A good door begins long before installation.",
      it: "Una buona porta nasce molto prima del montaggio."
    },
    "Ton neutral me karakter — i integruar me lehtësi në ambiente bashkëkohore.": {
      en: "A neutral tone with character, easily integrated into contemporary spaces.",
      it: "Una tonalita neutra con carattere, facile da integrare in ambienti contemporanei."
    },
    "Me porosi — Projekt unik": { en: "Custom — Unique project", it: "Su misura — Progetto unico" },
    "tipologji hapësirash": { en: "space typologies", it: "tipologie di spazi" },
    "Prodhim dyersh me porosi": { en: "Custom door production", it: "Produzione di porte su misura" },
    "Detaje të personalizuara sipas ambientit": { en: "Customized details for the space", it: "Dettagli personalizzati per l'ambiente" },
    "Na dërgoni një foto të ambientit, dimensionet ose një referencë. Ekipi ynë ju ndihmon ta ktheni idenë në një zgjidhje konkrete.": {
      en: "Send us a photo of the space, the dimensions or a reference. Our team helps you turn the idea into a concrete solution.",
      it: "Inviaci una foto dell'ambiente, le dimensioni o un riferimento. Il nostro team ti aiuta a trasformare l'idea in una soluzione concreta."
    },
    "Një pamje e vetme për koleksionin FAL DOORS: dyer hyrjeje, ambiente, detaje prodhimi, materiale dhe montim.": {
      en: "One complete view of the FAL DOORS collection: entrance doors, spaces, production details, materials and installation.",
      it: "Una panoramica completa della collezione FAL DOORS: porte d'ingresso, ambienti, dettagli di produzione, materiali e montaggio."
    },
    "Zgjidh tonin që i shkon ambientit: dru i erret, dru i hapur, antracit ose neutral.": {
      en: "Choose the tone that suits the space: dark wood, light wood, anthracite or neutral.",
      it: "Scegli la tonalita adatta all'ambiente: legno scuro, legno chiaro, antracite o neutro."
    },
    "Dorezë vertikale, minimaliste ose zgjidhje e veçantë sipas projektit.": {
      en: "Vertical handle, minimalist option or a special solution according to the project.",
      it: "Maniglia verticale, opzione minimalista o soluzione speciale in base al progetto."
    },
    "Na tregoni kur planifikoni ta realizoni projektin.": {
      en: "Tell us when you plan to complete the project.",
      it: "Dicci quando prevedi di realizzare il progetto."
    },
    "Ne partneritet me Salillari, FAL DOORS ka realizuar zgjidhje per dyer të jashtme dhe të brendshme në rezidenca, hapësira publike dhe ambiente biznesi. Fokusi ishte një standard i unifikuar: materiale cilësore, montim i pastër dhe detaje që i rezistojnë përdorimit të përditshëm.": {
      en: "In partnership with Salillari, FAL DOORS delivered exterior and interior door solutions for residences, public spaces and business environments. The focus was a unified standard: quality materials, clean installation and details that withstand daily use.",
      it: "In partnership con Salillari, FAL DOORS ha realizzato soluzioni per porte esterne e interne in residenze, spazi pubblici e ambienti business. Il focus era uno standard uniforme: materiali di qualita, montaggio pulito e dettagli resistenti all'uso quotidiano."
    },
    "Për Orion Construction, projekti u fokusua ne dyer të jashtme dhe të brendshme për komplekse rezidenciale ku siguria, estetika dhe funksionaliteti duhej të ecnin bashkë. Zgjidhjet u menduan për te ruajtur karakterin e çdo hyrjeje dhe për të krijuar përvojë te qëndrueshme për banorët.": {
      en: "For Orion Construction, the project focused on exterior and interior doors for residential complexes where security, aesthetics and functionality had to work together. The solutions were designed to preserve the character of each entrance and create a lasting experience for residents.",
      it: "Per Orion Construction, il progetto si e concentrato su porte esterne e interne per complessi residenziali dove sicurezza, estetica e funzionalita dovevano procedere insieme. Le soluzioni sono state pensate per preservare il carattere di ogni ingresso e creare un'esperienza duratura per i residenti."
    },
    "Bashkepunimi me ALES Construction perfshin projekte ku dritaret, pamjet dhe linjat moderne kërkojne dyer të pastra, të sigurta dhe të integruara me ambientin. Çdo derë u trajtua si pjese e arkitektures, jo vetëm si element funksional.": {
      en: "The collaboration with ALES Construction includes projects where windows, views and modern lines require clean, secure doors integrated with the space. Every door was treated as part of the architecture, not only as a functional element.",
      it: "La collaborazione con ALES Construction include progetti in cui finestre, viste e linee moderne richiedono porte pulite, sicure e integrate con l'ambiente. Ogni porta e stata trattata come parte dell'architettura, non solo come elemento funzionale."
    },
    "Për Tirana 1 Construction, puna u orientua drejt komplekseve rezidenciale me kërkese për ritëm të larte prodhimi dhe kontroll konstant cilësie. FAL DOORS siguroi dyer që ruajnë elegancën e projektit dhe performojne mirë ne përdorim të përditshëm.": {
      en: "For Tirana 1 Construction, the work focused on residential complexes requiring a high production pace and constant quality control. FAL DOORS provided doors that preserve the project's elegance and perform well in daily use.",
      it: "Per Tirana 1 Construction, il lavoro si e orientato verso complessi residenziali con richiesta di ritmo produttivo elevato e controllo costante della qualita. FAL DOORS ha fornito porte che mantengono l'eleganza del progetto e funzionano bene nell'uso quotidiano."
    },
    "Pajtoni Center kërkonte zgjidhje të qarta për një ndërtesë me funksion të përzier: banim dhe ambiente shërbimi. Dyert u projektuan për të ruajtur sigurinë, harmoninë vizuale dhe performancën në një strukturë më shumë përdorues.": {
      en: "Pajtoni Center required clear solutions for a mixed-use building: housing and service spaces. The doors were designed to preserve security, visual harmony and performance in a multi-user structure.",
      it: "Pajtoni Center richiedeva soluzioni chiare per un edificio a uso misto: abitazioni e spazi di servizio. Le porte sono state progettate per mantenere sicurezza, armonia visiva e prestazioni in una struttura con molti utenti."
    },
    "Ne projektin Spring Residence me Pepa Group, zgjidhjet e dyerve u ndërtuan rreth një ideje të thjeshtë: çdo hyrje duhet të duket e mirë, të ndihet e sigurt dhe të punojë pa kompromis. Materialet, ngjyrat dhe aksesorët u përzgjodhën për një ambient të ri banimi.": {
      en: "In the Spring Residence project with Pepa Group, the door solutions were built around a simple idea: every entrance should look good, feel secure and work without compromise. Materials, colors and accessories were selected for a new residential environment.",
      it: "Nel progetto Spring Residence con Pepa Group, le soluzioni per le porte sono state costruite intorno a un'idea semplice: ogni ingresso deve apparire bello, sentirsi sicuro e funzionare senza compromessi. Materiali, colori e accessori sono stati selezionati per un nuovo ambiente residenziale."
    },
    "Projekti 01 aktiv": { en: "Project 01 active", it: "Progetto 01 attivo" },
    "Projekti 02 aktiv": { en: "Project 02 active", it: "Progetto 02 attivo" },
    "Projekti 03 aktiv": { en: "Project 03 active", it: "Progetto 03 attivo" },
    "Projekti 04 aktiv": { en: "Project 04 active", it: "Progetto 04 attivo" },
    "Projekti 05 aktiv": { en: "Project 05 active", it: "Progetto 05 attivo" },
    "Projekti 06 aktiv": { en: "Project 06 active", it: "Progetto 06 attivo" },
    "Projekti para": { en: "Previous project", it: "Progetto precedente" },
    "Projekt arkitektonik": { en: "Architectural project", it: "Progetto architettonico" },
    "Zgjidh projektin": { en: "Choose project", it: "Scegli progetto" },
    "Detajet kryesore të projektit.": { en: "Key project details.", it: "Dettagli principali del progetto." },
    "Ky panel mund të zgjerohet me materiale, sisteme, vendndodhje dhe fotografi të tjera të realizimit.": {
      en: "This panel can be expanded with materials, systems, locations and additional photos from the completed work.",
      it: "Questo pannello puo essere ampliato con materiali, sistemi, posizioni e altre foto della realizzazione."
    },
    "Ndërtojmë besimin. Ky panel mund të zgjerohet me materiale, sisteme, vendndodhje dhe fotografi të tjera të realizimit.": {
      en: "We build trust. This panel can be expanded with materials, systems, locations and additional photos from the completed work.",
      it: "Costruiamo fiducia. Questo pannello puo essere ampliato con materiali, sistemi, posizioni e altre foto della realizzazione."
    },
    "Ndërtime që bashkojnë komunitete. Ky panel mund të zgjerohet me materiale, sisteme, vendndodhje dhe fotografi të tjera të realizimit.": {
      en: "Developments that bring communities together. This panel can be expanded with materials, systems, locations and additional photos from the completed work.",
      it: "Costruzioni che uniscono comunita. Questo pannello puo essere ampliato con materiali, sistemi, posizioni e altre foto della realizzazione."
    },
    "Hapësira që frymëzojnë jetën. Ky panel mund të zgjerohet me materiale, sisteme, vendndodhje dhe fotografi të tjera të realizimit.": {
      en: "Spaces that inspire life. This panel can be expanded with materials, systems, locations and additional photos from the completed work.",
      it: "Spazi che ispirano la vita. Questo pannello puo essere ampliato con materiali, sistemi, posizioni e altre foto della realizzazione."
    },
    "Ndërtime me vizion për një të ardhme me të mirë. Ky panel mund të zgjerohet me materiale, sisteme, vendndodhje dhe fotografi të tjera të realizimit.": {
      en: "Developments with vision for a better future. This panel can be expanded with materials, systems, locations and additional photos from the completed work.",
      it: "Costruzioni con visione per un futuro migliore. Questo pannello puo essere ampliato con materiali, sistemi, posizioni e altre foto della realizzazione."
    },
    "Arkitekturë që lidh njerëzit me hapësirat. Ky panel mund të zgjerohet me materiale, sisteme, vendndodhje dhe fotografi të tjera të realizimit.": {
      en: "Architecture that connects people with spaces. This panel can be expanded with materials, systems, locations and additional photos from the completed work.",
      it: "Architettura che collega le persone agli spazi. Questo pannello puo essere ampliato con materiali, sistemi, posizioni e altre foto della realizzazione."
    },
    "Cilësi në çdo detaj, besim në çdo hap. Ky panel mund të zgjerohet me materiale, sisteme, vendndodhje dhe fotografi të tjera të realizimit.": {
      en: "Quality in every detail, trust at every step. This panel can be expanded with materials, systems, locations and additional photos from the completed work.",
      it: "Qualita in ogni dettaglio, fiducia in ogni passo. Questo pannello puo essere ampliato con materiali, sistemi, posizioni e altre foto della realizzazione."
    },
    "Zgjidhje të forta dhe te qëndrueshme.": { en: "Strong, durable solutions.", it: "Soluzioni solide e durevoli." },
    "Me një ekip të specializuar në dizajn dhe prodhim, ju ndihmojmë te kombinoni modelin, finiturat dhe aksesorët në një hyrje unike.": {
      en: "With a team specialized in design and production, we help you combine the model, finishes and accessories into a unique entrance.",
      it: "Con un team specializzato in design e produzione, ti aiutiamo a combinare modello, finiture e accessori in un ingresso unico."
    },
    "Ekipi ynë i specializuar i dizajnit krijon vepra unike, duke përdorur teknologji moderne dhe zgjidhje elegante te përshtatura sipas stilit dhe nevojës tuaj.": {
      en: "Our specialized design team creates unique work using modern technology and elegant solutions tailored to your style and needs.",
      it: "Il nostro team di design specializzato crea opere uniche usando tecnologia moderna e soluzioni eleganti su misura per il tuo stile e le tue esigenze."
    },
    "Ndërtime me vizion për një të ardhme me të mirë": {
      en: "Developments with vision for a better future",
      it: "Costruzioni con visione per un futuro migliore"
    },
    "Dyer me porosi, detaje të ngrohta druri dhe zgjidhje elegante per çdo hapësirë.": {
      en: "Custom doors, warm wood details and elegant solutions for every space.",
      it: "Porte su misura, dettagli caldi in legno e soluzioni eleganti per ogni spazio."
    },
    "Dyer me porosi ku arkitektura, siguria dhe mjeshtëria takohen ne një hyrje të vetme.": {
      en: "Custom doors where architecture, security and craftsmanship meet in one entrance.",
      it: "Porte su misura dove architettura, sicurezza e artigianalità si incontrano in un unico ingresso."
    },
    "Menaxhim materialesh dhe rikthim në vlerë me një qasje me te pergjegjshme ndaj burimeve.": {
      en: "Material management and value recovery with a more responsible approach to resources.",
      it: "Gestione dei materiali e recupero di valore con un approccio più responsabile alle risorse."
    },
    "Nga hyrjet kryesore tek ambientet e brendshme, çdo model bashkon siguri, finiturë dhe permasa të personalizuara për projektin tuaj.": {
      en: "From main entrances to interior spaces, every model combines security, finish and customized dimensions for your project.",
      it: "Dagli ingressi principali agli ambienti interni, ogni modello unisce sicurezza, finitura e dimensioni personalizzate per il tuo progetto."
    },
    "04 / Astir dhe Fiori di Bosco": { en: "04 / Astir and Fiori di Bosco", it: "04 / Astir e Fiori di Bosco" },
    "05 / Durrës, godinë banimi dhe dyqane": { en: "05 / Durres, residential building and shops", it: "05 / Durazzo, edificio residenziale e negozi" },
    "Kjo faqe është për klientin që do të krijojë derën sipas shijes se vet. Zgjidh profilin, ngjyrën, dorezën dhe detajet kryesore para se të kërkosh ofertë.": {
      en: "This page is for clients who want to create a door according to their own taste. Choose the profile, color, handle and main details before requesting a quote.",
      it: "Questa pagina è per chi vuole creare una porta secondo il proprio gusto. Scegli profilo, colore, maniglia e dettagli principali prima di richiedere un preventivo."
    }
  });

  const wordMap = {
    en: {
      "Architect": "Architectural",
      "Door": "Door",
      "Design": "Design",
      "Catalog": "Catalogue",
      "Classic": "Classic",
      "Honey": "Honey",
      "Dark": "Dark",
      "Double": "Double",
      "Gray": "Grey",
      "Wood": "Wood",
      "Security": "Security",
      "Interior": "Interior",
      "Workshop": "Workshop",
      "Alternate": "Alternate",
      "Minimal": "Minimal",
      "White": "White",
      "Natural": "Natural",
      "Entry": "Entry",
      "Commercial": "Commercial",
      "Glass": "Glass",
      "Factory": "Factory",
      "Installed": "Installed",
      "Modern": "Modern",
      "Showroom": "Showroom"
    },
    it: {
      "Architect": "Architettura",
      "Door": "Porta",
      "Design": "Design",
      "Catalog": "Catalogo",
      "Classic": "Classica",
      "Honey": "Miele",
      "Dark": "Scura",
      "Double": "Doppia",
      "Gray": "Grigia",
      "Wood": "Legno",
      "Security": "Sicurezza",
      "Interior": "Interna",
      "Workshop": "Laboratorio",
      "Alternate": "Alternativa",
      "Minimal": "Minimale",
      "White": "Bianca",
      "Natural": "Naturale",
      "Entry": "Ingresso",
      "Commercial": "Commerciale",
      "Glass": "Vetro",
      "Factory": "Fabbrica",
      "Installed": "Installata",
      "Modern": "Moderna",
      "Showroom": "Showroom"
    }
  };

  const normalize = (value) => value.replace(/\s+/g, " ").trim();
  const getLanguage = () => {
    const saved = localStorage.getItem(storageKey) || localStorage.getItem("fal-bold-language");
    return languages.includes(saved) ? saved : fallback;
  };
  const messages = {
    sq: {
      required: "Ju lutemi plotësoni fushat e detyrueshme.",
      sending: "Duke dërguar...",
      success: "Faleminderit. Do t'ju kontaktojmë së shpejti.",
      error: "Dërgimi dështoi. Provoni përsëri ose na shkruani në WhatsApp."
    },
    en: {
      required: "Please complete all required fields.",
      sending: "Sending...",
      success: "Thank you. We will contact you shortly.",
      error: "Submission failed. Please try again or message us on WhatsApp."
    },
    it: {
      required: "Compila tutti i campi obbligatori.",
      sending: "Invio in corso...",
      success: "Grazie. Ti contatteremo al piu presto.",
      error: "Invio non riuscito. Riprova o scrivici su WhatsApp."
    }
  };
  const getWords = (language = getLanguage()) => messages[language] || messages[fallback];

  const translateTitleWords = (text, language) => {
    if (language === fallback) return text;
    return text.replace(/\b[A-Z][A-Za-z]+\b/g, (word) => wordMap[language][word] || word);
  };

  const translate = (text, language) => {
    const key = normalize(text);
    if (!key || language === fallback) return text;
    if (phraseMap[key]?.[language]) return phraseMap[key][language];
    return translateTitleWords(text, language);
  };

  const remember = (element, attr) => {
    const key = attr ? `data-fal-sq-${attr.replace(/[^a-z0-9]+/gi, "-")}` : "data-fal-sq-text";
    if (!element.hasAttribute(key)) {
      const value = attr ? element.getAttribute(attr) : element.textContent;
      if (value && normalize(value)) element.setAttribute(key, value);
    }
    return element.getAttribute(key) || "";
  };

  const translateTextNodes = (root, language) => {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!normalize(node.nodeValue)) return NodeFilter.FILTER_REJECT;
        const parent = node.parentElement;
        if (!parent || ["SCRIPT", "STYLE", "NOSCRIPT", "TEXTAREA"].includes(parent.tagName)) {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => {
      const parent = node.parentElement;
      if (!node.__falSqText) node.__falSqText = node.nodeValue;
      const source = node.__falSqText;
      node.nodeValue = language === fallback ? source : translate(source, language);
      if (parent) parent.dataset.falTranslated = "true";
    });
  };

  const translateAttributes = (language) => {
    const attrs = ["aria-label", "alt", "placeholder", "title", "content"];
    attrs.forEach((attr) => {
      document.querySelectorAll(`[${attr}]`).forEach((element) => {
        if (attr === "content") {
          const property = element.getAttribute("property") || "";
          const name = element.getAttribute("name") || "";
          if (!/(description|og:description|og:title)/.test(`${property} ${name}`)) return;
        }
        const source = remember(element, attr);
        if (!source) return;
        element.setAttribute(attr, language === fallback ? source : translate(source, language));
      });
    });
    if (!document.documentElement.dataset.falSqTitle) {
      document.documentElement.dataset.falSqTitle = document.title;
    }
    document.title = language === fallback
      ? document.documentElement.dataset.falSqTitle
      : translate(document.documentElement.dataset.falSqTitle, language);
  };

  let isApplying = false;
  let pendingApply = 0;

  const apply = (language = getLanguage()) => {
    const selected = languages.includes(language) ? language : fallback;
    isApplying = true;
    localStorage.setItem(storageKey, selected);
    localStorage.setItem("fal-bold-language", selected);
    document.documentElement.lang = selected;
    translateTextNodes(document.body, selected);
    translateAttributes(selected);
    document.querySelectorAll("button[data-lang]").forEach((button) => {
      const active = button.dataset.lang === selected;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    isApplying = false;
  };

  window.FalLanguage = { apply, getLanguage, getWords, translate };
  window.FalBoldLanguage = window.FalLanguage;

  document.querySelectorAll("button[data-lang]").forEach((button) => {
    button.addEventListener("click", () => apply(button.dataset.lang));
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => apply(getLanguage()), { once: true });
  } else {
    apply(getLanguage());
  }

  const scheduleApply = () => {
    if (isApplying) return;
    window.clearTimeout(pendingApply);
    pendingApply = window.setTimeout(() => apply(getLanguage()), 20);
  };

  if ("MutationObserver" in window) {
    const observer = new MutationObserver((mutations) => {
      if (isApplying) return;
      if (mutations.some((mutation) => mutation.type === "childList" || mutation.type === "characterData")) {
        scheduleApply();
      }
    });
    observer.observe(document.body, {
      childList: true,
      characterData: true,
      subtree: true
    });
  }

  window.setTimeout(() => apply(getLanguage()), 250);
  window.setTimeout(() => apply(getLanguage()), 1200);
})();
