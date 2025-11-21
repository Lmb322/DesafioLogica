class getHero {
    constructor(name, age, type){
        this.name = name;
        this.age = age;
        this.type = type;
    }
    brainHero(atackHero) {
        switch (this.type){
          case "Mago":
          return "Magia"
          break;
          case "Guerreiro":
          return "Espada"
          break;
          case "Monge":
          return "artes marciais"
          break;
          case "Ninja":
          return "Shuriken"
          break;
        }
    }
}
let hero1 = new getHero("Odin", "30", "Monge")
let atackHero = hero1.brainHero()
console.log(`O ${hero1.type} atacou usando ${atackHero}`)