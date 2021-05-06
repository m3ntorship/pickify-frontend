interface IArticles {
  title: string;
  description: string;
}
const articles: IArticles[] = [
  { title: 'new deal', description: 'tesla is making a new deal' },
];

const getArticlesListPromise = async (): Promise<IArticles[]> => {
  const data: IArticles[] = await Promise.resolve(articles);
  return data;
};

export default getArticlesListPromise;
