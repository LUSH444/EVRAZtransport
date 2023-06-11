using EVRAZtransport.Interfaces;
using EVRAZtransport.Models;

namespace EVRAZtransport.Mocks
{
    public class MockMovement_Side : IRoutesSide
    {
        public IEnumerable<Movement_Side> Movement_Sides {
            get
            {
                return new List<Movement_Side>(
                    new Movement_Side
                    {
                        Name_Side = "Движение автобусов с внешней стороны ЕВРАЗ НТМК"
                    }
                );
            }
    }
}
