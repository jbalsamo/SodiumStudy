var answersClassName="ans-sec";

EQuestions = React.createClass({
    renderAnswers() {
        // Get tasks from this.props.answers
        console.log("Building Answer list");
        return this.props.answers.map((answer) => {
            return <Answer onClick={this.props.nextStep} key={this.props.step + answer.value} answer={answer} answerClassName="answer" />
        });
    },
    render() {

        return (
            <div>
                <QuesHead step={this.props.step} quesCount={this.props.quesCount} />
                <hr/>
                <div className="text-center">
                    <p>{this.props.question.question} </p>
                </div>
                <div className="text-center">
                    <div className={answersClassName}>
                        {this.renderAnswers()}
                    </div>
                </div>
            </div>
        )
    }
});