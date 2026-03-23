type Obj = {
    name: string;
    getThis: () => Obj;
}

const obj4: Obj = {
  name: "obj4",
  getThis() {
    return this;
  },
};

const obj5: Obj = { name: "obj5", getThis: obj4.getThis };

obj5.getThis = obj4.getThis;
console.log(obj5.getThis()); // { name: 'obj5', getThis: [Function: getThis] }