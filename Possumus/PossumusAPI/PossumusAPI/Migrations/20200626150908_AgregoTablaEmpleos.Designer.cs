﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using PossumusAPI.Models;

namespace PossumusAPI.Migrations
{
    [DbContext(typeof(PossumusContext))]
    [Migration("20200626150908_AgregoTablaEmpleos")]
    partial class AgregoTablaEmpleos
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("PossumusAPI.Models.Archivo", b =>
                {
                    b.Property<int>("ArchivoId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Nombre");

                    b.HasKey("ArchivoId");

                    b.ToTable("Archivos");
                });

            modelBuilder.Entity("PossumusAPI.Models.Candidato", b =>
                {
                    b.Property<int>("CandidatoId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Apellido")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("Cv");

                    b.Property<string>("Email");

                    b.Property<DateTime>("FechaDeNacimiento");

                    b.Property<string>("Nombre")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.HasKey("CandidatoId");

                    b.ToTable("Candidatos");
                });

            modelBuilder.Entity("PossumusAPI.Models.Empleo", b =>
                {
                    b.Property<int>("EmpleoId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Nombre");

                    b.Property<int>("PeriodoDesde");

                    b.Property<int>("PeriodoHasta");

                    b.HasKey("EmpleoId");

                    b.ToTable("Empleos");
                });
#pragma warning restore 612, 618
        }
    }
}