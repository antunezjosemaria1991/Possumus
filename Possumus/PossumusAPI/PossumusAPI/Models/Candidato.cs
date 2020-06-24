using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PossumusAPI.Models
{
    public class Candidato
    {
        [Key]
        public int id { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string Nombre { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string Apellido { get; set; }

        public DateTime FechaDeNacimiento { get; set; }

        public string Email { get; set; }

    }
}
