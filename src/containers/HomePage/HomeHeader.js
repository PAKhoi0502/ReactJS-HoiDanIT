import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import logo from '../../assets/logo.svg'
import { FormattedMessage } from 'react-intl';
class HomeHeader extends Component {

    render() {

        return (
            <React.Fragment>
                <div className='home-header-container'>
                    <div className='home-header-content'>
                        <div className='left-content'>
                            <i className='fas fa-bars'></i>
                            <img className='header-logo' src={logo} />
                        </div>
                        <div className='center-content'>
                            <div className='child-content'>
                                <div><b><FormattedMessage id='home-header.specialty'></FormattedMessage></b></div>
                                <div className='subs-title'><FormattedMessage id='home-header.search-doctor'></FormattedMessage></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id='home-header.health-facility'></FormattedMessage></b></div>
                                <div className='subs-title'><FormattedMessage id='home-header.select-room'></FormattedMessage></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id='home-header.doctor'></FormattedMessage></b></div>
                                <div className='subs-title'><FormattedMessage id='home-header.select-doctor'></FormattedMessage></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id='home-header.fee'></FormattedMessage></b></div>
                                <div className='subs-title'><FormattedMessage id='home-header.check-health'></FormattedMessage></div>
                            </div>
                        </div>
                        <div className='right-content'>
                            <div className='support'><i className='fas fa-question-circle'></i><FormattedMessage id='home-header.support'></FormattedMessage></div>
                            <div className='language-vi'>VN</div>
                            <div className='language-eng'>EN</div>
                        </div>
                    </div>

                </div>
                <div className='home-header-banner'>
                    <div className='content-up'>
                        <div className='title-1'><FormattedMessage id='banner-header.title-1'></FormattedMessage></div>
                        <div className='title-2'><FormattedMessage id='banner-header.title-2'></FormattedMessage></div>
                        <div className='search'>
                            <i className='fas fa-search'></i>
                            <input type='text' placeholder='Tìm chuyên khoa khám bệnh' />
                        </div>
                        <div className='download-app'>
                            <div className='download-google-play'></div>
                            <div className='download-app-store'></div>
                        </div>
                    </div>
                    <div className='content-down'>
                        <div className='options'>
                            <div className='option-child'>
                                <div className='icon-child'><i className='fas fa-hospital'></i></div>
                                <div className='text-child'><FormattedMessage id='banner-header.specialist-examination'></FormattedMessage></div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i className='fas fa-mobile-alt'></i></div>
                                <div className='text-child'><FormattedMessage id='banner-header.remote-check'></FormattedMessage></div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i className='fas fa-procedures'></i></div>
                                <div className='text-child'><FormattedMessage id='banner-header.general-examination'></FormattedMessage></div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i className='fas fa-flask'></i></div>
                                <div className='text-child'><FormattedMessage id='banner-header.medical-test'></FormattedMessage></div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i className='fas fa-user-md'></i></div>
                                <div className='text-child'><FormattedMessage id='banner-header.metal-health'></FormattedMessage></div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i className='fas fa-briefcase-medical'></i></div>
                                <div className='text-child'><FormattedMessage id='banner-header.dental-examination'></FormattedMessage></div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
