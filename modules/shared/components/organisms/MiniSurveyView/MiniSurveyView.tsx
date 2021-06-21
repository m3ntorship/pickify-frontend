import React from 'react';
import type { FC, ReactElement } from 'react';
// import Image from 'next/image';
import MiniSurveyViewOptions from '../../molecules/MiniSurveyViewOptions/MiniSurveyViewOptions';
import PostViewHeader from '../../molecules/PostViewHeader/PostViewHeader';
import PostViewFooter from '../../molecules/postFooter/PostFooter';
import type { IMiniSurveyView } from './IMiniSurveyView';

const MiniSurveyView: FC<IMiniSurveyView.IProps> = ({ post }): ReactElement => {
  // const indexOfImage = 0;
  return (
    <div className="bg-white p-m shadow-soft rounded-md space-y-4" id={post.id}>
      <PostViewHeader
        id={post.id}
        date={new Date(post.created_at)}
        name="ayoub"
        profilePic=""
        isHidden={post.is_hidden}
        handlePostOptionsIconClick={(): boolean => {
          return true;
        }}
      />
      <div>
        <h3 className="font-normal text-md">{post.caption}</h3>
      </div>
      {/* <div>
        {post.media[indexOfImage].url && (
          <Image
            width={600}
            height={450}
            layout="responsive"
            src={post.media[indexOfImage].url}
            className="rounded-md"
          />
        )}
      </div> */}
      <MiniSurveyViewOptions optionsGroups={post.options_groups} />
      <PostViewFooter />
    </div>
  );
};
export default MiniSurveyView;
