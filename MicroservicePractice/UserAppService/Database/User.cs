using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UserAppService.Database
{
    public class User
    {
        public int UserID { get; set; }
        public string UserName { get; set; }
        public int UserRoleID { get; set; }
        public UserRole UserRoleName{ get; set; }
    }
}
