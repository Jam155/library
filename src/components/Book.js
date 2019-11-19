import React, {Component} from 'react';

class Book extends Component {

    render() {

        const {title, author, isbn} = this.props.book;

        return (
            <div className="book">
                <div className="book__isbn">{isbn}</div>
                <img className="book__image" src="https://upload.wikimedia.org/wikipedia/en/f/f4/Ancillary_Sword_Orbit_cover.jpg"/>
                <div className="book__title">{title}</div>
                <div className="book__author">{author}</div>
            </div>
        )

    }

}

export default Book;