import type { ReactElement } from 'react';
import React from 'react';
import Box from '../../atoms/Box/Box';
import TrendingQuestion from '../../molecules/TrendeingQuestion/TrendingQuestion';
import { dummyData } from './dummyData';

const TrendingQuestions = (): ReactElement => {
  return (
    <Box isWhiteColor>
      <>
        <Box.Header withDevider>
          <p className="text-dark-grey text-sm font-normal">
            Trending Questions
          </p>
        </Box.Header>
        <Box.Body>
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
        </Box.Body>
      </>
    </Box>
  );
};

export default TrendingQuestions;
