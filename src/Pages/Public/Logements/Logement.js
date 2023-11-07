import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import "./Logement.css";

import Carroussel from '../../../Components/Carroussel/Carroussel';
import InfosLogement from '../../../Components/InfosLogement/InfosLogement';
import Tags from '../../../Components/Tags/Tags';
import Profil from '../../../Components/Profil/Profil';
import Stars from '../../../Components/Stars/Stars';
import DropDown from '../../../Components/DropDown/DropDown';

import ServiceLogement from "../../../_Services/logements.service.js";

const Logement = () => {

    const [logement, setlogement] = useState({});
    const [waiting, setwaiting] = useState(true);
    let { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {

        getInfo();

        // eslint-disable-next-line
    }, [])

    const getInfo = async () => {
        await ServiceLogement.GetLogementById(id)
            .then((data) => {
                setlogement(data);
                if (data === undefined) {
                    navigate("/404");
                }
                setwaiting(false);
            })
            .catch((error) => {
                console.log(error)
            })
    }

    if (waiting) return (<h3 className='loading'>Chargement...</h3>)

    return (
        <div className='logement'>

            <Carroussel image={logement.pictures} />

            <section className='logement-infos'>
                <div className='logement-infos-tags-wrapper'>
                    <InfosLogement title={logement.title} location={logement.location} />
                    <ul className='tags'>
                        {
                            logement.tags.map((tag) =>
                            (
                                <Tags key={tag} nameTag={tag} />
                            ))}
                    </ul>
                </div>
                <div className='logement-profil-stars-wrapper'>
                    <Profil name={logement.host.name} picture={logement.host.picture} />
                    <Stars rating={logement.rating} />
                </div>
            </section>
            <section className='logement-dropdown'>
                <DropDown title="Description" content={<p>{logement.description}</p>} fontsize="special-fontsize" />
                <DropDown title="Équipements" content={logement.equipments.map((equipment) => (<p key={equipment}>{equipment}</p>))} fontsize="special-fontsize" />
            </section >

        </div >
    );

};

export default Logement;