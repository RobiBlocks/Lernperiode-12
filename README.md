# Lernperiode-12

07.11.2025 – 19.12.2025

## Fertiges Projekt

Diese Webapplikation ermöglicht das Verwalten meiner privaten SWU-Kartensammlung. Auf der Startseite werden einem alle Karten angezeigt und man kann angeben welche Karte man wie oft besitzt. Karten, die man gar nicht besitzt sind dabei ausgegraut. Aber Karten, die man mindestens einmal besitzt erscheinen hell.

- Das Frontend wurde mit React realisiert und es wurden verschiedene Komponenten implementiert.
- Das Backend wurde mit Node.js und Express realisiert.
- Die Datenbank basiert auf MongoDB und läuft auf MongoDB Atlas.

<img src="https://github.com/RobiBlocks/Lernperiode-12/blob/main/swu-collection-demo.gif" alt="Game Lounge" width="80%">

## Technologien

In dieser Lernperiode möchte ich mich mit React beschäftigen.

**Link zur API**: [www.swu-db.com/api](https://www.swu-db.com/api)

## Projektbeschreibung

Ich möchte eine Webseite erstellen, auf welcher man einige Star Wars Karten sieht. Man kann jede Karte vergrössern und hinterlegen, welche Karte man wie oft besitzt. Ausserdem soll es eine Such- und Filterfunktion geben.

Dabei orientiere ich mich an [SWUDB](https://swudb.com/). Der grosse Unterschied ist, dass meine Webseite für das Sammeln optimiert ist, anstatt für den Deckbau.

## Epics

1. Als Spieler möchte ich, dass die Bilder der Karten angezeigt werden.
2. Als Spieler möchte ich angeben können, welche Karten man wie oft besitzt.
3. Als Spieler möchte ich nach bestimmten Karten suchen können.
4. Als Spieler möchte ich die Karten filtern können.
5. Als Spieler möchte ich zwischen einer Kachel- und Listenansicht wechseln können.
6. Als Spieler möchte ich eine CSV-Datei hochladen können, um neue Karten zur Sammlung hinzuzufügen.

**Falls Zeit:**

7. Als Spieler möchte ich, dass man eine Karte vergrössern kann.
8. Als Spieler möchte ich eine Dateilansicht jeder Karte sehen, damit ich mehr Infos erhalte.

## 07.11.2025

*Projektidee finden und ausprobieren*

✍️ Heute habe ich meine Projektidee sowie die Epics geschrieben. Anschliessend habe ich begonnen eine MongoDB zu erstellen. Währenddessen bin ich auf die Idee gekommen nach einer SWU API zu suchen und habe eine gefunden. Nachdem ich die Idee mit meiner Lehrperson besprochen habe, habe ich die API mit einfachem JS ausprobiert und habe es geschafft alle Bilder eines Sets anzeigen zu können. (62 Wörter)

## 14.11.2025 (Epic-Nr: 1)

*siehe issues*

✍️ Heute habe ich zu Beginn mein GitHub Repo geklont (zum ersten Mal). Danach habe ich ein React Projekt mithilfe von Vite erstellt. Im Anschluss habe ich mithilfe eines Tutorials meinen ersten Komponenten implementiert, welcher alle Karten eines Sets anzeigen soll. Dabei hatte ich CORS Probleme, die ich mithilfe von Claude AI lösen konnte. Zum Schluss habe ich noch ein paar CSS-Rules angepasst und mein Repo gepusht. (66 Wörter)

## 21.11.2025 (Epic-Nr: 2)

*siehe issues*

✍️ Heute habe ich zuerst meine *.tsx* Dateien in*.jsx* konvertiert, weil ich in diesem Projekt nur React und noch kein TypeScript erlernen möchte. Anschliessend habe ich mich um die Buttons gekümmert, mit welchen man angeben kann, wie oft man welche Karte besitzt. Durch die Knöpfe verändert sich auch die Zahl zwischen den beiden Knöpfen. Danach habe ich noch implementiert, dass Karten, welche man besitzt heller erscheinen als Karten, welche man nicht besitzt. Zum Abschluss habe ich noch den Hover-Effekt angepasst, da nicht mehr alle Karten gleich dunkel wurden beim drüber hovern. (90 Wörter)

## 28.11.2025 (Epic-Nr: 2)

*krank*

✍️ Heute war ich krank. (4 Wörter)

## 05.12.2025 (Epic-Nr: 2)

*siehe issues*

✍️ Heute habe ich mir den MERN Stack angesehen und gelernt wie er funktioniert. Da ich das Frontend schon erstellt habe, musste ich mich heute um das Backend kümmern. Ich habe die Ordner umstrukturiert, die Connection aufgebaut, die Mongo DB erstellt und die Records erstellt. Dazu habe ich mir folgendes Video zur Hilfe genommen: https://www.youtube.com/watch?v=4nKWREmCvsE. (53 Wörter)

## 12.12.2025 (Epic-Nr: 2)

*Teilnahme an der Studie*

✍️ Heute habe ich an einer Studie teilgenommen.

## 19.12.2025 (Epic-Nr: 2)

*siehe issues*

✍️ Heute habe ich mich auf das Backend konzentriert. Ich habe Schemas für die Karten erstellt und Controller für die einzelnen Routen hinzugefügt. Dabei habe ich gemerkt, dass das Tutorial sehr unbrauchbar ist und habe nun eine ausführliche und verständliche tutorialreihe entdeckt, welche den MERN Stack erklärt. Nun fehlt noch die Verknüpfung zwischen dem Frontend und dem Backend. (57 Wörter)

## Reflexion

In dieser Lernperiode habe ich gelernt, wie ich Git in meinen Lernatelier Workflow einbauen kann. Ausserdem kenne ich einige Grundlagen des MERN (MongoDB, Express, React und Node.js) und kann Teile davon implementieren.
Das einzige Probleme in dieser Lernperiode war, dass ich erst sehr spät gemerkt habe, dass meine ausgewählten Technologien dem MERN Stack entsprechen und dadurch erst spät geeignete Erklärungen im Internet fand.
Nächste Lernperiode möchte ich mich im Vorhinein besser über meine Technologien informieren und mein Wissen im MERN Stack weiter vertiefen. (83 Wörter)
