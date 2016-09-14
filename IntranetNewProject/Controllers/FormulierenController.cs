using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Intranet.Controllers
{
    public class FormulierenController : Controller
    {
        // GET: Formulieren
        public ActionResult Vakantie()
        {
            return View();
        }
    }
}