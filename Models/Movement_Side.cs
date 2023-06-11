namespace EVRAZtransport.Models
{
    public class Movement_Side
    {
        public int Id { get; }
        public string Name_Side { get; } // название стороны движения
        public List<Route> Routes { get; } // список всех маршрутов на данной стороне движения
    }
}
