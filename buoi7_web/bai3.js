function Post(title,body,author,views,comment, isLive){
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = views;
    this.comment = comment;
    this.isLive = isLive; 
}
let comment = [
    {author: 'anh Huân', body: 'lewlew'},
    {author: 'anh Huân', body: 'lewlew'}
]
let post =  new Post('ahihi','anh Hoàng', 'abc',100,comment,true);
console.log(post);
