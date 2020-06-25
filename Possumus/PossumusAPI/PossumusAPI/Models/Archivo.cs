using System.ComponentModel.DataAnnotations;

namespace PossumusAPI.Models
{
    public class Archivo
    {
        [Key]
        public int ArchivoId { get; set; }

        public string Nombre { get; set; }
    }
}
