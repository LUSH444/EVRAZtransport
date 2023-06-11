using EVRAZtransport.Models;

namespace EVRAZtransport.Interfaces
{
    public interface IAllCars
    {

        IEnumerable<Car> Cars { get;}
        IEnumerable<Car> getFavCars { get;}
        Car getObjectCar(int carID);

    }
}
