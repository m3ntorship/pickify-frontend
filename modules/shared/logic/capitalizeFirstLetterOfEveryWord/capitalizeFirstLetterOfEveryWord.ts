export const capitalizeFirstLetterOfEveryWord = (name: string): string => {
  const nameArr = name.toLowerCase().split(' ');
  const capitalizedNameArr = nameArr.reduce((acc: string[], curr: string) => {
    const capitalizedWord = curr.charAt(0).toUpperCase() + curr.substring(1);
    acc.push(capitalizedWord);
    return acc;
  }, []);

  return capitalizedNameArr.join(' ');
};
