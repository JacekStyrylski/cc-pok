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
    public class EmployeeController : Controller
    {
        public IEmployeeRepository Employees { get; set; }

        public EmployeeController(IEmployeeRepository employees)
        {
            Employees = employees;
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<Employee> Get()
        {
            return Employees.GetAll();
        }

        // GET api/employee/5
        [HttpGet("{id}")]
        public IActionResult Get(Guid id)
        {
            var employee = Employees.Find(id);
            if (employee == null)
            {
                return NotFound();
            }
            return new ObjectResult(employee);
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]Employee employee)
        {
            if (employee == null || !ModelState.IsValid)
            {
                return BadRequest();
            }

            Employees.Add(employee);

            return CreatedAtRoute("Get", new { id = employee.EmployeID }, employee);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]Employee employee)
        {
            if(employee == null)
            {
                return BadRequest();
            }

            var foundEmployee = Employees.Find(employee.EmployeID);
            if (employee == null)
            {
                return NotFound();
            }

            Employees.Update(employee);

            return new NoContentResult();

        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public IActionResult Delete(Guid id)
        {
            if (Employees.Remove(id) == null)
            {
                return NotFound();
            }
            return new NoContentResult();
        }
    }
}
