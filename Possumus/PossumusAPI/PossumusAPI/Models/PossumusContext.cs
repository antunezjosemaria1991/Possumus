using Microsoft.EntityFrameworkCore;

namespace PossumusAPI.Models
{
    public class PossumusContext : DbContext
    {
        public PossumusContext(DbContextOptions<PossumusContext> options) : base(options)
        {

        }

        public DbSet<Candidato> Candidatos { get; set; }
    }
}
