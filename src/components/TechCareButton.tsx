import React from 'react';
import Button from 'react-bootstrap/Button';

type MyProps = {
    variant: string;
    name: string;
    className: string;
    imgName: string;
    iconClassName: string;
    text: string
};

class TechCareButton extends React.Component<MyProps> {
    render() {
        return (
                <Button className={this.props.className} variant={this.props.variant}>
                    <img className={this.props.iconClassName} src={require(`../resources/img/${this.props.imgName}.svg`)}></img>
                    {this.props.name}
                    <p>{this.props.text}</p>
                </Button>
        );
    }
}

export default TechCareButton;