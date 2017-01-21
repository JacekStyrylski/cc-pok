using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cc_pok_server_web_api.Model
{
    public class EmployeeRepository : IEmployeeRepository
    {
        private static ConcurrentDictionary<Guid, Employee> _employees = new ConcurrentDictionary<Guid, Employee>();

        public EmployeeRepository()
        {
            // Mocked data

            Add(new Employee("Jacek", "Katowice, Ułańska 11"));
            Add(new Employee("Bartek", "Katowice, Batorego 9"));
            Add(new Employee("Gosia", "Katowice, Adama 17"));
            Add(new Employee("Ewa", "Katowice, Łużycka 17"));
            Add(new Employee("Jola", "Katowice, Lipowa"));
        }

        public void Add(Employee employee)
        {
            if (!_employees.TryAdd(employee.EmployeeID, employee))
            {
                throw new Exception(string.Format("There already is an employee with following GUID: {0} \nPlease retry."
                    , employee.EmployeeID));
            }
        }

        public IEnumerable<Employee> GetAll()
        {
            return _employees.Values;
        }

        public Employee Find(Guid key)
        {
            Employee employee;
            _employees.TryGetValue(key, out employee);
            return employee;
        }

        public Employee Remove(Guid key)
        {
            Employee employee;
            _employees.TryRemove(key, out employee);
            return employee;
        }

        public void Update(Employee employee)
        {
            _employees[employee.EmployeeID] = employee;
        }
    }
}
