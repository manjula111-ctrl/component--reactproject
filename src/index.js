import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const  App = () => {
return (
<div className="ui container comments">
    <ApprovalCard>
    <div>
    <h4>Warning</h4>
  Are you sure you want to do this?
  </div>
    </ApprovalCard>

<ApprovalCard>
    <CommentDetail author="man"
    timeAgo="Today at 4:45 pm "
    content="i love my mother"
    avatar={faker.image.avatar()}
    />
   </ApprovalCard>

    <ApprovalCard>
      <CommentDetail author="jyo"
      timeAgo="Today at 6:00 pm"
      content="i like the story"
      avatar={faker.image.avatar()}
      />
   </ApprovalCard>

   <ApprovalCard>
      <CommentDetail  author="pra"
      timeAgo="Yesterday at 5:45 pm"
      content="nice blog post"
      avatar={faker.image.avatar()}
       />
     </ApprovalCard>

      <ApprovalCard>
       <CommentDetail author="kum"
        timeAgo="Tomorrow at 7:00 pm"
        content="i like to read"
        avatar={faker.image.avatar()}
        />
      </ApprovalCard>

</div>
);
};
ReactDOM.render(<App />, document.querySelector('#root'));