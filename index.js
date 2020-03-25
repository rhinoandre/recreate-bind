Function.prototype.bind = function(context, ...args) {
  const originThis = this;
  return function (...params) {
    return originThis.call(context, ...args, ...params)
  }
}

function sum(v1, v2) {
  console.log(v1+v2)
}
const test = sum.bind(null, 1)

test(2)

const object1 = {
  name: 'Rhino',
  logName: function() {
    console.log(this.name)
  }
}
object1.logName()

const object2 = {
  name: 'André',
}
object1.logName.bind(object2)()


