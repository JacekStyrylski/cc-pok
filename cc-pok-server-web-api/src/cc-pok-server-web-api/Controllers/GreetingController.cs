using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using cc_pok_server_web_api.Model;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace cc_pok_server_web_api.Controllers
{
    [Route("api/[controller]")]
    public class GreetingController : Controller
    {

        // GET: api/values
        [HttpGet]
        public string Get()
        {
            return "witam";
        }

       
    }
}
