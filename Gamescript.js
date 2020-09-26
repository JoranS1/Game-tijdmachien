alert("Vul aub alles in met KLEINE LETTERS");
alert("Je hebt een prijs gewonnen en de prijs is een ritje met een tijdmachine en dat ritje is vandaag maak de goede keuze om dit ritje niet door te laten slaan naar de eeuwige jachtvelden");
var tijd = prompt("Kies een tijd uit");
// Dit is het deel prehistorie met 5 keuzes
	if(tijd <= 425){
	alert("Je bent terecht gekomen in de prehistorie");
	alert("Je ziet 2 richtingen de ene richting gaat naar een kamp de ander naar een kudde mammoeten welke richting kies je");
	var richting = prompt("Vul kamp of mammoet");
}

		
	if (richting == "kamp"){
		alert("Je loopt richting het kamp op je weg daarheen kom je een gewonde Reuzenhert tegen wat ga je doen hem verzorgen of hem voor dood achterlaten");
		var hert = prompt("Vul verzorgen of dood in");
	}
		else if (richting == "mammoet"){
		alert("Je komt een kudde mammoeten tegen eentje wordt boos en wilt je aanvallen wat ga je doen de confrontatie aangaan of wegrennen?");
		var gevecht = prompt("Kies uit vechten of wegrennen");
	}
		if (gevecht == "vechten"){
			alert("Ja niet zo slim dit een mammoet en die zijn 20x groter en sterker dan jij, logisch dat je dit verliest GAME OVER");
		}
		 if(gevecht == "wegrennen"){
			alert("Je rent van de kudde mamoeten en je stopt bij een berg en rechts is een meertje. Wat ga je doen?");
			var bergmeer = prompt("Kies uit berg of meertje");
			if (bergmeer == "berg") {
				alert("Je komt veilig aan op de berg na een lange klim en gelijk nadat je boven met aangekomen wordt je terug geteleporteerd naar je eigen tijd GEFELICITEERD JE HEBT DE GAME UITGESPEELD");
			} 
			else if(bergmeer == "meertje") {
				alert("Je loopt naar het meertje en neemt een duik maar je was vergeten dat het -15 was je bevriest GAME OVER");

			}
		}
	
		if(hert == "verzorgen"){
			alert("Je verzorgt de hert doormiddel van stelping met je jas de hert voelt zich nu een stuk beter. Jij vervolgt je weg naar het kamp");
			alert("Je komt aan op het kamp en ziet een hele familie aan het eten jij denkt, Dat ze hier geen MCDonalds hebben verbaast me dat doe je net iets te hard een grote man komt naar je toe en praat tegen je in een heel vreemd taaltje. Wat ga je doen proberen met hem te communiceren of gebarentaal gebruiken?");
		    var praten = prompt("Kies uit gebarentaal of spreken");
		}
		if (hert == "dood"){
			alert("De hert gaat dood maar zijn familie vermoord jou. Misschien moet je de volgende keer denken wat zou Greenpeace doen. GAME OVER");
		}
			
			if (praten == "gebarentaal"){ 
				alert("De holbewoner kijkt je raar aan en denkt van wat is die nu weer aan het doen. En gaat weer verder met eten ondertussen wordt je weer teruggehaald naar je eigen tijd GEFELICITEERD JE HEBT HET GEHAALD");
			}
				if (praten == "spreken"){
					alert("de holbewoner slaat je neer en je overlijdt GAME OVER");
				}
			
		
		//Nu volgt het deel Middeleeuwen
if (tijd >= 426){
	alert("Je komt terecht in de Middeleeuwen");
	alert("Je komt terecht vlak achter de stadspoort van het oude Dordrecht. Er komen 2 bewakers naar je toe je moet je verstoppen je ziet een  paar tonnen en een paar meelzakken waar ga je je verstoppen?");
	var verstoppen = prompt("Kies uit ton of meelzak");
	if(verstoppen == "ton"){
		alert("Je verstopt je achter de tonnen de bewakers hebben jou niet gezien je vervolgt je weg de stad in");
		alert("Je ziet iemand een brood stelen van de bakker! Wat ga je doen erachteraan of melden bij de bakker?");
		var stelen = prompt("Kies uit melden of achterna rennen");
		if (stelen == "melden"){
			alert("De bakker bedankt je voor de melding en voor de beschrijving die je gaf over de dader");
			alert("Je gaat verder met je tocht door de stad en komt een zwerfhondje tegen neem je hem mee of ga je verder?");
			var hondje= prompt ("Kies uit meenemen of verdergaan");
			if(hondje == "meenemen"){
				alert("De hond bijt je helaas was je vergeten een vaccin voor hondsdolheid te halen je sterft aan de gevolgen van hondsdolheid GAME OVER");
			}
			else if (hondje=="verdergaan"){
				alert("Je gaat verder met je tocht en strijkt neer bij een taverne(een oude kroeg) er staat daar een grote bewaker die je geboorteakte wilt hebben wat doe naar binnen sneaken of een list bedenken?")
				var taverne = prompt("Kies uit sneaken of list");
				if(taverne == "sneaken"){
					alert("Je sneakt naar binnen maar binnen kom je er achter dat het de vaste stek is van de bewakers de bewakers vermoorden je GAME OVER");
				}
				else if(taverne == "list"){
					alert("Je verzint een smoes dat je de nieuwe ober/serveerster bent dat lukt! Na 1 uurtje werken wordt je terug gehaald naar je eigen tijd GEFELICITEERD JE HEBT HET GEHAALD");
				}
			}
		}
		else if (stelen == "achterna rennen"){
			alert("Je rent achter de dader aan en je komt terecht in een vaag steegje daar wordt je gedood door de dader wat een hele bende bleek te zijn GAME OVER");
		}
	}
		 else if (verstoppen == "meelzak"){
			alert("De bewakers zien je pakken je op en ze vermoorden je GAME OVER");
		}
	
}


