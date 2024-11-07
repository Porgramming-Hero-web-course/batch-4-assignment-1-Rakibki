{
  // start *
  // Problem 2 
  const removeDuplicates = (Numbers: number[]): number[] => {
    const filterArr: number[] = [];
    
    for (let i: number = 0; i < Numbers.length; i++) {
      if (!filterArr.includes(Numbers[i])) {
        filterArr.push(Numbers[i]);
      }
    }

    return filterArr.sort();
  };

  // end
}
