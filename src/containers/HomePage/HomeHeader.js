import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './HomeHeader.scss';

class HomeHeader extends Component {

    render() {

        return (
            <React.Fragment>
                <div className='home-header-container'>
                    <div className='home-header-content'>
                        <div className='left-content'>
                            <i className='fas fa-bars'></i>
                            <div className='header-logo'></div>
                        </div>
                        <div className='center-content'>
                            <div className='child-content'>
                                <div><b>CHUYÊN KHOA</b></div>
                                <div className='subs-title'>Tìm bác sĩ theo chuyên khoa</div>
                            </div>
                            <div className='child-content'>
                                <div><b>CƠ SỞ Y TẾ</b></div>
                                <div className='subs-title'>CHỌN BỆNH VIỆN PHÒNG KHÁM</div>
                            </div>
                            <div className='child-content'>
                                <div><b>BÁC SĨ</b></div>
                                <div className='subs-title'>Chọn bác sĩ giỏi</div>
                            </div>
                            <div className='child-content'>
                                <div><b>GÓI KHÁM</b></div>
                                <div className='subs-title'>Khám sức khỏe tổng quát</div>
                            </div>
                        </div>
                        <div className='right-content'>
                            <div className='support'><i className='fas fa-question-circle'></i>HỖ TRỢ</div>
                            <div className='flag'></div>
                        </div>
                    </div>

                </div>
                <div className='home-header-banner'>
                    <div className='title-1'>NỀN TẢNG Y TẾ</div>
                    <div className='title-2'>CHĂM SÓC SỨC KHỎE TOÀN DIỆN</div>
                    <div className='search'>
                        <i className='fas fa-search'></i>
                        <input type='text' placeholder='Tìm chuyên khoa khám bệnh' />
                    </div>
                    <div className='options'></div>
                </div>
            </React.Fragment>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
