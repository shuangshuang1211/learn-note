// Array.prototype.myReduce = function (callFn, initVal) {
//   const arr = this;
//   let acc = initVal !== undefined ? initVal : arr[0];
//   let startIndex = initVal !== undefined  ? 0 : 1;
//   console.log("++++ ", acc, arr);
  
//   for (let i = startIndex; i< arr.length; i++) {
    
//     acc = callFn.call(this, acc, arr[i], i, arr)
//   }
  
//   return acc;
// }

// const sumArr = [1,2,3].myReduce((acc, cur) => cur + acc, 0)
// // console.log('++++ sumArr', sumArr);



// function maxStackSize() {
//   // TODO
//   let count = 0;
//   try {
//     (function recurse() {
//       count++;
//       recurse();
//     })();
//   } catch(e) {
//     console.log('++++ e', e);
//     return count;
//   }
// }

// console.log(maxStackSize())

// 实现并发控制
// function parallel(taskItems = [], taskHandler, concurrency = 3) {

// }
// const task = item => new Promise(resolve => setTimeout(() => {console.log(item); resolve(item)}, 2000))

// parallel([1, 2, 3, 4, 5, 6], task, 2).then((result) => {
//   console.log('+++', result)
// })

// 实现并发控制
// function parallel(taskItems = [], taskHandler, concurrency = 3) {
//   // 实现并发控制
//   let currConcurrency = 0;
//   let nextIndex = 0;
//   const len = taskItems.length;
//   const result = new Array(len);

//   return new Promise((res, rej) => {
//     // 没有超过concurreny
//     function exectueFn() {
//       while (currConcurrency < concurrency && nextIndex < len) {
//         const currTaskItem = taskItems[nextIndex];
//         let index = nextIndex;
//         console.log('+++++ currTaskItem', currTaskItem);
        
//         try {
//           taskHandler(currTaskItem)
//             .then((val) => {
//                 console.log('++++ handler then', index);
//                 result[index] = val;
//             }).catch((err) => {
//               result[index] = err;
//             }).finally(() => {
//               exectueFn();
//               currConcurrency--;
//               if (currConcurrency === 0 && nextIndex === 6) {
//                 res(result);
//               }
//             })
//         } catch (err) {
//           result[index] = err;
//         }
//         nextIndex++;
//         currConcurrency++;
//       }
      
//     }
    
//     if (len === 0) {
//       res(result)
//     } else {
//       exectueFn();
//     }
    
    
//   });

// }
// const task = item => new Promise(resolve => setTimeout(() => {console.log(item); resolve(item)}, 2000))

// parallel([1, 2, 3, 4, 5, 6], task, 2).then((result) => {
//   console.log('++++', result)
// })


interface SingleNode {
  value: number;
  next: SingleNode | null
}
function linkSort(linkNode: SingleNode, next?: SingleNode): SingleNode {
  // const headNode = {
  //   value: 0,
  //   next: linkNode,
  // }
  // let currNode = 

  if (!linkNode.next) {
    return linkNode;
  }

  let pivot = quickSort1(linkNode, linkNode.next);
  if (pivot !== linkNode) {
    let currNext = pivot;
    while (currNext.next !== pivot) {
      currNext = currNext.next
    }
    currNext.next = null;
    linkNode = linkSort(linkNode, currNext)
  }
  pivot.next = linkSort(pivot.next, next)
  return linkNode;
}

function quickSort1(head, tail) {
  let pivot = head;
  let current = head.next;
  let prev = head;
  while (current !== tail ) {
    if (current.value < pivot.value) {
      prev = prev.next;
      [prev.value, current.value] = [current.value, prev.value];
    }
    current = current.next;
  }
  [pivot.value, prev.value] = [prev.value, pivot.value];
  return prev;
}
