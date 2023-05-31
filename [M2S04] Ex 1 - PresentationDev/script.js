class Person 
{
    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }
    present() {
        console.log(`Olá, meu nome é $(this.name) e tenho ${this.age} anos e ${this.height} de altura.`);
    }
}
class PersonProfessional extends Person {
    constructor(name,age,height,profession){
        super(name,age,height);
        this.profession = profession;
    }
    present(){
        console.log(`Olá , meu nome é ${this.name} e tenho ${this.age} anos e ${this.height} de altura e meu trabalho é ${this.profession}`);
    }
}
const pessoa = new PersonProfessional("Cleiton",35,1.9,"Desenvolvedor Web");
pessoa.present();
