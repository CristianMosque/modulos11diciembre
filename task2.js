export class FriendNames {
    constructor(name1,name2,name3) {
      this.name1 = name1;
      this.name2 = name2;
      this.name3 = name3;
    }
    info(){
      return `name1: ${this.name1} name2: ${this.name2} name3: ${this.name3} `;
    }
  }
  const names = new FriendNames(process.argv[3],process.argv[4],process.argv[5]);
  console.log(names.info())