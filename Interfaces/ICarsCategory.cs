using EVRAZtransport.Models;

namespace EVRAZtransport.Interfaces
{
    public interface ICarsCategory
    {

        IEnumerable<Category> AllCategories { get; }

    }
}
