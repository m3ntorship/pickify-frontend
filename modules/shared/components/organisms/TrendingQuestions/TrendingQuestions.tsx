import type { ReactElement } from 'react';
import React from 'react';
import Layer from '../../atoms/Layer/Layer';
import TrendingQuestion from '../../molecules/TrendeingQuestion/TrendingQuestion';
import { dummyData } from './dummyData';

const TrendingQuestions = (): ReactElement => {
  return (
    <Layer isWhiteColor>
      <>
        <Layer.Header withDevider>
          <p className="text-dark-grey text-sm font-normal">
            Trending Questions
          </p>
        </Layer.Header>
        <Layer.Body>
          <div>
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
        </Layer.Body>
      </>
    </Layer>
  );
};

export default TrendingQuestions;
