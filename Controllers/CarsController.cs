﻿using EVRAZtransport.Interfaces;
using EVRAZtransport.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace EVRAZtransport.Controllers
{
    public class CarsController : Controller
    {

        private readonly IAllCars _allCars;
        private readonly ICarsCategory _allCategories;

        public CarsController(IAllCars iAllCars, ICarsCategory iCarsCat)
        {
            _allCars = iAllCars;
            _allCategories = iCarsCat;
        }

        public ViewResult List()
        {
            ViewBag.Title = "EVRAZtransport";
            CarsListViewModel obj = new CarsListViewModel();
            obj.allCars = _allCars.Cars;
            obj.currCategory = "Автомобили";

            return View(obj);
        }
    }
}
