
function CreateClient(name, lastName, id = 0, status = false) {
    this.name = name;
    this.lastName = lastName;
    this.id = id;
    this.status = status;

}
Object.prototype.show = function () {
    return `${this.id} ${this.name} ${this.lastName} ${this.status}`
}
let user1 = new CreateClient('Ivan', 'Ivanov', '#1234', true);
console.dir(CreateClient);
console.dir(user1);
console.log(user1.show());

let user2 = new CreateClient("Sergey", 'Novikov');
console.dir(user2);
console.log(user2.show());
