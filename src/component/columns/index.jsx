
import PropTypes from 'prop-types';
import React     from 'react';

export default class Columns extends React.Component {
    static propTypes = {
        ids            : PropTypes.array.isRequired,
        handleBtnClick : PropTypes.func.isRequired
    }

    composeColumns(ids) {
        const elements = [];

        for (const id in ids) {
            const name = ids[id];

            elements.push(
                <div key={id} className="column">
                    <a id={name} className="button" onClick={this.props.handleBtnClick}>{name}</a>
                </div>
            );
        }

        return elements;
    }

    render() {
        const content = this.composeColumns(this.props.ids);

        return (
            <div className="columns">
                {content}
            </div>
        );
    }
}
