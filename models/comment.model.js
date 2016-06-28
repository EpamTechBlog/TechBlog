var mongoose = require("mongoose"),
Schema = mongoose.Schema,
var Article = require('./article.model');
var User = require('./user.model');

var CommentSchema = new Schema({
	articleId: {
		type: mongoose.Schema.Types.ObjectId, 
		ref: 'Article'
	},
	comments: [{
		creator: {
			type: mongoose.Schema.Types.ObjectId, 
			ref: 'User'
		}, 
		content: String, 
		time: Date,
		comments2comments:[{
			replyer:{
				type: mongoose.Schema.Types.ObjectId, 
				ref: 'User'
			}
			time: Date,
			content: String,
			atter:{
				type: mongoose.Schema.Types.ObjectId, 
				ref: 'User'
			}
		}],
	}],
});

/*
var CommentSchema = new Schema({
	articleId: {
		type: mongoose.Schema.Types.ObjectId, 
		ref: 'Article'
	},
	commentorId:{
		type: mongoose.Schema.Types.ObjectId, 
		ref: 'User'
	},
	commentId:{
		type: mongoose.Schema.Types.ObjectId, 
		ref: 'Comment'
	},
	content: String,
	time: Date
});*/

module.exports = mongoose.model('Comment', CommentSchema);