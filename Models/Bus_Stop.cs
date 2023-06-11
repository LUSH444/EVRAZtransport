using Microsoft.AspNetCore.Mvc;

namespace EVRAZtransport.Models
{
    public class Bus_Stop
    {
        public int Id { get; }
        public string Name_Stop { get; } // название остановки
        public string Description_Stop { get; } // описание остановки
        public string Coordinates { get; } // координаты
        public string Name_Route { get; } // название маршрута
        public virtual Route Route { get; } // объект маршрута
    }
}
