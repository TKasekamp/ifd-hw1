import React, {Component} from 'react';
import ReactDOM from 'react-dom';
/*
 Result knows how to display itself.
 */
const Comment = (props) => {
    let text = null;
    if (props.result == 'greater') {
        text = <p className="fail">{props.guess}: is greater than target</p>;
    }
    else if (props.result == 'lesser') {
        text = <p className="fail">{props.guess}: is lesser than target</p>;
    }
    else {
        text = <p className="win">{props.guess}: was correct</p>;
    }

    return (
        <div >
            {text}
            {props.children}
        </div>
    );
};

Comment.propTypes = {
    guess: React.PropTypes.number.isRequired,
    result: React.PropTypes.string.isRequired,
    children: React.PropTypes.node.isRequired,
}

const CommentList = (props) => {
    const commentElements = props.comments.map((comment) => {
        return (
            <Comment guess={comment.guess} result={comment.result} key={comment.id}>
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
        guess: React.PropTypes.number,
        id: React.PropTypes.number,
        result: React.PropTypes.string.isRequired
    })).isRequired
};

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            guess: ''
        };
    }

    handleAuthorChange(event) {
        this.setState({guess: event.target.value});
    }

    onSubmit() {
        this.props.onSubmit({guess: this.state.guess});
    }

    render() {
        return (
            <div className='comment-form'>
                <h3>Guess a number from 0 to 9</h3>
                <input
                    type="number"
                    placeholder="Your name"
                    value={this.state.guess}
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
            comments: [{guess: 3, id: 1, result: 'equal'}]
        };
    }

    handleCommentSubmit({guess, text}) {
        const lastComment = this.state.comments[this.state.comments.length - 1];
        this.setState({
            comments: this.state.comments.concat({guess, id: lastComment.id + 1, result: 'greater'})
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