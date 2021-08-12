import type { ReactElement } from 'react';
import React from 'react';
import Divider from '../../atoms/Divider/Divider';
import TrendingQuestion from '../../molecules/TrendeingQuestion/TrendingQuestion';
import { dummyData } from './dummyData';

const TrendingQuestions = (): ReactElement => {
  return (
    <>
      <p className="text-dark-grey mb-3">Trending Questions</p>
      <Divider type="horizontal" length="100%" />
      <div className="mt-4">
        {dummyData.map((question) => (
          <div
            className="mt-3"
            data-testid="trending-question"
            key={question.id}
          >
            <TrendingQuestion
              type={question.type}
              postCaption={question.text}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default TrendingQuestions;
