
import React, { useState } from 'react';
import { Row, Col, Input, Checkbox } from 'antd';

import { ReactComponent as Search } from '../icons/Search.svg';
import { ReactComponent as Close } from '../icons/Close.svg';

const cities = ['Москва', 'Московская область', 'Санкт-Петербург', 'Ленинградская область', 'Екатеринбург', 'Краснодар', 'Новосибирск', 'Красноярск', 'Челябинск', 'Саратов', 'Омск', 'Балашиха', 'Волгоград', 'Воронеж', 'Иркутск', 'Хабаровск', 'Томск', 'Ярославль'];
let leftHalf = [];
let rightHalf = [];

const mainCities = ['Москва и МО', 'Санкт-Петербург и ЛО', 'Екатеринбург', 'Уфа', 'Краснодар', 'Тюмень', 'Казань', 'Нижний Новгород'];

const leftCityHalf = Math.ceil(cities.length / 2);

cities.forEach((item, i) => {
    if (i < leftCityHalf) {
        leftHalf.push(item);
    } else {
        rightHalf.push(item);
    }
})

const SelectRegionPopup = () => {

    const [search, setSearch] = useState('');

    const searchHandler = (props) => {
        const symbol = props.nativeEvent.data;

        if (symbol === null) {
            setSearch(search.slice(0, -1));
        } else {
            setSearch(search + symbol);
        }

    }

    return (
        <div className="SelectRegionPopup__wrapper">

            <div className="close"><Close /></div>

            <div className="SelectRegionPopup__container">

                <p className="SelectRegionPopup__title">Выберите регион или город</p>

                <div className="SelectRegionPopup__searchBlock">

                    <Input className='SelectRegionPopup__searchBlock__input'
                        placeholder="Введите название региона или города"
                        suffix={<Search />}
                        value={search}
                        onChange={prop => searchHandler(prop)} />

                    <Checkbox className='SelectRegionPopup__searchBlock__checkbox' value='' >Определить автоматически</Checkbox>

                </div>

                <div className="SelectRegionPopup__quickAccess">
                    <div>
                        <Row gutter={[12, 12]}>

                            {
                                mainCities.map(item => {
                                    return (
                                        <Col>
                                            <span className="SelectRegionPopup__quickAccess__item" onClick={() => { setSearch(item) }}>{item}</span>
                                        </Col>
                                    )
                                })
                            }


                        </Row>
                    </div>
                </div>

            </div>

                <div className="SelectRegionPopup__list">

                    <Row gutter={[70, 0]}>

                        <Col xl={{ span: 12 }} lg={{ span: 12 }} md={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 24 }}>
                            {
                                leftHalf.map(item => {
                                    return <span onClick={() => { setSearch(item) }} className='SelectRegionPopup__list__item'>{item}</span>
                                })
                            }

                        </Col>


                        <Col xl={{ span: 12 }} lg={{ span: 12 }} md={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 24 }}>
                            {
                                rightHalf.map(item => {
                                    return <p onClick={() => { setSearch(item) }} className='SelectRegionPopup__list__item'>{item}</p>
                                })
                            }

                        </Col>


                    </Row>
                </div>
            </div>

    )
}

export default SelectRegionPopup;