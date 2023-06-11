function init() {

    let map = new ymaps.Map('map', {
        center: [57.90508474372095, 59.979190388210554],
        zoom: 12
    });

    var collection = {
        type: "FeatureCollection",
        features: [
            {
                type: "Feature",
                id: 0,
                geometry: {
                    type: "Point",
                    coordinates: [57.88413, 59.95719]
                },
                properties: {
                    balloonContent: 'Время отправления автобусов: 6-00, 6-10, 6-20, 6-25, 6-30, 6-35, 6-40, 6-50, 7-00, 7-15, 7-30, 18-30, 18-40',
                    iconCaption: 'пр. Уральский "Алеся"'
                }
            }, 
            {
                type: "Feature",
                id: 1,
                geometry: {
                    type: "Point",
                    coordinates: [57.87899, 59.95723]
                },
                properties: {
                    balloonContent: 'Время отправления автобусов: 6-03, 6-13, 6-23, 6-28, 6-33, 6-38, 6-43, 6-53, 7-03, 7-18, 7-33, 18-33, 18-43',
                    iconCaption: 'Уральский клинический центр'
                }
            }, 
            {
                type: "Feature",
                id: 2,
                geometry: {
                    type: "Point",
                    coordinates: [57.87495, 59.95723]
                },
                properties: {
                    balloonContent: 'Время отправления автобусов: 6-06, 6-16, 6-26, 6-31, 6-36, 6-41, 6-46, 6-56, 7-06, 7-21, 7-36, 18-36, 18-46',
                    iconCaption: 'м–н "Минимарт"'
                }
            }, 
            {
                type: "Feature",
                id: 3,
                geometry: {
                    type: "Point",
                    coordinates: [57.87125, 59.94902]
                },
                properties: {
                    balloonContent: 'Время отправления автобусов: 6-11, 6-21, 6-31, 6-36, 6-41, 6-46, 6-51, 7-01, 7-11, 7-26, 7-41, 18-41, 18-51',
                    iconCaption: 'м-н "Кировский"'
                }
            }, 
            {
                type: "Feature",
                id: 4,
                geometry: {
                    type: "Point",
                    coordinates: [57.87338, 59.94044]
                },
                properties: {
                    balloonContent: 'Время отправления автобусов: 6-14, 6-24, 6-34, 6-39, 6-44, 6-49, 6-54, 7-04, 7-14, 7-29, 7-44, 18-44, 18-54',
                    iconCaption: 'Карьер'
                }
            }, 
            {
                type: "Feature",
                id: 5,
                geometry: {
                    type: "Point",
                    coordinates: [57.87701, 59.94043]
                },
                properties: {
                    balloonContent: 'Время отправления автобусов: 6-17, 6-27, 6-37, 6-39, 6-47, 6-52, 6-57, 7-07, 7-17, 7-32, 7-47, 18-47, 18-57',
                    iconCaption: 'м-н "Универсам"'
                }
            }, 
            {
                type: "Feature",
                id: 6,
                geometry: {
                    type: "Point",
                    coordinates: [57.88193, 59.94064]
                },
                properties: {
                    balloonContent: 'Время отправления автобусов: 6-20, 6-30, 6-40, 6-42, 6-50, 6-55, 7-00, 7-10, 7-20, 7-35, 7-50, 18-50, 19-00',
                    iconCaption: 'Гальянский рынок'
                }
            }, 
            {
                type: "Feature",
                id: 7,
                geometry: {
                    type: "Point",
                    coordinates: [57.88502, 59.94072]
                },
                properties: {
                    balloonContent: 'Время отправления автобусов: 6-23, 6-33, 6-43, 6-45, 6-53, 6-58, 7-03, 7-13, 7-23, 7-38, 7-53, 18-53, 19-03',
                    iconCaption: 'Школа №90'
                }
            }, 
            {
                type: "Feature",
                id: 8,
                geometry: {
                    type: "Point",
                    coordinates: [57.88968, 59.94101]
                },
                properties: {
                    balloonContent: 'Время отправления автобусов: 6-26, 6-36, 6-46, 6-48, 6-56, 7-01, 7-06, 7-16, 7-26, 7-41, 7-56, 18-56, 19-06',
                    iconCaption: '"У Камня"'
                }
            }, 
            {
                type: "Feature",
                id: 9,
                geometry: {
                    type: "Point",
                    coordinates: [57.89793, 59.9393]
                },
                properties: {
                    balloonContent: 'Время отправления автобусов: 6-31, 6-41, 6-51, 6-53, 7-01, 7-06, 7-11, 7-21, 7-31, 7-46, 8-01, 19-01, 19-11',
                    iconCaption: 'ул. Челюскинцев м-н "Глобус"'
                }
            }, 
            {
                type: "Feature",
                id: 10,
                geometry: {
                    type: "Point",
                    coordinates: [57.90559, 59.95022]
                },
                properties: {
                    balloonContent: 'Время отправления автобусов: 6-36, 6-46, 6-56, 6-59, 7-06, 7-11, 7-16, 7-26, 7-36, 7-51, 8-06, 19-06, 19-16',
                    iconCaption: 'Музей'
                }
            }, 
            {
                type: "Feature",
                id: 11,
                geometry: {
                    type: "Point",
                    coordinates: [57.90774, 59.96391]
                },
                properties: {
                    balloonContent: 'Время отправления автобусов: 6-40, 6-50, 7-00, 7-03, 7-10, 7-15, 7-20, 7-30, 7-40, 7-55, 8-10, 19-10, 19-20',
                    iconCaption: 'к/т "Современник"'
                }
            }, 
            {
                type: "Feature",
                id: 12,
                geometry: {
                    type: "Point",
                    coordinates: [57.90796, 59.97238]
                },
                properties: {
                    balloonContent: 'Время отправления автобусов: 6-43, 6-53, 7-03, 7-06, 7-13, 7-18, 7-23, 7-33, 7-43, 7-58, 8-13, 19-13, 19-23',
                    iconCaption: 'к/т "Родина-Киномакс"'
                }
            }, 
            //{
                //type: "Feature",
                //id: 13,
                //geometry: {
                //    type: "Point",
                //    coordinates: [57.91813, 59.97917]
                //},
                //properties: {
                //    balloonContent: 'Время отправления автобусов: 6-50, 7-00, 7-10, 7-13, 7-20, 7-25, 7-30, 7-40, 7-50, 8-05, 8-20, 19-20, 19-30',
                //    iconCaption: 'пр. Мира, ул. Циолковского'
                //}
            //}, 
            {
                type: "Feature",
                id: 14,
                geometry: {
                    type: "Point",
                    coordinates: [57.92975, 60.00258]
                },
                properties: {
                    balloonContent: 'Время отправления автобусов: 6-56, 7-06, 7-16, 7-19, 7-26, 7-31, 7-36, 7-46, 7-56, 8-11, 8-26, 19-26, 19-36',
                    iconCaption: 'Бетонный (ЖБИ)'
                }
            }, 
            {
                type: "Feature",
                id: 15,
                geometry: {
                    type: "Point",
                    coordinates: [57.92931, 60.01243]
                },
                properties: {
                    balloonContent: 'Время отправления автобусов: 6-59, 7-09, 7-19, 7-22, 7-29, 7-34, 7-39, 7-49, 7-59, 8-14, 8-29, 19-29, 19-39',
                    iconCaption: 'Управление комбината'
                }
            }, 
            {
                type: "Feature",
                id: 16,
                geometry: {
                    type: "Point",
                    coordinates: [57.93458, 60.02426]
                },
                properties: {
                    balloonContent: 'Время прибытия автобусов: 7-02, 7-12, 7-22, 7-25, 7-32, 7-37, 7-42, 7-52, 8-02, 8-17, 8-32, 19-32, 19-42',
                    iconCaption: 'Комсомольская'
                }
            } 
        ]
    };

    // Построение маршрута.
    // По умолчанию строится автомобильный маршрут.
    var multiRoute = new ymaps.multiRouter.MultiRoute({
        // Точки маршрута. Точки могут быть заданы как координатами, так и адресом. 
        referencePoints: [
            [57.88413, 59.95719],
            [57.87899, 59.95723],
            [57.87495, 59.95723],
            [57.87125, 59.94902],
            [57.87338, 59.94044],
            [57.87701, 59.94043],
            [57.88193, 59.94064],
            [57.88502, 59.94072],
            [57.88968, 59.94101],
            [57.89793, 59.9393],
            [57.90559, 59.95022],
            [57.90774, 59.96391],
            [57.90796, 59.97238],
            [57.91813, 59.97917]
        ],
        params: {
            // Тип маршрута: на общественном транспорте.
            routingMode: "masstransit"
        }
    }, {
        // Автоматически устанавливать границы карты так,
        // чтобы маршрут был виден целиком.
        boundsAutoApply: true
    });

    objectManager = new ymaps.ObjectManager();
    objectManager.objects.options.set('preset', 'islands#orangeCircleDotIconWithCaption');
    objectManager.add(collection);
    map.geoObjects.add(objectManager);

    var glyphIcon1 = new ymaps.Placemark([57.91813, 59.97917], {}, {
        preset: 'islands#redGlyphIcon',
        iconGlyph: 'user',
        iconGlyphColor: 'blue'
    });
    map.geoObjects.add(glyphIcon1);
    // Добавление маршрута на карту.
    map.geoObjects.add(multiRoute);

    map.controls.remove('geolocationControl');
    map.controls.remove('searchControl');
    map.controls.remove('trafficControl');
    map.controls.remove('typeSelector');
    map.controls.remove('fullscreenControl');
    map.controls.remove('zoomControl');
    map.controls.remove('rulerControl');
    map.controls.remove('scrollZoom');
}

ymaps.ready(init);
