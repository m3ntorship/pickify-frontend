import type { ReactElement } from 'react';
import React from 'react';
import TrendingQuestion from '../../molecules/TrendeingQuestion/TrendingQuestion';
import { dummyData } from './dummyData';

const TrendingQuestions = (): ReactElement => {
  return (
    <>
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
