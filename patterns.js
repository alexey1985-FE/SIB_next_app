//========================================================================================================================================================
//                                 ПАТТЕРНЫ ПРОЕКТИРОВАНИЯ!!!!!!!!!!!!!

//                                      1.CONSTRUCTOR
//ES 5
//=============================
// function Server(name, ip) {
// 	this.name = name;
// 	this.ip = ip
// }

// Server.prototype.getUrl = function() {
// 	return `https://${this.ip}:80`
// }
//=============================
//ES 6

// class Server {
// 	constructor(name, ip) {
// 		this.name = name;
// 		this.ip = ip;
// 	}

// 	getUrl() {
// 		return `https://${this.ip}:80`;
// 	}
// }

// const aws = new Server('AWS German', '34.54.32.43');
// console.log(aws.getUrl());

//========================================================================================================================================================
//                                        2. FACTORY

// class SimpleMembership {
// 	constructor(name) {
// 		this.name = name;
// 		this.cost = 50;
// 	}
// }

// class StandardMembership {
// 	constructor(name) {
// 		this.name = name;
// 		this.cost = 150;
// 	}
// }
// class PremiumMembership {
// 	constructor(name) {
// 		this.name = name;
// 		this.cost = 500;
// 	}
// }

// class MemberFactory {
// 	static list = {
// 		simple: SimpleMembership,
// 		standard: StandardMembership,
// 		premium: PremiumMembership,
// 	};

// 	create(name, type = 'simple') {
// 		const Membership = MemberFactory.list[type] || MemberFactory.list.simple;
// 		const member = new Membership(name);
// 		member.type = type;
// 		member.define = function () {
// 			console.log(`${this.name} (${this.type}) ${this.cost}`);
// 		};
// 		return member;
// 	}
// }

// const factory = new MemberFactory()

// const members = [
// 	factory.create('Alexey', 'simple'),
// 	factory.create('Elena', 'premium'),
// 	factory.create('Ivan', 'standard'),
// 	factory.create('Petr'),
// ]

// members.forEach(m => {
// 	m.define()
// })
//========================================================================================================================================================
//                                           3. PROTOTYPE

// const car = {
// 	wheels: 4,

// 	init() {
// 		console.log(`У меня есть ${this.wheels} колеса, мой владелец ${this.owner}`);
// 	},
// };

// const carWithOwner = Object.create(car, {
// 	owner: {
// 		value: 'Алексей'
// 	}
// })

// carWithOwner.init()
// console.log(carWithOwner.__proto__ === car);
//========================================================================================================================================================
//                                           4. SINGLETON

// class Database {
// 	constructor(data) {
// 		if (Database.exists) {
// 			return Database.instanse;
// 		}

// 		Database.instanse = this;
// 		Database.exists = true;
// 		this.data = data;
// 	}

// 	getData() {
// 		return this.data;
// 	}
// }

// const mongo = new Database('MongoDB')
// console.log(mongo.getData());

// const mysql = new Database('MySQL')
// console.log(mysql.getData());

