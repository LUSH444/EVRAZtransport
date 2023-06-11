using EVRAZtransport.Models;

namespace EVRAZtransport.ViewModels
{
    public class CarsListViewModel
    {

        public IEnumerable<Car> allCars { get; set; }

        public string currCategory { get; set; }

    }
}
