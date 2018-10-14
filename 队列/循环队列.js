function Queue() {
  let items = [];
  this.enqueue = function (element) { //向队列添加元素，新的项只能添加到队列末尾
    items.push(element);
  }
  this.dequeue = function (element) { //从队列移除元素，最先添加的项最先被移除
    return items.shift();
  }
  this.front = function () { //查看队列头元素
    return items[0];
  }
  this.isEmpty = function () { //检查队列是否为空
    return items.length == 0;
  }
  this.size = function () { //返回队列的长度
    return items.length;
  }
  this.print = function () { //输出队列的元素
    console.log(items.toString());
  }
}

function hotPotato(nameList, num) {
  let queue = new Queue();
  for (let i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i]);
  }

  let eliminated = '';
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    eliminated = queue.dequeue();
    console.log(eliminated + '在击鼓传花游戏中被淘汰');
  }
  return queue.dequeue();
}

let names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
let winner = hotPotato(names, 7);
console.log('The winner is: ' + winner);