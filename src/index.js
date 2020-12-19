import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author={faker.name.firstName() + " " + faker.name.lastName()}
                    timeAgo={faker.date.recent(7).toLocaleString()}
                    image={faker.image.avatar()}
                    message={faker.lorem.sentence()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author={faker.name.firstName() + " " + faker.name.lastName()}
                    timeAgo={faker.date.recent(7).toLocaleString()}
                    image={faker.image.avatar()}
                    message={faker.lorem.sentence()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author={faker.name.firstName() + " " + faker.name.lastName()}
                    timeAgo={faker.date.recent(7).toLocaleString()}
                    image={faker.image.avatar()}
                    message={faker.lorem.sentence()}
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));