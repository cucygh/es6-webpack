/* eslint-disable */
{
  // ES3,ES5 数据保护
  var Person = function() {
    var data = {
      name: 'es3',
      sex: 'male',
      age: 15
    }
    this.get = function(key) {
      return data[key]
    }
    this.set = function(key, value) {
      if (key !== 'sex') {
        data[key] = value
      }
    }
  }

  // 声明一个实例
  var person = new Person();
  // 读取
  console.table({name: person.get('name'), sex: person.get('sex'), age: person.get('age')});
  // 修改
  person.set('name', 'es3-cname');
  console.table({name: person.get('name'), sex: person.get('sex'), age: person.get('age')});
  person.set('sex', 'female');
  console.table({name: person.get('name'), sex: person.get('sex'), age: person.get('age')});
} {
  // ES5
  var Person = {
    name: 'es5',
    age: 15
  };

  Object.defineProperty(Person, 'sex', {
    writable: false,
    value: 'male'
  });

  console.table({name: Person.name, age: Person.age, sex: Person.sex});
  Person.name = 'es5-cname';
  console.table({name: Person.name, age: Person.age, sex: Person.sex});
  try {
    Person.sex = 'female';
    console.table({name: Person.name, age: Person.age, sex: Person.sex});
  } catch (e) {
    console.log(e);
  }
} {
  // ES6
  let Person = {
    name: 'es6',
    sex: 'male',
    age: 15
  };

  let person = new Proxy(Person, {
    get(target, key) {
      return target[key]
    },
    set(target,key,value){
      if(key!=='sex'){
        target[key]=value;
      }
    }
  });

  console.table({
    name:person.name,
    sex:person.sex,
    age:person.age
  });

  try {
    person.sex='female';
  } catch (e) {
    console.log(e);
  } finally {

  }

}
