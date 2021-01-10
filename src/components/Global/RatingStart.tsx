import React, { Component, ReactElement } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

interface RatingStartProps {
    edit?: boolean,
    label?: string,
    size: number,
    value: number,
}

export default class RatingStart extends Component<RatingStartProps, any> {

    private renderStarts = (): React.ReactElement[] => {
        const { value } = this.props;
        let renderElement: ReactElement[] = [];

        for (let i = 1; i <= 5; i++) {
            const startR = <FontAwesomeIcon key={`start-rating-${i}`} className={`start ${i <= Math.round(value) ? "checked" : ""}`} icon={faStar} />
            renderElement.push(startR);
        }
        return renderElement;
    }

    render() {
        const { value } = this.props;
        return (
            <div className="start-rating">
                <span>Rating: </span>
                <span className={`start-number`}>{value.toFixed(1)}</span>
                {this.renderStarts()}
            </div>
        )
    }
}
