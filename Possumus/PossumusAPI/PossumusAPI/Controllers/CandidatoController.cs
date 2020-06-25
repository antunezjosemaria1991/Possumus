using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PossumusAPI.Models;
using System.IO;
using System.Net.Http.Headers;

namespace PossumusAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidatoController : ControllerBase
    {
        private readonly PossumusContext _context;

        public CandidatoController(PossumusContext context)
        {
            _context = context;
        }

        // GET: api/Candidato
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Candidato>>> GetCandidatos()
        {
            return await _context.Candidatos.ToListAsync();
        }

        // GET: api/Candidato/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Candidato>> GetCandidato(int id)
        {
            var candidato = await _context.Candidatos.FindAsync(id);

            if (candidato == null)
            {
                return NotFound();
            }

            return candidato;
        }

        // PUT: api/Candidato/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCandidato(int id, Candidato candidato)
        {
            if (id != candidato.CandidatoId)
            {
                return BadRequest();
            }

            _context.Entry(candidato).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CandidatoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Candidato
        [HttpPost]
        public async Task<ActionResult<Candidato>> PostCandidato(Candidato candidato)
        {
            _context.Candidatos.Add(candidato);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCandidato", new { id = candidato.CandidatoId }, candidato);
        }

        // DELETE: api/Candidato/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Candidato>> DeleteCandidato(int id)
        {
            var candidato = await _context.Candidatos.FindAsync(id);
            if (candidato == null)
            {
                return NotFound();
            }

            _context.Candidatos.Remove(candidato);
            await _context.SaveChangesAsync();

            return candidato;
        }

        private bool CandidatoExists(int id)
        {
            return _context.Candidatos.Any(e => e.CandidatoId == id);
        }

        //[HttpPost, DisableRequestSizeLimit]
        //public IActionResult Upload()
        //{
        //    try
        //    {
        //        var file = Request.Form.Files[0];
        //        var folderName = Path.Combine("Resources", "Images");
        //        var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);

        //        if (file.Length > 0)
        //        {
        //            var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
        //            var fullPath = Path.Combine(pathToSave, fileName);
        //            var dbPath = Path.Combine(folderName, fileName);

        //            using (var stream = new FileStream(fullPath, FileMode.Create))
        //            {
        //                file.CopyTo(stream);
        //            }

        //            return Ok(new { dbPath });
        //        }
        //        else
        //        {
        //            return BadRequest();
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        return StatusCode(500, $"Internal server error: {ex}");
        //    }
        //}
    }
}
