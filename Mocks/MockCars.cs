using EVRAZtransport.Interfaces;
using EVRAZtransport.Models;

namespace EVRAZtransport.Mocks
{
    public class MockCars : IAllCars
    {
        private readonly ICarsCategory _categoryCars = new MockCategory();
        public IEnumerable<Car> Cars 
        {
            get
            {
                return new List<Car>
                {
                    new Car 
                    {   
                        name = "Tesla Model S", 
                        shortDesc = "Model S", 
                        longDesc = "Автомобиль года, один из быстрейших американских седанов.", 
                        img = "https://i.trse.ru/2015/02/tesla-model-s-2015-features.jpg", 
                        price = 45000, 
                        isFavourite = false, 
                        available = true, 
                        Category = _categoryCars.AllCategories.First()
                    },
                    new Car 
                    {   
                        name = "Porsche Taycan", 
                        shortDesc = "Taycan", 
                        longDesc = "Лучшие спортивные моменты — это секунды после состояния эйфории бегуна, когда наша душа находится в идеальном балансе.", 
                        img = "https://www.carscoops.com/wp-content/uploads/2020/09/Porsche-Taycan-2.jpg", 
                        price = 65000, 
                        isFavourite = true, 
                        available = false, 
                        Category = _categoryCars.AllCategories.First()
                    },
                    new Car 
                    {   
                        name = "BMW M5", 
                        shortDesc = "M5", 
                        longDesc = "Автомобили M BMW 5 серии впечатляющим образом сочетают в себе фирменную спортивность BMW M с комфортом и элегантностью седана бизнес-класса.", 
                        img = "https://img5.goodfon.ru/wallpaper/nbig/f/7d/bmw-m5-competition-2018-f90-seryi-chetyriokhdvernyi-4x4-seda.jpg", 
                        price = 60000, 
                        isFavourite = false, 
                        available = false, 
                        Category = _categoryCars.AllCategories.Last()
                    },
                    new Car 
                    { 
                        name = "Mercedes S63 Coupe", 
                        shortDesc = "S63 Coupe", 
                        longDesc = "Mercedes — это комфорт, статусность и luxury.", 
                        img = "https://static.tildacdn.com/tild6535-3938-4633-b531-326132306334/image13.png", 
                        price = 63000, 
                        isFavourite = true,
                        available = true, 
                        Category = _categoryCars.AllCategories.Last()
                    }
                };
            }
        }
        public IEnumerable<Car> getFavCars { get; set; }

        public Car getObjectCar(int carID)
        {
            throw new NotImplementedException();
        }
    }
}
