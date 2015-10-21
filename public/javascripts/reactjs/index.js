var HelloMessage = React.createClass(
    {
        render: function () {
            return <div>
                Hello, {this.props.name} {this.props.id}
                <button type="button" className="btn btn-primary">click</button>
            </div>
        }
    }
);

var NotesList = React.createClass(
    {
        render: function () {
            return (
                <ol>
                    {this.props.children.map(function (node) {
                        return <li>{node}</li>
                    })}
                </ol>
            )
        }
    }
);
var MyComponent = React.createClass({
    handleClick: function() {
        React.findDOMNode(this.refs.myTextInput).focus();
    },
    render: function() {
        return (
            <div>
                <input type="text" ref="myTextInput" />
                <input type="button" value="Focus the text input" onClick={this.handleClick} />
            </div>
        );
    }
});

var UserGist = React.createClass({
    getInitialState:function(){
        return {
            username:"",
            lastGistUrl:""
        }
    },
    componentDidMount:function(){
        $.get(this.props.source, function(data){
            var lastGist = data[0];
            console.log(data);
            if(this.isMounted()){
                this.setState({
                    username: lastGist.owner.login,
                    lastGistUrl: lastGist.html_url
                })
            }
        }.bind(this));
    },

    componentWillMount:function(){
        console.log(123);
    },

    render: function() {
        return (
            <div>
                <HelloMessage name="hello" id="world"/>
                {this.state.username}'s last gist is
                <a href={this.state.lastGistUrl}>here</a>.
            </div>
        );
    }
});



React.render(
    <UserGist source="https://api.github.com/users/octocat/gists" />,
    document.getElementById('projectDialog')
);
