using EVRAZtransport.Models;

namespace EVRAZtransport.Interfaces
{
    public interface IRoutesSide
    {
        IEnumerable<Movement_Side> Movement_Sides { get; }
    }
}
