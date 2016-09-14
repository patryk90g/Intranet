using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Intranet.Controllers
{
    public class OrganisatieController : Controller
    {
        // GET: Organisatie
        public ActionResult Productie()
        {
            return View();
        }
        public ActionResult Expeditie()
        {
            return View();
        }
        public ActionResult Aanmak()
        {
            return View();
        }
        public ActionResult HR()
        {
            return View();
        }
        public ActionResult Administratie()
        {
            return View();
        }
    }
}