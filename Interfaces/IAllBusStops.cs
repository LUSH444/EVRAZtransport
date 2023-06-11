using EVRAZtransport.Models;

namespace EVRAZtransport.Interfaces
{
    public interface IAllBusStops
    {
        IEnumerable<Bus_Stop> Bus_Stops { get; }
        Bus_Stop getObjectBusStop(string Name_Stop);
    }
}
