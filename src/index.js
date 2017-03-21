import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const Comment = (props) => {
    return (
        <div className="comment">
            <p className="comment-author">
                {props.author}
            </p>
            {props.children}
        </div>
    );
};

Comment.propTypes = {
    author: React.PropTypes.number.isRequired,
    children: React.PropTypes.node.isRequired,
}

const CommentList = (props) => {
    const commentElements = props.comments.map((comment) => {
        return (
            <Comment author={comment.author} key={comment.id}>
            </Comment>
        );
    });
    return (
        <div className="comment-list">
            <h3>Previous guesses:</h3>
            {commentElements}
        </div>
    );
};

CommentList.propTypes = {
    comments: React.PropTypes.arrayOf(React.PropTypes.shape({
        author: React.PropTypes.number,
        id: React.PropTypes.number
    })).isRequired
};

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: ''
        };
    }

    handleAuthorChange(event) {
        this.setState({author: event.target.value});
    }

    onSubmit() {
        this.props.onSubmit({author: this.state.author});
    }

    render() {
        return (
            <div className='comment-form'>
                <h3>Guess a number from 0 to 9</h3>
                <input
                    type="number"
                    placeholder="Your name"
                    value={this.state.author}
                    onChange={this.handleAuthorChange.bind(this)}
                />
                <button className='comment-form' onClick={this.onSubmit.bind(this)}>
                    Submit comment
                </button>
            </div>
        );
    }
}
CommentForm.propTypes = {
    onSubmit: React.PropTypes.func.isRequired,
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [{author: 3, id: 1}]
        };
    }

    handleCommentSubmit({author, text}) {
        const lastComment = this.state.comments[this.state.comments.length - 1];
        this.setState({
            comments: this.state.comments.concat({author, id: lastComment.id + 1})
        });
    }

    render() {
        return (
            <div className='app'>
                <h1>Game lobby</h1>
                <CommentForm onSubmit={this.handleCommentSubmit.bind(this)}/>
                <CommentList comments={this.state.comments}/>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);