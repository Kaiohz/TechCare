import React from 'react';
import { Col, Row } from 'react-bootstrap';
import TechCareButton from '../TechCareButton';
import './MainPanel.css';



class MainPanel extends React.Component {
    render() {
        return (
            <>
                <br />
                <Row>
                    <Col lg={3} className="main-panel">
                        <TechCareButton text="Gestion de a bibliothèque de produits" iconClassName="main-buttons-icons" imgName="library" className="upper-buttons" variant="success" name="Bibliothèque" />
                    </Col>
                    <Col lg={3} className="main-panel">
                        <TechCareButton text="Gestion des demandes d'assistance SAV" iconClassName="main-buttons-icons" imgName="sav" className="upper-buttons" variant="success" name="Assistance SAV" />
                    </Col>
                    <Col lg={3} className="main-panel">
                        <TechCareButton text="Gestion des clients et de leurs affaires" iconClassName="main-buttons-icons" imgName="clients" className="upper-buttons" variant="success" name="Clients" />
                    </Col>
                    <Col lg={3} className="main-panel">
                        <TechCareButton text="Administration de l'application" iconClassName="main-buttons-icons" imgName="admin" className="upper-buttons" variant="success" name="Administration" />
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col className="main-panel">
                        <TechCareButton text="Gestion des rapports" iconClassName="main-buttons-icons" imgName="reports" className="bottom-buttons" variant="success" name="Rapports" />
                    </Col>
                </Row>
            </>
        );
    }
}

export default MainPanel;