using System;

namespace cc_pok_server_web_api.Model
{
    public class Employee
    {
        public Guid EmployeID { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
                //optional
        public string Email { get; set; }
        //optional
        public string Phone { get; set; }

    }
}
