using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace PossumusAPI.Migrations
{
    public partial class AgregoTablaArchivos : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "id",
                table: "Candidatos",
                newName: "CandidatoId");

            migrationBuilder.AddColumn<string>(
                name: "Cv",
                table: "Candidatos",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Archivos",
                columns: table => new
                {
                    ArchivoId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Nombre = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Archivos", x => x.ArchivoId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Archivos");

            migrationBuilder.DropColumn(
                name: "Cv",
                table: "Candidatos");

            migrationBuilder.RenameColumn(
                name: "CandidatoId",
                table: "Candidatos",
                newName: "id");
        }
    }
}
