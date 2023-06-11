namespace EVRAZtransport.Models
{
    public class Route
    {
        public int Id { get; }
        public string Name_Route { get; } // название маршрута
        public string Name_Side { get; } // название стороны движения
        public virtual Movement_Side Movement_Side { get; } // объект сторон движения
        public List<Bus_Stop> Bus_Stops { get; } // список всех автобусных оставновок
    }
}
