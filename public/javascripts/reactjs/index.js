var names=['zhangsan','lisi','wangwu'];
var arr = [
    <h1>Hello world!</h1>,
<h2>React is awesome</h2>
];

var HelloMessage = React.createClass(
    {
        render: function(){
            return <div>
            Hello, {this.props.name} {this.props.id}
<button type="button" className="btn btn-primary">click</button>
    </div>
}
}
);

var NotesList = React.createClass(
    {
        render: function(){
            return (
                <ol>
                {this.props.children.map(function(node){
                    return <li>{node}</li>
                })}
        </ol>
)
}
}
);



React.render(
<NotesList>
<span>hello</span>
<span>world</span>
</NotesList>,
    document.getElementById('projectDialog')
);
