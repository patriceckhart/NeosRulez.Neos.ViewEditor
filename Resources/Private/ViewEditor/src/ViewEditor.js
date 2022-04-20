import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {$get} from 'plow-js';

export default class ViewEditor extends PureComponent {

    static propTypes = {
        options: PropTypes.object
    };

    getView(route) {
        let xmlhttp = new XMLHttpRequest();
        let result = false;
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                let parser = new DOMParser();
                let doc = parser.parseFromString(xmlhttp.responseText, 'text/html');
                result = doc.body.innerHTML;
            }
        }
        xmlhttp.open('GET', route, false);
        xmlhttp.send();
        while (result === false) {
            console.error('View error');
        }
        return result;
    }

    render() {
        const route = $get('options.configuration.route', this.props);
        const id = $get('options.configuration.id', this.props);

        return (
            <div id={id} >
                <div className={id + '-wrapper'} dangerouslySetInnerHTML={{__html: this.getView(route)}} />
            </div>
        );
    }
}
