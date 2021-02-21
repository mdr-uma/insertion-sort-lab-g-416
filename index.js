function findMinAndRemove(array){
  let minElement = array[0]
  let minIndex = 0
  for (let i = 0; i < array.length; i++) {
    if(array[i] < minElement) {
      minElement = array[i]
      minIndex = i 
    }
  }
  array.splice(minIndex, 1)
  return minElement
}

function insertionSort(array){

}

//find the minimum element
//grab the first element then compare it to 2nd element if its greater or less than first
//remove the one which is greater
//repeate it until small element left in the array
//return minimum element