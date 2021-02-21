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
  let minimum
  let sortedArray = []
  while (array.length != 0) {
    minimum = findMinAndRemove(array)
    sortedArray.push(minimum)
  }
  return sortedArray
}

//let array = [2, 3, 4, 5, 6, 7]
//find the minimum element
//grab the first element then compare it to 2nd element if its greater or less than first
//remove the one which is smaller
//return minimum element

// let unsorted = [12, 10, 9, 14, 1, 3, 5, 11, 6, 15, 16, 13, 2, 4, 8, 7]
// create variable minimum and empty array to store minimum element
//