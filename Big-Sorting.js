//https://www.hackerrank.com/challenges/big-sorting/problem?isFullScreen=true
function bigSorting(unsorted) {
    return unsorted
          .sort((a, b) => {
              if (a.length == b.length) {
              return a > b ? 1 : -1;
          }
  
          return a.length - b.length;
      });
  }
  