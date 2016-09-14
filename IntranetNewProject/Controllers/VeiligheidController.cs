using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Intranet.Controllers
{
    public class VeiligheidController : Controller
    {
        // GET: Veiligheid
        public ActionResult MSDS()
        {
            return View();

        }
        public ActionResult Procedures()
        {
            return View();
        }
    }
}