# CRUD-with-Koa-and-React-Native
... for a job interview


<br/>
<br/>
![](https://i.imgur.com/0HXfxay.png)
<br/>
<br/>
# Assumptions
##### The API should be secured.
This was done through JSON web tokens.

# Liberties
##### I used KoaJS instead of ExpressJS at the API server.
Because it lets me await for a Promise in a secuencial-_like_ manner.
![](https://i.imgur.com/g8TZal2.png)

# Features
##### The app is simple to read.
To achieve this no mutation was performed, and rigid architectural principles were followed as in: AppContainer.js contains _all dispatch ocurrences_, as it has the responsability of giving useful functions and data to its childs.

No child of AppContainer.js had to worry about dispatching an event, or keeping its data consistent with the rest of the app.



# Biases
##### I enjoy ReduxJS because I prefer _this_
![](https://css-tricks.com/wp-content/uploads/2016/03/redux-article-3-02.svg)
##### over _this_
![](https://css-tricks.com/wp-content/uploads/2016/03/redux-article-3-01.svg)


# oh and about Python, check this out!
##### No conditional are needed when you model your solution exhaustively! This is what identity functions are good for!
![](https://i.imgur.com/SnV0Bly.png)
