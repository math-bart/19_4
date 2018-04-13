//ja to widzę tak (bo jak zrozumiałem, jeśli dany komentarz nie jest zmieniany, to trzeba i tak go zwrócić w każdym case):

import {ADD_COMMENT} from './actions';
import {REMOVE_COMMENT} from './actions';
import {EDIT_COMMENT} from './actions';
import {THUMB_UP_COMMENT} from './actions';
import {THUMB_DOWN_COMMENT} from './actions';

function comments(state = [], action) {
	switch(action.type) {
		case ADD_COMMENT:
			return [{
				id: action.id,
				text: action.text
				votes: 0
			}
			, ...state];
		case REMOVE_COMMENT:
			return
				state.filter(comment => comment.id !== action.id);
		case EDIT_COMMENT:
			return state.map(comment => {
				if(comment.id === action.id) {
					return {...comment, text: action.text} 
				} else {
				return comment};
			});
		case THUMB_UP_COMMENT:   
			return state.map(comment => {
				if(comment.id === action.id) {
					return {...comment, votes: comment.votes + 1}
				} else {
				return comment};
			});
		case THUMB_DOWN_COMMENT:   
			return state.map(comment => {
				if(comment.id === action.id) {
					return {...comment, votes: comment.votes - 1}
				} else {
				return comment};
			});
		
		default:
			return state;
	}
}

//ale widziałem też takie rozwiązania, z tym, że tu moim zdaniem nie zwrócą się nie spełniające warunku komentarze w case edit i thumb. Co Ty na to?

import {ADD_COMMENT} from './actions';
import {REMOVE_COMMENT} from './actions';
import {EDIT_COMMENT} from './actions';
import {THUMB_UP_COMMENT} from './actions';
import {THUMB_DOWN_COMMENT} from './actions';

function comments(state = [], action) {
	switch(action.type) {
		case ADD_COMMENT:
			return [{
				id: action.id,
				text: action.text
				votes: 0
			}
			, ...state];
		case REMOVE_COMMENT:
			return
				state.filter(comment => comment.id !== action.id);
		case EDIT_COMMENT:
			return state.map(comment => {
				if(comment.id === action.id) {
					comment.text= action.text} 
				return comment;
			});
		case THUMB_UP_COMMENT:   
			return state.map(comment => {
				if(comment.id === action.id) {
					comment.votes= comment.votes + 1}
				return comment;
			});
		case THUMB_DOWN_COMMENT:   
			return state.map(comment => {
				if(comment.id === action.id) {
					comment.votes= comment.votes - 1}
				return comment;
			});
		default:
			return state;
	}
}