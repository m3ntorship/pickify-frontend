import type { ReactElement } from 'react';
import React from 'react';
import Divider from '../../atoms/Divider/Divider';
import TrendingQuestion from '../../molecules/TrendeingQuestion/TrendingQuestion';
import { dummyData } from './dummyData';

const TrendingQuestions = (): ReactElement => {
  return (
    <>
      <p className="text-dark-grey">Trending Questions</p>
      <Divider type="horizontal" length="100%" />
      {dummyData.map((question) => (
        <div className="mt-3" data-testid="trending-question">
          <TrendingQuestion
            key={question.id}
            type={question.type}
            text={question.text}
          />
        </div>
      ))}
    </>
  );
};

export default TrendingQuestions;
