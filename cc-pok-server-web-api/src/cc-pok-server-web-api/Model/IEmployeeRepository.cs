using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cc_pok_server_web_api.Model
{
    public interface IEmployeeRepository
    {
        void Add(Employee employee);
        IEnumerable<Employee> GetAll();
        Employee Find(Guid key);
        Employee Remove(Guid key);
        void Update(Employee employee);
    }
}
