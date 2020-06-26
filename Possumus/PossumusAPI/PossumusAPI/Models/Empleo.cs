using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PossumusAPI.Models
{
    public class Empleo
    {
        public int EmpleoId { get; set; }

        public string Nombre { get; set; }

        public int PeriodoDesde { get; set; }

        public int PeriodoHasta { get; set; }
    }
}
