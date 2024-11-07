{
  // start
  // Problem 3:
  const countWordOccurrences = (Sentence: string, Word: string): number => {
    let count: number = 0;
    const SentenceArr: string[] = Sentence.split(" ");

    for (let i: number = 0; i < SentenceArr.length; i++) {
      if (Word.toLowerCase() === SentenceArr[i].toLowerCase()) {
        count++;
      }
    }

    return count;
  };

  // end
}