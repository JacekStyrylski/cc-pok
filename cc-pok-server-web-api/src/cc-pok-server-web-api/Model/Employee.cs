using System;
using System.ComponentModel.DataAnnotations;

namespace cc_pok_server_web_api.Model
{
    public class Employee
    {
        private Guid _EmployeID;

        public Employee(string name, string address, string email = "", string phone = "")
        {
            this.Name = name;
            this.Address = address;
            this._EmployeID = Guid.NewGuid();
        }

        public Guid EmployeID
        {
            get { return _EmployeID; }
        }

        [Required]
        public string Name { get; set; }
        [Required]
        public string Address { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }

    }
}
