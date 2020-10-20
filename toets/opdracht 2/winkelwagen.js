function Winkelwagen(Sneaker, aantal, rood, L) {
    let artikel = Sneaker;
    let voorraad = aantal;
    let kleur = rood;
    let maat = L;
  

    this.getVoorraad = function () {
        return voorraad;
    }
    this.getArtikel = function () {
        return artikel;
    }
    this.getKleur = function(){
        return kleur;
    }
    this.getMaat = function(){
        return maat;
    }
    this.showVoorraad = function () {
        console.log('De voorraad van : ' + artikel + ' is ' + voorraad);
    }     

    this.showWinkelwagen = function(){
        console.log('Aantal items in winkelwagen :' + artikel);
    }

    this.showKleur = function(){
        console.log('Kleur van het item :' + kleur);
    }

    this.showMaat = function(){
        console.log('de maat van het item :' + maat);
    }

}




